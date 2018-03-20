// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

import App from './App'
/* eslint-disable no-new */

var vm = new Vue({
  el: '#app',
  data:function () {
    return{
      counter:0
    }
  }
})

setInterval(function(){
  vm.counter++;
},100)


