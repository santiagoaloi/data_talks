<template>
  <div class="pa-4">
    <v-expansion-panels>
      <v-expansion-panel title="Potential non-relevant fields">
        <v-expansion-panel-text>
          <v-card-text>
            <div class="mt-5 d-flex">
              <v-btn
                v-if="store.isImportedRemoved"
                @click="store.restoreImported()"
                icon
                size="x-small"
                class="mr-3"
                title="restore importey key"
              >
                <v-icon icon="mdi-undo" size="13" />
              </v-btn>

              <v-btn
                v-else
                @click="store.removeImported()"
                icon
                size="x-small"
                class="mr-3"
                title="remove importey key"
              >
                <v-icon icon="mdi-trash-can-outline" size="13" />
              </v-btn>
              <code>
                <b> imported</b> - appears to be related to a manageement system
                the customer might be using, the values are empty and hardly
                relevant to any strategic dashboard panel.
              </code>
            </div>
            <div class="mt-5 d-flex">
              <v-btn
                v-if="store.isCountryRemoved"
                @click="store.restoreCountry()"
                icon
                size="x-small"
                class="mr-3"
                title="restore country key"
              >
                <v-icon icon="mdi-undo" size="13" />
              </v-btn>

              <v-btn
                v-else
                @click="store.removeCountry()"
                icon
                size="x-small"
                class="mr-3"
                title="remove country key"
              >
                <v-icon icon="mdi-trash-can-outline" size="13" />
              </v-btn>
              <code>
                <b> country</b> - its unclear what this field might be used for,
                since it appears we already have the <b> Land </b> field, not to
                mention that its not usable for correlation due to misspellings.
                if the customer consider this field is neccesary, this data must
                be normalized.
              </code>
            </div>
            <div class="mt-5 d-flex">
              <v-btn
                v-if="store.isSourceRemoved"
                @click="store.restoreSource()"
                icon
                size="x-small"
                class="mr-3"
                title="restore source key"
              >
                <v-icon icon="mdi-undo" size="13" />
              </v-btn>

              <v-btn
                v-else
                @click="store.removeSource()"
                icon
                size="x-small"
                class="mr-3"
                title="remove source key"
              >
                <v-icon icon="mdi-trash-can-outline" size="13" />
              </v-btn>
              <code>
                <b> source</b> - unless its needed for some sort of tracking,
                doesn't seem relevant to be used in any strategic dashboard
                panel.
              </code>
            </div>
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel title="Unique key(s) to identify a supporter">
        <v-expansion-panel-text>
          <v-card-text>
            <div class="mt-5 d-flex">
              <code>
                <b class="text-red"> id</b> - could be, but the values are all
                in different formats. also one record is missing a value which
                could be a mistake or an intentional omission. it's important to
                investigate with the customer the reason.
              </code>
            </div>
            <div class="mt-5 d-flex">
              <code>
                <b class="text-green"> Member ID</b> - its consistent in format
                and uniqueness. it's important to ensure that the Member ID is
                indeed unique for each customer.
              </code>
            </div>
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel title="Unique key(s) to identify a match">
        <v-expansion-panel-text>
          <v-card-text>
            <div class="mt-5 d-flex">
              <code>
                <b> Opponent,</b>
                <b> Event Date</b> - these 2 fields should be sufficient to
                uniquely identify a match.
              </code>
            </div>
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel title="Unique key(s) to identify a purchase">
        <v-expansion-panel-text>
          <v-card-text>
            <div class="mt-5 d-flex">
              <code>
                <b> ticket ID,</b>
                should be sufficient to uniquely identify a purchase.
              </code>
            </div>
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script setup>
import { useOnboardingStore } from "@/store/onboarding";
const store = useOnboardingStore();
</script>
