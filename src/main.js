import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(Axios, VueAxios)

new Vue({
  render: h => h(App),
}).$mount('#app')
