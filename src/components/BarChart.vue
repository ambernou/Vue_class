<script>
import { Doughnut } from 'vue-chartjs'
export default {
  name: 'BarChart',
  extends: Doughnut,
  //   props: {
  //     chartData: {
  //       type: Object,
  //       default: null
  //     },
  //     options: {
  //       type: Object,
  //       default: null
  //     }
  //   },
  data: () => ({
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
    }
  }),
  computed: {
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    sumForCategory () {
      return this.$store.getters.getSumForCategory
    }
  },
  methods: {
    generateChart () {
      this.chartData.labels = this.categoryList
      this.chartData.datasets[0].data = this.sumForCategory
    }
  },
  mounted () {
    this.generateChart()
    this.renderChart(this.chartData, this.options)
  },
  //   created () {
  //     this.generateChart()
  //   }
  watch: {
    sumForCategory () {
      console.log('data')
      this.generateChart()
      this.renderChart(this.chartData, this.options)
    }
  }
}
</script>

<style>
</style>
