<template>
  <div>
    <AddPaymentForm />
    <!-- :categoryList="getCategoryList"  -->
    <PaymentsDisplay :items="paymentsList" />
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: { AddPaymentForm, PaymentsDisplay },
  name: 'Dashboard',
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      // 'getCategoryList'
    ]),
    paymentsList () {
      return this.$store.getters.getPaymentsList
    }
    // itemId () {
    //   return this.$store.getters.getPaymentsListId
    // }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData'
    ])
    // methodName (data) {
    //   this.$store.commit('addDataToPaymentsList', data)
    // }
  },
  created () {
    // this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style>

</style>
