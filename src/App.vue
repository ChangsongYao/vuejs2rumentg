<template>
  <div id="app">
    <div class="prevent" @selectstart.prevent>
      <h4>.prevent</h4>
      <span>双击不会选中文字</span>
      <a href="http://www.hubwiz.com" @click.prevent>点击这个热点不会跳转</a>
    </div>
    <div class="stop" @click="counter.stopdiv++" @selectstart.prevent>
      <h4>.stop</h4>
      <button> NO .STOP</button>
      <button @click.stop="counter.stop++">.stop / {{counter.stop}}</button>
      div clicked: {{counter.stopdiv}}
    </div>
    <div class="self" @click.self="counter.selfdiv++"
         @click="counter.selfall++" @selectstart.prevent>
      <h4>.self</h4>
      <button>click me</button>
      div clicked:{{counter.selfdiv}} | all clicked:{{counter.selfall}}
    </div>
    <div class="left-middle-right">
      <h4>.left/.middle/.right</h4>
      <button @mouseup.left="counter.left++">.left / {{counter.left}}</button>
      <button @mouseup.middle="counter.middle++">.middle / {{counter.middle}}</button>
      <button @contextmenu.prevent @mouseup.right="counter.right++">.right / {{counter.right}}</button>
    </div>
    <div class="ctrl-shift-alt">
      <h4>.ctrl/.shift/.alt/.meta</h4>
      <button @click.ctrl="counter.ctrl++">.ctrl / {{counter.ctrl}}</button>
      <button @click.shift="counter.shift++">.shift / {{counter.shift}}</button>
      <button @click.alt="counter.alt++">.alt / {{counter.alt}}</button>
      <button @click.meta="counter.meta++">.meta / {{counter.meta}}</button>
      <div>
        <div class="once">
          <h4>.once</h4>
          <button @click.once="counter.once++">.once / {{counter.once}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        counter:{
          stop:0,stopdiv:0,
          selfall:0,selfdiv:0,
          left:0,middle:0,right:0,
          ctrl:0,shift:0,alt:0,meta:0,
          once:0
        }
      }
    }
  }


</script>

<style>
  #app {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  #app span {
    position: absolute;
    left: 10px;
    top: 10px;
    border: 1px solid red;
    color: red;
    border-radius: 5px;
    padding: 5px;
    z-index: 10;
  }

  #app img {
  }

  #app .fa {
    position: absolute;
    color: black;
  }
</style>
