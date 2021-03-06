import Vue from 'vue'
import Router from 'vue-router'
import CalculateBlock from './components/CalculateBlock.vue'
import CheckUsersData from './components/CheckUsersData.vue'
import step3 from './components/step3.vue'
import step4 from './components/step4.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CalculateBlock',
      component: CalculateBlock,
      props: true
    },
    {
      path: '/CheckUsersData',
      name: 'step2',
      component : CheckUsersData,
      props: true
    },
    {
      path: '/Step3',
      name: 'step3',
      component : step3,
      props: true
    },
    {
      path: '/Step4',
      name: 'step4',
      component : step4,
      props: true
    }
  ]
})
