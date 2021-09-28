<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      <AddPaymentForm @emitName="methodName" :itemId="itemId"/>
      <PaymentsDisplay :items="paymentsList"/>
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: [],
    itemId: 0
  }),
  methods: {
    fetchData () {
      return [
        {
          id: 1,
          date: '28.03.2020',
          category: 'Food',
          amount: 169
        },
        {
          id: 2,
          date: '24.03.2020',
          category: 'Transport',
          amount: 360
        },
        {
          id: 3,
          date: '24.03.2020',
          category: 'Food',
          amount: 532
        }
      ]
    },
    methodName (data) {
      this.paymentsList = [...this.paymentsList, data]
      this.itemId = this.paymentsList[this.paymentsList.length - 1].id
      console.log(this.itemId)
    }
  },
  created () {
    this.paymentsList = this.fetchData()
    this.itemId = this.paymentsList[this.paymentsList.length - 1].id
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
