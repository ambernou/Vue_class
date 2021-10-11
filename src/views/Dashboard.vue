<template>
  <div>
    <!-- <AddPaymentForm /> -->
    <PaymentsDisplay show-items :items="curentElements" />
    <Pagination
      :cur="page"
      :n="n"
      :length="getPaymentsList.length"
      @paginate="changePage"
    />
    <button @click="addPayment">ADD NEW PAYMENT +</button>
    <!-- <modal-window-add-payment @close="onModalClose" v-if="modalIsShow" :settings="modalSettings" />
    <button @click="openPayment">ADD NEW PAYMENT +</button>
    <button @click="openAuth">Auth Form</button> -->
    <!-- <router-view /> -->
    <div class="templates">
        <h3>Add frequent payments:</h3>
        <router-link to="/add/payment/Food/?value=200">Category <span>"Food"</span> and amount <span>200</span></router-link>
        <router-link to="/add/payment/Transport/?value=50">Category <span>"Transport"</span> and amount <span>50</span></router-link>
        <router-link to="/add/payment/Clothes/?value=3000">Category <span>"Clothes"</span> and amount <span>3000</span></router-link>
      </div>
  </div>
</template>

<script>
// import AddPaymentForm from '../components/AddPaymentForm.vue'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Pagination from '../components/Pagination.vue'
import { mapMutations, mapGetters } from 'vuex'
// import ModalWindowAddPayment from '../components/ModalWindowAddPayment.vue'

export default {
  components: { PaymentsDisplay, Pagination },
  name: 'Dashboard',
  data: () => ({
    page: 1,
    n: 15
  }),
  //   watch: {
  //     $route (to, from) {
  //       if (to.name === 'AddPaymentFormFromUrl') {
  //         this.checkUrl()
  //       }
  //     }
  //   },
  computed: {
    ...mapGetters(['getPaymentsList', 'getPaymentsListId']),
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    curentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData'
    ]),
    changePage (p) {
      this.page = p
    },
    addPayment () {
      this.$modal.show({ title: 'ADD NEW PAYMENT +', content: 'addPaymentForm' })
    }
    // checkUrl () {
    //   const { action, category, section } = this.$route.params
    //   this.$modal.show({
    //     title: 'ADD NEW PAYMENT +',
    //     content: 'addPaymentForm',
    //     data: {
    //       action: action || '',
    //       category: category || '',
    //       section: section || '',
    //       amount: this.$route.query?.value || ''
    //     }
    //   })
    // }
  }
  //   async created () {
  //     if (this.$route.params.page) {
  //       this.page = Number(this.$route.params.page)
  //     }

  //     await this.$store.dispatch('fetchData')
  //     await this.$store.dispatch('fetchCategoryList')

  //     if (this.$route.name === 'AddPaymentFormFromUrl') {
  //       this.checkUrl()
  //     }
  // this.$store.dispatch('fetchData')
  // this.$store.dispatch('fetchCategoryList')
}
</script>

<style lang="scss" scoped>
.templates {
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: bold;
  }
</style>
