<template>
  <div class="form_box">
    <!-- <button class="add_btn" @click="showBtn">ADD NEW PAYMENT +</button> -->
    <div class="form">
      <input placeholder="Payment date" v-model="date" class="input_field" />
      <select v-model="category" class="input_field">
        <option v-for="option in categoryList" :key="option">
          {{ option }}
        </option>
      </select>
      <input placeholder="Payment amount" v-model="amount" class="input_field" />
      <button @click="onSaveClick" class="add_btn">ADD +</button>
      <button @click="onSaveChangeClick" class="add_btn">Save change</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  data () {
    return {
      date: '',
      category: '',
      amount: ''
      // showAddNewPayment: false
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
      if (this.$route.path.includes('/add/payment/')) {
        this.$router.push('/dashboard')
      } else {
        this.date = ''
        this.category = ''
        this.amount = ''
      }
    },
    // showBtn () {
    //   this.showAddNewPayment = !this.showAddNewPayment
    // },
    addData (data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
    onSaveChangeClick () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        amount: Number(this.amount)
      }
      this.$store.commit('changePayment', data)
      // console.log('change')
    }
  },
  created () {
    if (this.$route.path.includes('/add/payment/')) {
      this.showAddNewPayment = true
      this.date = this.getCurrentDate
      this.category = this.$route.params.category
      this.amount = this.$route.query.value
    }
    // if (this.data) {
    //   const { date, category, amount } = this.data
    //   this.date = date
    //   this.category = category || ''
    //   this.amount = Number(amount)
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
