<template>
  <div id="app">
    <header>
      <div class="header">My Personal costs</div>
    </header>
    <main>
      <AddPaymentForm @emitName="methodName" :categoryList="getCategoryList" />
      <PaymentsDisplay :items="paymentsList" />
      <Pagination :pages="pages" :curPage="curPage" @emitPaginate="changePage" />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import { mapMutations, mapGetters } from 'vuex'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
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
      'setPaymentsListData'
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
    // this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchDataForPage')
    this.$store.dispatch('fetchCategoryList')
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
