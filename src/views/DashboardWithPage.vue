<template>
  <div>
    <AddPaymentForm @emitName="methodName"/>
    <!-- :categoryList="getCategoryList" -->
    <PaymentsDisplay :items="paymentsList" />
    <Pagination :pages="pages" :curPage="curPage" @emitPaginate="changePage" />
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Pagination from '../components/Pagination.vue'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: { AddPaymentForm, PaymentsDisplay, Pagination },
  name: 'DashboardWithPage',
  data: () => ({
    pages: ['page1', 'page2', 'page3']
  }),
  computed: {
    ...mapGetters([
      'getCategoryList',
      'getPageList',
      'getPageNumber'
    ]),
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    // itemId () {
    //   return this.$store.getters.getPaymentsListId
    // },
    curPage () {
      return this.$store.getters.getPageNumber
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListDataForPage'
    ]),
    methodName (data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
    changePage (pageNumber) {
      this.$store.commit('changePageNumber', pageNumber)
      this.$store.dispatch('fetchDataForPage')
    }
  },
  created () {
    this.$store.dispatch('fetchDataForPage')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style>

</style>
