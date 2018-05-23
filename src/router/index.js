import Vue from 'vue'
import Router from 'vue-router'
import ViewList from '@/components/ViewList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ViewList',
      component: ViewList,
      props: true
    }
  ]
})
