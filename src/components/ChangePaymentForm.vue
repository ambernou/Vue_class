<template>
  <div class="form_box">
    <div class="form">
      <input placeholder="Payment date" v-model="oldData.date" class="input_field" />
      <select v-model="oldData.category" class="input_field">
        <option v-for="option in categoryList" :key="option">
          {{ option }}
        </option>
      </select>
      <input placeholder="Payment amount" v-model="oldData.amount" class="input_field" />
      <!-- <button @click="onSaveChangeClick" class="add_btn">Save change</button> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddPaymentForm',
  // data () {
  //   return {
  //     date: '',
  //     category: '',
  //     amount: ''
  //   }
  // },
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
    // onSaveChangeClick () {
    //   const data = {
    //     date: this.date || this.getCurrentDate,
    //     category: this.category,
    //     amount: Number(this.amount)
    //   }
    //   this.$store.commit('changePayment', data)
    //   // console.log('change')
    // }
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
