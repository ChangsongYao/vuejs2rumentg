<template>
  <div id="app">
    <div class="toolbar">
      <input type="checkbox" id="nightMode">
      <label for="toggle">夜晚阅读模式</label>
    </div>

    <h4>绑定单个复选框</h4>
    <input id="remember" type="checkbox" v-model="checked">
    <label for="remember">remember me!</label>
    <p>rememberme: {{checked}}</p>

    <h4>绑定复选框组</h4>
    <div v-for="item in items">
      <input type="checkbox"  :id="item" :value="item" v-model="selected">
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
        checked: false,
        items: ['China','Japan','Korea'],
        selected: []
      }
    }
  }


</script>

<style>
  div.toolbar{
    background:#777;
    color:yellow;
    padding:6px;
  }
</style>
