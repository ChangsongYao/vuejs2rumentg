<template>
  <div id="app">
    <ez-panel v-if="showPanel" title="CONTENT DISTRIBUTIOIN">
      <button class="close" slot="header" @click="showPanel=false">x</button>
      <img src="../static/img/carrot-2.jpg">
    </ez-panel>
    <h1 v-else>CLOSED!!</h1>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  import EzPanel from './components/EzPanel'

  export default {
    name: 'App',
    data: function () {
      return {
        showPanel:true
      }
    },
    components:{'ez-panel':EzPanel}
  }


</script>

<style>
  #app .close{
    float:right;
  }
  .ez-panel{
    border: 1px solid #222;
    border-radius:5px;
  }
  .ez-panel .header{
    background:blue;
    color:white;
    padding: 5px;
  }
  .ez-panel .content{
    padding:5px;
  }
  .ez-panel .content:after{
    content:' ';
    display:block;
    clear:both;
  }
</style>
