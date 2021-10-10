<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
    </header>
    <main>
      <router-view />
      <div class="templates">
        <h3>Add frequent payments:</h3>
        <router-link to="/add/payment/Food/?value=200">Category <span>"Food"</span> and amount <span>200</span></router-link>
        <router-link to="/add/payment/Transport/?value=50">Category <span>"Transport"</span> and amount <span>50</span></router-link>
        <router-link to="/add/payment/Clothes/?value=3000">Category <span>"Clothes"</span> and amount <span>3000</span></router-link>
      </div>
    </main>
    <transition name="fade">
      <modal-window-add-payment v-if="modalIsShow" :settings="modalSettings" />
    </transition>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    padding-right: 10px;
  }
  .templates {
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: bold;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .20s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
