<template>
  <div id="app">
    <div>
      <button @click="add">ADD</button>
      <button @click="remove">REMOVE</button>
    </div>
    <p>
      <span v-for="i in k">{{i}}</span>
    </p>
    <div class="toolbar"></div>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        k:5
      }
    },
    methods:{
      add:function(){ this.k++},
      remove:function(){this.k = this.k>0?this.k-1:this.k}
    }
  }


</script>

<style>
  #app span{display:inline-block;background:#f0f0f0;margin-right:10px;padding:0 10px;}
</style>
