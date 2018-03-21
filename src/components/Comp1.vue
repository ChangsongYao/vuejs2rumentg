<template>
  <h1>COMP-1：{{counter}}</h1>
</template>

<script>
  export default {
    name: "comp1",
    data: function () {
      return {
        counter: 0
      }
    },
    created: function () {
      setInterval(function () {
        this.counter++;
      }.bind(this), 100);
    }
  }
</script>

<style scoped>

</style>
