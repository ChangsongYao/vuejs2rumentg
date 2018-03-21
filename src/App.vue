<template>
  <div id="app">
    <h4>评级组件</h4>
    <ez-rate></ez-rate>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'
  import EzRate from './components/EzRate'

  export default {
    name: 'App',
    data: function () {
      return {}
    },
    components: {
      'ez-rate': EzRate
    }
  }
</script>

<style>
</style>
