<template>
  <div id="app">
    <h4>
      class属性绑定
      <button @click="rotate=!rotate">切换旋转状态</button>
    </h4>
    <img class="bird" src="../static/img/bird.jpg" :class="{rotate:rotate}">
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        rotate:false
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
