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
        <BarChart :styles="chartStyle" :chartData="chartData" :options="options" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import { mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import BarChart from '../components/BarChart.vue'
// import ModalWindowAddPayment from '../components/ModalWindowAddPayment.vue'

export default {
  components: { PaymentsDisplay, AddPaymentForm, BarChart },
  name: 'Dashboard',
  data: () => ({
    page: 1,
    n: 10,
    dialog: false,
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Dataset1',
          data: [],
          backgroundColor: ['Yellow', 'Orange', 'Red', 'Green', 'Blue']
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: 'Costs by categories'
      }
    },
    chartStyle: {
      height: '300px',
      width: '300px'
    }
  }),
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
    },
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    sumForCategory () {
      return this.$store.getters.getSumForCategory
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
    },
    generateChart () {
      this.chartData.labels = this.categoryList
      this.chartData.datasets[0].data = this.sumForCategory
    }
  },
  mounted () {
    this.generateChart()
  },
  created () {
    this.generateChart()
  }
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
