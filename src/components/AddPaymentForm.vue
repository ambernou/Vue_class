<template>
  <div class="form">
    <button class="add_btn" @click="showBtn">ADD NEW PAYMENT +</button>
    <div class="form" v-show="showAddNewPayment">
      <input placeholder="Payment date" v-model="date" class="input_field" />
      <select v-model="category" class="input_field">
        <option v-for="option in categoryList" :key="option">
          {{ option }}
        </option>
      </select>
      <input placeholder="Payment amount" v-model="amount" class="input_field" />
      <button @click="onSaveClick" class="add_btn">ADD +</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  // props: {
  //   itemId: {
  //     type: Number
  //   }
  // },
  data () {
    return {
      // id: this.itemId,
      date: '',
      category: '',
      amount: '',
      showAddNewPayment: false
      // btnDisabled: true
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
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        // id: ++this.id,
        date: this.date || this.getCurrentDate,
        category: this.category,
        amount: this.amount
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
    showBtn () {
      this.showAddNewPayment = !this.showAddNewPayment
    },
    addData (data) {
      this.$store.commit('addDataToPaymentsList', data)
    }
  },
  created () {
    if (this.$route.path.includes('/add/payment/')) {
      this.showAddNewPayment = true
      this.date = this.getCurrentDate
      this.category = this.$route.params.category
      this.amount = this.$route.query.value
    }
  }
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    width: 300px;
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
