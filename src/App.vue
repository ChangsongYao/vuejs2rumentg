<template>
  <div id="counter">
    <h1>{{count}}</h1>
    <h2>RENDER</h2>
    <pre>{{$options.render}}</pre>
    <h2>WATCHER</h2>
    <pre>{{_watcher ? _watcher.getter : ''}}</pre>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        count: 0
      }
    },
    created:function(){
      setInterval(function(){
        this.count++;
      }.bind(this),1000);
    }
  }


</script>

<style>
</style>
