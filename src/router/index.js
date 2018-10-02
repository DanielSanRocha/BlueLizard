import Vue from 'vue'
import Router from 'vue-router'
import TreeViewer from '@/components/TreeViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TreeViewer',
      component: TreeViewer
    }
  ]
})
