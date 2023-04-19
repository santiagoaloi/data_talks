<template>
  <div class="pa-4">
    <v-expansion-panels>
      <v-expansion-panel title="Events object keys mapping">
        <v-expansion-panel-text>
          <code>
            <div>
              <div>event_id : (<span class="text-green">String</span>)</div>
            </div>
            <div>event_type : (<span class="text-green">String</span>)</div>
            <div>
              event_datetime : registered (<span class="text-green">String</span
              >)
            </div>
            customer_id : Member ID (<span class="text-blue">Integer</span>)
            <div>status : (<span class="text-green">String</span>)</div>
            <div>payment_method : (<span class="text-green">String</span>)</div>
            <div>
              total_purchase_amount: Ticket Price (<span class="text-green"
                >String</span
              >)
            </div>
            <div>
              total_purchase_discounted_amount : (<span class="text-green"
                >String</span
              >)
            </div>
            <div>currency : (<span class="text-green">String</span>)</div>
            <div>
              online_purchase : (<span class="text-green">String</span>)
            </div>
            <div>
              Member_points_before_purchase : (<span class="text-green"
                >String</span
              >)
            </div>
            <div>
              purchase_points : points (<span class="text-green">String</span>)
            </div>
          </code>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
