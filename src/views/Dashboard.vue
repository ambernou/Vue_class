<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h4 text-sm-h3 mb-8">My Personal costs</div>
        <v-dialog v-model="dialog" width="500px">
          <template v-slot:activator="{on}">
            <v-btn color="teal" dark v-on="on" @click="dialog=!dialog">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <AddPaymentForm @closeDialog="tocloseDialog"/>
            <!-- <v-btn color="teal" dark @click="dialog=false">Close</v-btn> -->
          </v-card>
        </v-dialog>
        <PaymentsDisplay show-items :items="curentElements" />
        <div class="text-center">
          <v-pagination v-model="page" :length="amountPage"></v-pagination>
        </div>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm.vue'
// import ModalWindowAddPayment from '../components/ModalWindowAddPayment.vue'

export default {
  components: { PaymentsDisplay, AddPaymentForm },
  name: 'Dashboard',
  data: () => ({
    page: 1,
    n: 7,
    dialog: false
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
    },
    amountPage () {
      return Math.ceil(this.paymentsList.length / this.n)
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
    },
    tocloseDialog (data) {
      if (data === 'close') {
        this.dialog = false
      }
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
