// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// window.store = store
// window.HOST = "http://127.0.0.1/"
// window.baseUrl = "http://127.0.0.1"
// window.websocketUrl = "127.0.0.1:9501"
// axios.defaults.baseURL = 'http://47.104.159.115:8080'
// axios.defaults.timeout = 1000 * 15
// axios.defaults.headers.authKey = Lockr.get('authKey')
// axios.defaults.headers['Content-Type'] = 'application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  $,
  components: { App },
  template: '<App/>'
})
