<template>
  <div id="app">
    <h4>v-cloak</h4>
    <p>{{content}}</p>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        content:'使用v-cloak指令隐藏丑陋的{{}}，别忘了设置样式'
      }
    },
    created:function(){
      setTimeout(function(){
        this.$mount('#app');
      }.bind(this),1000);
    }
  }


</script>

<style>

</style>
