import Vue from 'vue'
import Router from 'vue-router'
import rightbl from './components/rightbl.vue'
import step2 from './components/step2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Rightbl',
      component: rightbl
    },
    {
      path: '/Step2',
      name: 'step2',
     component : step2
    }
  ]
})
