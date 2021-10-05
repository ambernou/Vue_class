<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboardWithPage">dashboard with page</router-link>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <!-- <a href="dashboard">dashboard</a>
      <a href="about">about</a>
      <a href="notfound">not found</a> -->
      <!-- <div @click="goToPage('NotFound')">404</div> -->
    </header>
    <main>
      <router-view />
      <div class="templates">
        <h3>Add frequent payments:</h3>
        <router-link to="/dashboard/add/payment/Food/?value=200">Category <span>"Food"</span> and amount <span>200</span></router-link>
        <router-link to="/dashboard/add/payment/Transport/?value=50">Category <span>"Transport"</span> and amount <span>50</span></router-link>
        <router-link to="/dashboard/add/payment/Clothes/?value=3000">Category <span>"Clothes"</span> and amount <span>3000</span></router-link>
      </div>
      <!-- <Dashboadr v-if="page === 'dashboard'" />
      <About v-if="page === 'about'" />
      <NotFound v-if="page === 'notfound'" /> -->
    </main>
  </div>
</template>

<script>
// import About from './views/About.vue'
// import Dashboadr from './views/Dashboard.vue'
// import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  // components: {
  //   Dashboadr,
  //   About,
  //   NotFound
  // },
  components: {
  },
  data: () => ({
    // page: 'dashboard'
  }),
  computed: {
  },
  methods: {
    // goToPage (pageName) {
    //   this.$router.push({
    //     name: pageName
    //   })
    // }
    // setPage () {
    //   // console.log(location)
    //   this.page = location.pathname.slice(1)
    // }
  },
  mounted () {
    // const links = document.querySelectorAll('a')
    // links.forEach(link => {
    //   link.addEventListener('click', event => {
    //     event.preventDefault()
    //     history.pushState({}, '', link.href)
    //     this.setPage()
    //   })
    // })
    // this.setPage()
    // window.addEventListener('popstate', () => {
    //   this.setPage()
    // })
  },
  created () {
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
