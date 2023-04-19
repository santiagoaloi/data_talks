<template>
  <v-card>
    <v-card-title> Data normalization </v-card-title>

    <v-card-text>
      <v-alert class="mb-5" border="top">
        <div>
          Dates need to be given in ISO format: YYYY-MM-DD Datetime: YYYY-MM-DD
        </div>

        <div>Language should have a consistent speparator. `;`</div>

        <div>
          Empty values should be set as
          <code class="text-purple-accent-1">null</code> and not empty strings
        </div>

        <div>
          Duplicated field names are renamed
          <code class="text-purple-accent-1 mr-2">addres</code>
          <code class="text-blue-accent-1">addres__1</code>
        </div>
      </v-alert>

      <vue-json-pretty
        v-model:data="store.cleanedData"
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
