<template>
 <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-select v-model="category" label="Category" :items="categoryList" />
    <v-text-field v-model="amount" label="Payment amount" />
    <v-btn @click="onSaveClick" color="teal" dark>ADD +</v-btn>
 </v-card>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      amount: ''
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    itemId () {
      return this.$store.getters.getPaymentsListId
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        id: this.itemId + 1,
        date: this.date || this.getCurrentDate,
        category: this.category,
        amount: Number(this.amount)
      }
      this.addData(data)
      this.date = ''
      this.category = ''
      this.amount = ''
    },
    addData (data) {
      this.$store.commit('addDataToPaymentsList', data)
      this.$emit('closeDialog', 'close')
    }
  },
  created () {
    // if (this.$route.path.includes('/add/payment/')) {
    //   this.showAddNewPayment = true
    //   this.date = this.getCurrentDate
    //   this.category = this.$route.params.category
    //   this.amount = this.$route.query.value
    // }
  }
}
</script>

<style lang="scss" scoped>
.form_box {
  width: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.form {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: white;
}
.add_btn {
    width: 200px;
    background-color: aqua;
    margin-bottom: 16px;
}
.input_field {
    margin-bottom: 8px;
    height: 25px;
}
</style>
