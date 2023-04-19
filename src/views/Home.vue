<template>
  <v-card>
    <v-card-title> Raw data exported from ticketing system</v-card-title>
    <v-card-subtitle> <v-chip> Writable </v-chip></v-card-subtitle>
    <v-card-text>
      <vue-json-pretty
        v-model:data="store.data"
        :showDoubleQuotes="false"
        editable
        showSelectController
        :deep="1"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import { useOnboardingStore } from "@/store/onboarding";
const store = useOnboardingStore();
</script>
