import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import RawData from "@/data/raw-data.json";

import * as chrono from "chrono-node";

import { useAppStore } from "@/store/app";

const app = useAppStore();

export const useOnboardingStore = defineStore("onboardng", () => {
  const isImportedRemoved = ref(false);
  const isSourceRemoved = ref(false);
  const isCountryRemoved = ref(false);

  const backupCountryValues = ref([]);

  //Raw Data from CSV to JSON
  const data = ref(RawData);

  // Data point
  // generate the right "person type" api schema
  const profileData = computed(() => {
    return data.value.map((raw) => {
      const {
        ["Member ID"]: customer_id,
        Vorname: first_name,
        Nachname: last_name,
        email,
        Address__1: address,
        Zipcode: postal_code,
        City: city,
        Land: country,
        Birthday,
      } = raw;
      return {
        type: "person",
        null: "main_group",
        data: {
          customer_id,
          first_name,
          last_name,
          email,
          address,
          postal_code: postal_code.toString(),
          city,
          country,
          is_member: "Yes",

          Age: (() => {
            const parsedDate = chrono.parseDate(Birthday);
            if (parsedDate) {
              const birthDate = new Date(parsedDate.setFullYear(2022, 9, 10));
              const age = new Date().getFullYear() - birthDate.getFullYear();
              return age;
            }
            return null;
          })(),
        },
        datatalksId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      };
    });
  });

  //Data point
  // generate the right "event type" api schema
  const eventData = computed(() => {
    return data.value.map((raw) => {
      const {
        registered,
        ["Member ID"]: customer_id,
        ["Ticket Price"]: total_purchase_amount,
        points,
      } = raw;
      return {
        type: "purchase_ev",
        null: "main_group",
        data: {
          event_id: null,
          event_type: null,
          event_datetime: registered,
          customer_id,
          status: null,
          payment_method: null,
          total_purchase_amount: total_purchase_amount.toString(),
          total_purchase_discounted_amount: null,
          currency: null,
          online_purchase: null,
          Member_points_before_purchase: null,
          purchase_points: points.toString(),
        },
        datatalksId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      };
    });
  });

  const cleanedData = computed(() =>
    data.value.map(
      ({
        registered,
        scanned,
        Birthday,
        "Last merchandise order": lastMerchandiseOrder,
        Language,
        Address__1,
      }) => ({
        address: Address__1 || null,
        registered: chrono
          .parseDate(registered)
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),

        scanned: chrono
          .parseDate(scanned)
          .toISOString()
          .replace("T", " ")
          .substring(0, 19),

        birthday: (() => {
          const parsedDate = chrono.parseDate(Birthday);
          if (parsedDate) {
            const today = new Date();
            const newDate = new Date(parsedDate.getTime());
            newDate.setFullYear(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            );
            return newDate.toISOString().substring(0, 10);
          }
          return null;
        })(),

        lastMerchandiseOrder: (() => {
          const parsedDate = chrono.parseDate(lastMerchandiseOrder);
          if (parsedDate) {
            const today = new Date();
            const newDate = new Date(parsedDate.getTime());
            newDate.setFullYear(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            );
            return newDate.toISOString().substring(0, 10);
          }
          return null;
        })(),

        language: (() => {
          let str = Language;
          return str.replace(/:/g, ",");
        })(),
      })
    )
  );

  computed({
    // Allows customer exported ticketing system data
    // to be edited and saved.
    get: () => JSON.stringify(data.value),
    set: (newVal) => (data.value = JSON.parse(newVal)),
  });

  function removeImported() {
    // Removes the imported key from all raw data records
    data.value.forEach((obj) => {
      delete obj.imported;
    });
    isImportedRemoved.value = true;
    app.snackbar("imported field removed from records");
  }

  function restoreImported() {
    // Restores the source key and its value to raw data.
    data.value.forEach((obj) => {
      obj.imported = "";
    });
    isImportedRemoved.value = false;
    app.snackbar("imported field restored");
  }

  function removeSource() {
    // Removes the source key from all raw data records
    data.value.forEach((obj) => {
      delete obj.source;
    });
    isSourceRemoved.value = true;
    app.snackbar("source field removed from records");
  }

  function restoreSource() {
    // Restores the source key and its value to raw data.
    data.value.forEach((obj) => {
      obj.source = "RESTful API";
    });
    isSourceRemoved.value = false;
    app.snackbar("source field removed from records");
  }

  function removeCountry() {
    // Removes the country key from all raw data records
    const removedValues = [];
    data.value.forEach((obj) => {
      if (obj.country) {
        removedValues.push(obj.country);
        delete obj.country;
      }
    });
    backupCountryValues.value = [
      ...backupCountryValues.value,
      ...removedValues,
    ];
    isCountryRemoved.value = true;
    app.snackbar("country field removed");
  }

  function restoreCountry() {
    // Restores the country key and its value to raw data.
    data.value.forEach((obj) => {
      if (!obj.country === undefined) {
        obj.country = backupCountryValues.value.shift();
      }
    });
    isCountryRemoved.value = false;
    app.snackbar("country field restored");
  }

  return {
    data,
    removeImported,
    removeCountry,
    removeSource,
    restoreImported,
    restoreSource,
    restoreCountry,
    isImportedRemoved,
    isSourceRemoved,
    isCountryRemoved,
    backupCountryValues,
    profileData,
    eventData,
    cleanedData,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useOnboardingStore, import.meta.hot));
