<template>
  <div id="app">
    <div>
      <p>
        <button @click="flag=!flag">切换 显示/隐藏</button>
      </p>
      <transition name="demo"
                  @enter="enter"
                  @leave="leave"
                  :css="false">
        <img v-show="flag" src="../static/img/scene-3.jpg" class="target">
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: function () {
      return {
        flag: true
      }
    },
    methods: {
      enter: function (el, done) {
        var step = function () {
          var style = getComputedStyle(el);
          el.style.opacity = +style.opacity + 0.05;
          if (+el.style.opacity < 1) requestAnimationFrame(step);
          else done();
        };
        requestAnimationFrame(step);
      },
      leave: function (el, done) {
        var step = function () {
          var style = getComputedStyle(el);
          el.style.opacity = +style.opacity - 0.05;
          if (+el.style.opacity > 0) requestAnimationFrame(step);
          else done();
        };
        requestAnimationFrame(step);
      }
    }
  }
</script>

<style>
  body{overflow:hidden}
  img{width:100%;}

</style>
