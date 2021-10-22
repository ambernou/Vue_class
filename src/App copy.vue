<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/calculator">calculator</router-link>
    </header>
    <main>
      <router-view />
    </main>
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
