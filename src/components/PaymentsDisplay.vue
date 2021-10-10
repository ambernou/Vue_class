<template>
    <div>
        <table>
            <tr class="table_header">
                <td>#</td><td>Date</td><td>Category</td><td>Amount</td>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.amount }}</td>
                <td @click="onClickContextMenu($event, item)" class="context_menu_element"><i class="fas fa-ellipsis-v"></i></td>
            </tr>
        </table>
    </div>
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
      this.$modal.show({ title: 'EDIT PAYMENT', content: 'addPaymentForm' })
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
