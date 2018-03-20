<template>
  <div id="app">
    <button @click="add">添加</button>
    <button @click="del">删除</button>
    <button @click="upd">更新最后一年数据</button>
    <pre>{{JSON.stringify(stats,null,'\t')}}</pre>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        year:1980,
        stats:{}
      }
    },
    methods:{
      add:function(){
        this.$set(this.stats,this.year++,Math.floor(Math.random()*1000))
      },
      del:function(){
        var keys = Object.keys(this.stats);
        this.$delete(this.stats,keys[0]);
      },
      upd:function(){
        this.stats[this.year-1] && (this.stats[this.year-1] = Math.floor(Math.random()*1000));
      }
    }
  }


</script>

<style>
</style>
