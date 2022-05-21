import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import * as VueGoogleMaps from 'vue2-google-maps'
// import VueGeoLocation from 'vue-browser-geolocation'

// Vue.use(VueGoogleMaps, {
//   load: {
//      key: AIzaSyBoQDkmA8qcf-y6ljks6N67za1-Stxzg1g,
//      libraries: 'place'
//   }
// }),
// Vue.use(VueGeoLocation)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
