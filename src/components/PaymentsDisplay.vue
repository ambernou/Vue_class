<template>
    <div>
        <table>
            <tr class="table_header">
                <td>#</td><td>Date</td><td>Category</td><td>Amount</td>
            </tr>
            <tr v-for="(item, idx) in items" :key="idx">
                <td>{{ item.id }}</td><td>{{ item.date }}</td><td>{{ item.category }}</td><td>{{ item.amount }}</td>
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
  data () {
    return {
    }
  }
}
</script>

<style>
td {
    width: 120px;
    margin-bottom: 6px;
}
.table_header {
    font-weight: bold;
}
</style>
