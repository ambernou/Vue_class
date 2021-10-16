<template>
  <v-container>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="4">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Amount</v-col>
      <v-col :cols="1"></v-col>
    </v-row>
    <v-row v-for="item in items" :key="item.id">
      <v-col :cols="1">{{ item.id }}</v-col>
      <v-col :cols="4">{{ item.date }}</v-col>
      <v-col :cols="4">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.amount }}</v-col>
      <v-col :cols="1" @click="onClickContextMenu($event, item)"><v-icon>mdi-dots-vertical</v-icon></v-col>
    </v-row>
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
  methods: {
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
      this.$context.close()
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
