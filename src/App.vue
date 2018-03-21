<template>
  <div id="app">
    <img src="../static/img/mime-sweeping.jpg" @click="draw">
    <i class="mine fa fa-window-close"
       v-for="(pt,idx) in points"
       :style="{left:pt[0]+'px',top:pt[1]+'px'}">
    </i>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        points:[]
      }
    },
    methods:{
      draw:function(evt){
        this.points.push([evt.pageX,evt.pageY])
      }
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
    overflow:hidden;
  }
  #app span{
    position:absolute;
    left:10px;
    top:10px;
    border:1px solid red;
    color:red;
    border-radius:5px;
    padding:5px;
    z-index:10;
  }
  #app img{
  }
  #app .fa{
    position:absolute;
    color:black;
  }
</style>
