import Vue from 'vue'
import Router from 'vue-router'
import BlueLizard from '@/components/BlueLizard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlueLizard',
      component: BlueLizard
    }
  ]
})
