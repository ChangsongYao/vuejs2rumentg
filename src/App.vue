<template>
  <div id="app">
    <p>
      <button @click="flag=!flag">切换 显示/隐藏</button>
    </p>
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft">
      <img v-show="flag"  src="../static/img/scene-3.jpg">
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: function () {
      return {
        flag: true
      }
    }
  }
</script>

<style>
  body{overflow:hidden;}
  img{width:100%;}
</style>
