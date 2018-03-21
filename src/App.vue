<template>
  <div id="app">
    <div>FRAME: {{idx}}</div>
    <div class="sprite" :style="{'background-position':pos}"></div>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'
  export default {
    name: 'App',
    data: function () {
      return {
        idx: 0,
        w:document.body.clientWidth
      }
    },
    computed:{
      pos:function(){
        var sw = 165,sh = 292;
        var c = this.idx % 12;
        var r = Math.floor(this.idx / 12);
        var x = -sw * c;
        var y = -sh * r;
        return x + 'px ' + y + 'px';
      }
    },
    mounted:function(){
      requestAnimationFrame(function step(){
        this.idx = (this.idx +1) % 64;
        requestAnimationFrame(step);
      })
    }
  }
</script>

<style>
  body{
    background:url(../static/img/sky.png) repeat-x;
  }
  .sprite{
    background:url(../static/img/spritesheet_grant.png);
    width:165px;
    height:292px;
  }
</style>
