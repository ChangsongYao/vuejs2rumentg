<template>
  <div id="app">
    <button @click="flag=!flag">toggle</button>
    <transition>
      <div v-show="flag">
        <img src="../static/img/scene-3.jpg">
      </div>
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
  img {
    width: 100%;
  }

  .v-enter-active, .v-leave-active {
    transition: all 1s
  }

  .v-enter, .v-leave-to {
    opacity: 0
  }
</style>
