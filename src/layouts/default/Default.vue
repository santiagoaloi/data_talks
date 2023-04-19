<template>
  <v-app>
    <AppBar />
    <!-- <ProfileDrawer /> -->
    <LeftDrawer />
    <RightDrawer />
    <default-view />
    <snackbar />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import AppBar from "@/components/AppBar.vue";
import ProfileDrawer from "@/components/ProfileDrawer.vue";
import LeftDrawer from "@/components/LeftDrawer.vue";
import RightDrawer from "@/components/RightDrawer.vue";

import snackbar from "@/components/Snackbar.vue";
</script>
