<template>
  <v-main>
    <v-container fluid>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <v-fade-transition mode="out-in">
            <KeepAlive>
              <component :is="Component"></component>
            </KeepAlive>
          </v-fade-transition>
        </template>
      </RouterView>
    </v-container>
  </v-main>
</template>
