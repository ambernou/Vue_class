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
  name: 'ChangePaymentForm',
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
      this.$emit('closeDialog', 'close')
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
</style>
