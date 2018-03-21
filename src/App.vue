<template>
  <div id="app">
    <h4>正常绑定</h4>
    <p>{{t}}</p>
    <h4>v-pre</h4>
    <p v-pre>{{t}}</p>
    <h4>v-once</h4>
    <p v-once>{{t}}</p>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

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
      }.bind(this),1000);
    },
    computed:{
      t:function(){
        return [this.time.getHours(),this.time.getMinutes(),this.time.getSeconds()].join(':')
      }
    }
  }


</script>

<style>
  html,body{
    height:100%;
    overflow:hidden;
  }
  img.bird{
    position:absolute;
    width:100px;
    transition:all 1s;
  }
  .rotate{
    animation: turn 1s linear infinite;
  }
  @keyframes turn{
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
  }

</style>
