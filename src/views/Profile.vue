<template>
  <v-card>
    <v-card-title> Profiles object keys mapping </v-card-title>

    <v-card-subtitle>
      Readlony computed mapping of object keys from raw data to match Api
      Schema</v-card-subtitle
    >

    <v-card-text>
      <v-alert class="mb-5" border="top">
        <div>
          Age value is evaluated based on the current date and the subscriber
          birthday
        </div>
      </v-alert>

      <vue-json-pretty
        v-model:data="store.profileData"
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
