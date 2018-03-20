<template>
  <div id="app">
    <div class="ez-clock"></div>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        time:new Date()
      }
    },
    created:function(){
      setInterval(function(){
        this.time = new Date();
      }.bind(this),1000)
    },
    computed:{
      aligned:function(){
        return moment(this.time).format('LTS');
      }
    }
  }


</script>

<style>
  .ez-clock {
    font-family: LED;
    font-size: 60px;
    background: #98b598;
    padding: 20px;
    padding-left: 100px;
    display: inline-block;
    letter-spacing: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  }
</style>
