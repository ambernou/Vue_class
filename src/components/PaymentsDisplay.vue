<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>#</th>
            <th class="font-weight-bold">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <v-menu width="200px" offset-y>
                <template v-slot:activator="{on}">
                  <v-btn plain v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-dialog v-model="dialog" width="500px">
                      <template v-slot:activator="{on}">
                        <v-list-item-title v-on="on" @click="actionEdit(item)"><v-icon>mdi-pencil</v-icon> Edit</v-list-item-title>
                      </template>
                      <v-card>
                        <ChangePaymentForm @closeDialog="tocloseDialog" />
                      </v-card>
                    </v-dialog>
                  </v-list-item>
                  <v-list-item @click="actionDelete(item)">
                    <v-list-item-title><v-icon>mdi-delete</v-icon> Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import ChangePaymentForm from './ChangePaymentForm.vue'
export default {
  components: { ChangePaymentForm },
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    actionEdit (item) {
      this.dialog = !this.dialog
      this.$store.commit('saveOldDataForPayment', item)
      console.log(item)
    },
    actionDelete (item) {
      this.$store.commit('deletePayment', item)
      // this.$context.close()
    },
    tocloseDialog (data) {
      if (data === 'close') {
        this.dialog = false
      }
    }
  }
}
</script>

<style>
td {
    width: 120px;
    height: 25px;
    margin-bottom: 6px;
}
.context_menu_element {
  width: 30px;
  cursor: pointer;
}
.table_header {
  font-weight: bold;
}
</style>
