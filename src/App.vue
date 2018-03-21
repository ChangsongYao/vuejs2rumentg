<template>
  <div id="app">
    <button @click="flag=!flag">切换文字 显示 / 隐藏</button>
    <button>切换图片 显示 / 隐藏</button>
    <transition name="demo">
      <div v-show="flag" class="title">I LOVE THIS GAME!</div>
    </transition>
    <img src="../static/img/lego.jpg" class="test">
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
  body{
    overflow:hidden;
  }
  .title{
    font-size:3em;
    text-align:center;
    font-family:sans-serif;
  }
  .demo-enter-active{
    animation: bounce-in 1s;
  }
  .demo-leave-active{
    animation: bounce-in 1s reverse;
  }
  @keyframes bounce-in{
  %0 {transform:scale(0)}
  50% {transform:scale(1.5)}
  100% {transform:scale(1)}
  }
</style>
