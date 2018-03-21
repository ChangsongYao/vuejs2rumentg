<template>
  <div id="app">
    <div>
      <p>
        <button @click="flag=!flag">切换 显示/隐藏</button>
      </p>
      <transition name="demo"
                  @beforeEnter="beforeEnter"
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
    methods:{
      beforeEnter:function(){
        el.style.opacity = 0
        el.style.transformOrigin = 'left';
        el.style.rotateZ='0deg';
      },
      enter: function (el, done) {
        Velocity(el, {
          rotateZ:'0deg',
          opacity: 1
        }, { duration: 300,complete:done })
      },
      leave: function (el, done) {
        Velocity(el, {
          rotateZ: '45deg',
          opacity: 0
        }, { complete: done })
      }
    }
  }
</script>

<style>
  body{overflow:hidden;}
  img{width:100%}
</style>
