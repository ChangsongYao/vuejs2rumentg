<template>
  <div>
    <div id="app">
      <div class="ez-counter" ref="counter">{{counter}}</div>
    </div>
    <div id="log"></div>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        counter: 0
      }
    },
    mounted:function(){
      this.$refs.counter._data_ = "HIDDEN TAG";
      setInterval(function(){
        this.counter++;
      }.bind(this),1000);
    },
    updated:function(){
      var el = document.querySelector('#log');
      el.textContent = this.$refs.counter._data_;
    }
  }


</script>

<style>
  .ez-counter{
    font-family:LED;
    font-size:60px;
  }

</style>
