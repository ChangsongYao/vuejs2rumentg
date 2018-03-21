<template>
  <div id="app">
    <ez-parent label="demo">
      <ez-child idx="1"></ez-child>
      <ez-child idx="2" ref="nick"></ez-child>
      <ez-child idx="3"></ez-child>
    </ez-parent>
  </div>
</template>
<script>
  import EzParent from './components/EzParent'
  import EzChild from './components/EzChild'

  export default {
    name: 'App',
    data: function () {
        return{
        }
    },
    components:{
      'ez-child':EzChild,
      'ez-parent':EzParent
    }
  }


</script>

<style>
  .ez-parent{
    padding:10px;
    background:#b2dcb8;
  }
  .ez-child{
    background:#eee;
    margin-bottom:10px;
    padding:10px;
  }
</style>
