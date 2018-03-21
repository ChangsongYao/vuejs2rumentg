<template>
  <div id="app">
    <h4>绑定单选框组</h4>
    <div v-for="item in items">
      <input type="radio"  :id="item" :value="item" v-model="selected">
      <label :for="item">{{item}}</label>
    </div>
    <p>selected: {{selected}}</p>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        items: ['China','Japan','Korea'],
        selected: ''
      }
    }
  }


</script>

<style>
</style>
