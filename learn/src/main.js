import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
Vue.use(VueMask);
Vue.use(Vuelidate)


Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
