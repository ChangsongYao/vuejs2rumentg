<template>
  <div id="app" @mousemove="x=$event.pageX,y=$event.pageY">
    <span>( {{x}} , {{y}} )</span>
    <div class="logo">Hubwiz.com</div>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        x: 0,
        y: 0
      }
    }
  }


</script>

<style>
  html,body,#app{
    height:100%;
    width:100%;
    padding:0;
    margin:0;
    overflow:hidden;
    cursor:crosshair;
  }
  .logo{
    font-size:80px;
    font-family:'Comic Sans MS';
    font-style:italic;
    color:#eee;
    margin-top:40px;
    text-align:center;
    text-shadow:2px 2px 0px #ccc;
  }
</style>
