<template>
  <div id="app">
    <ez-panel title="SLOT IS A PLACEHOLDER">
      <img src="../static/img/slot-sketch.jpg">
    </ez-panel>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  import EzPanel from './components/EzPanel'

  export default {
    name: 'App',
    data: function () {
      return {

      }
    },
    components:{'ez-panel':EzPanel}
  }


</script>

<style>
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

</style>
