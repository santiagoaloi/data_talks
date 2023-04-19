<template>
  <v-card>
    <v-navigation-drawer color="#f7f9fc" permanent>
      <v-list>
        <v-list-item
          lines="two"
          title="Overview"
          subtitle="JSON raw data"
        ></v-list-item>
        <v-list-item
          to="/"
          prepend-icon="mdi-code-json"
          title="Data"
        ></v-list-item>

        <v-list-item
          lines="two"
          title="Data points"
          subtitle="types"
        ></v-list-item>

        <v-list-item
          to="Profile"
          prepend-icon="mdi-code-json"
          title="Profile"
        ></v-list-item>
        <v-list-item
          to="Events"
          prepend-icon="mdi-code-json"
          title="Events"
        ></v-list-item>
        <v-list-item
          to="Inventory"
          prepend-icon="mdi-code-json"
          title="Inventory"
        ></v-list-item>
      </v-list>

      <v-list-item
        lines="two"
        title="Data Normalization"
        subtitle="Data quality"
      ></v-list-item>
      <v-list>
        <v-list-item
          to="/Clean"
          prepend-icon="mdi-auto-fix"
          title="Cleaning"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2"></div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>
