<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple=false to="/dashboard">dashboard</v-btn>
      <v-btn plain :ripple=false to="/about">about</v-btn>
      <v-btn plain :ripple=false to="/calculator">calculator</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <transition name="fade">
      <modal-window-add-payment v-if="modalIsShow" :settings="modalSettings" />
    </transition>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </v-app>
</template>

<script>
import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'
import ContextMenu from './components/ContextMenu.vue'

export default {
  name: 'App',
  components: { ModalWindowAddPayment, ContextMenu },
  data: () => ({
    modalIsShow: false,
    modalSettings: {}
  }),
  computed: {
  },
  methods: {
    // goToPage (pagename) {
    //   this.$router.push({
    //     name: pagename
    //   })
    // },
    onShown (settings) {
      console.log(settings)
      this.modalSettings = settings
      this.modalIsShow = true
    },
    onHide () {
      console.log('hide')
      this.modalSettings = {}
      this.modalIsShow = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)
  },
  created () {
    // console.log(this.$modal)
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>
