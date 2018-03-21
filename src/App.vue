<template>
  <div id="app">
    <div class="toolbar">
      我是
      <button @click="age=10">小孩</button>
      <button @click="age=30">成人</button>
      <button @click="age=62">刚退休的人</button>
      <button @click="age=75">老人</button>
    </div>
    <div class="teen" v-if="age<18"><img src="../static/img/teen-ad.jpg"></div>
    <div class="adult" v-else-if="age<60"><img src="../static/img/adult-ad.jpg"></div>
    <div class="senior" v-else><img src="../static/img/senior-ad.jpg"></div>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        age:6
      }
    }
  }


</script>

<style>
  #app .toolbar{position:fixed;left:10px;top:10px}
  #app img{width:100%;}
</style>
