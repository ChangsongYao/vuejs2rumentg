<template>
  <div id="app">
    <h4>
      style属性绑定
      <button @click="fly"> 让我飞！</button>
    </h4>
    <img class="bird" src="../static/img/bird.jpg" :style="pos">
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        x:0,y:200,
        w:document.body.clientWidth,
        h:document.body.clientHeight
      }
    },
    computed:{
      pos:function(){
        return {left:this.x+'px',top:this.y+'px'}
      }
    },
    methods:{
      fly:function(){
        this.x = Math.floor(Math.random()*this.w);
        this.y = Math.floor(Math.random()*this.h);
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
</style>
