<template>
  <div class="pa-4">
    <v-expansion-panels>
      <v-expansion-panel title="Profile object keys mapping">
        <v-expansion-panel-text>
          <code>
            <div>
              customer_id : Member ID (<span class="text-blue">Integer</span>)
            </div>
            <div>
              first_name : Vorname (<span class="text-green">String</span>)
            </div>
            <div>
              last_name : Nachname (<span class="text-green">String</span>)
            </div>
            <div>email : email (<span class="text-green">String</span>)</div>
            <div>
              address : Address__1 (<span class="text-green">String</span>)
            </div>
            <div>
              Zipcode : postal_code (<span class="text-green">String</span>)
            </div>
            <div>city : City (<span class="text-green">String</span>)</div>
            <div>country : Land (<span class="text-green">String</span>)</div>
            <div>
              isMember : evaluated (<span class="text-green">String</span>)
            </div>
            <div>age : evaluated (<span class="text-blue">Integer</span>)</div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
