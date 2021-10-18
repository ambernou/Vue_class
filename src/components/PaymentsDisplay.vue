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
                  <v-list-item @click="actionEdit(item)">
                    <v-list-item-title><v-icon>mdi-pencil</v-icon> Edit</v-list-item-title>
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
export default {
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
    optionsDialog: false
  }),
  methods: {
    actionEdit (item) {
      console.log(item)
    },
    onClickContextMenu (event, item) {
      const items = [
        {
          text: 'Edit',
          action: () => {
            this.actionChangePayment(item)
            // console.log('Edit', item.id)
          }
        },
        {
          text: 'Delete',
          action: () => {
            this.actionDelete(item)
            // console.log('Delete id', item.id)
          }
        }
      ]
      this.$context.show({ event, items })
    },
    actionDelete (item) {
      this.$store.commit('deletePayment', item)
      // this.$context.close()
    },
    actionChangePayment (item) {
      this.$modal.show({ title: 'EDIT PAYMENT', content: 'changePaymentForm' })
      this.$store.commit('saveOldDataForPayment', item)
      this.$context.close()
      // console.log(item)
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
