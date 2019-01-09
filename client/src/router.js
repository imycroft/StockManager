import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Customers from './views/Customers.vue'
import Forms from './views/Forms.vue'
import Stock from './views/Stock.vue'
import Supliers from './views/Supliers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/supliers',
      name: 'Supliers',
      component: Supliers
    },
  ]
})
