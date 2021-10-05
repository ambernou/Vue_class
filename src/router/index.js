import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'
import DashboardWithPage from '../views/DashboardWithPage'
import About from '../views/About'
import NotFound from '../views/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/add/payment/:category',
      name: 'Dashboard',
      component: Dashboard,
      props: {
        routeShow: ''
      }
    },
    {
      path: '/dashboardWithPage',
      name: 'DashboardWithPage',
      component: DashboardWithPage
    },
    {
      path: '/about*',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  console.log(from, to)
  document.title = to.params.category
  // this.routeShow = to.params.category
})

export default router
