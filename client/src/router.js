import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Consumable from './views/Consumable.vue'
import nonConsumable from './views/Non-consumable.vue'
import newCommand from './views/New-command.vue'

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
      path: '/consumable',
      name: 'Consumable',
      component: Consumable
    },
    {
      path: '/non-consumable',
      name: 'Non-consumable',
      component: nonConsumable
    },
    {
      path: '/new-command',
      name: 'New-Command',
      component: newCommand
    },
  ]
})
