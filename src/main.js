// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import EzRate from './components/EzRate'
import 'font-awesome/css/font-awesome.css'   //是生效了的。



Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
  el: '#app',
  components:{
    EzRate
  },
  template:'<EzRate/>'
})


