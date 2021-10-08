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
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  created () {
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
</style>
