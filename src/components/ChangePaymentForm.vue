<template>
 <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-select v-model="category" label="Category" :items="categoryList" />
    <v-text-field v-model="amount" label="Payment amount" />
    <v-btn @click="onSaveChangeClick" color="teal" dark>Save change</v-btn>
 </v-card>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      amount: '',
      id: ''
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
    oldData () {
      return this.$store.getters.getOldPayment
    }
  },
  methods: {
    onSaveChangeClick () {
      const data = {
        date: this.date,
        category: this.category,
        amount: Number(this.amount)
      }
      this.$store.commit('changePayment', data)
      // console.log('change')
    }
  },
  mounted () {
    this.date = this.oldData.date
    this.category = this.oldData.category
    this.amount = this.oldData.amount
  },
  created () {
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
