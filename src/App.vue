<template>
  <div id="app">
    <img :src="images[idx]">
    <a href="#" target="_blank">在大窗查看</a>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        images:[
          'static/img/scene-1.jpg',
          'static/img/scene-2.jpg',
          'static/img/scene-3.jpg'
        ],
        idx:0
      }
    },
    created:function(){
      setInterval(function(){
        this.idx = (this.idx+1) % this.images.length
      }.bind(this),2000);
    }
  }


</script>

<style>
  #app{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
  }
  #app img{
    width:100%;
    height:100%;
  }
  #app a{
    position:absolute;
    right:10px;
    top:10px;
    background:#695252;
    color:#fff;
    padding:10px 20px;
    text-decoration:none;
  }
</style>
