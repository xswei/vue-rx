import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

Vue.use(VueRx, Rx)

import mapTest from './app.vue'

new Vue({
  el: "#app",
  components: {
    mapTest
  },
  template: '<div><map-test></map-test></div>'
})