<template>
  <v-card>
    <v-navigation-drawer width="550" location="right" color="#f7f9fc" permanent>
      <Questions v-if="route.name === 'Home'" />
      <ProfileSquema v-if="route.name === 'Profile'" />
      <EventsSquema v-if="route.name === 'Events'" />
    </v-navigation-drawer>
  </v-card>
</template>
<script setup>
import { useRoute } from "vue-router";
import Questions from "@/components/Questions.vue";
import ProfileSquema from "@/components/profileSchema.vue";
import EventsSquema from "@/components/eventsSquema.vue";
const route = useRoute();
</script>
