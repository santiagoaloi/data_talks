<template>
  <v-card>
    <v-card-title> Events object keys mapping </v-card-title>

    <v-card-subtitle>
      Readonly computed mapping of object keys from raw data to match Api
      Schema</v-card-subtitle
    >

    <v-card-text>
      <v-alert class="mb-5" border="top">
        <div>
          We don't have anough values to map, but the ones we do have are
          mapped..
        </div>
      </v-alert>

      <vue-json-pretty
        v-model:data="store.eventData"
        :showDoubleQuotes="false"
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
