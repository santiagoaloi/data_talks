// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    globalSnackbar: {
      model: false,
      text: "",
      color: "",
    },
  }),

  actions: {
    snackbar(text, type) {
      let color;

      switch (type) {
        case "error":
          // Vuetify error color (defined in theme)
          color = "error";
          break;

        default:
          // Vuetify primary color (defined in theme)
          color = "#e95020";
          break;
      }

      this.globalSnackbar = {
        model: true,
        text,
        color,
      };
    },
  },
});
