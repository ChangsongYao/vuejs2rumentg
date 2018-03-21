<template>
  <div id="app">
    <h4>.prop</h4>
    <p :text-content.prop="content"></p>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        content: '使用<b>.prop</b>修饰符绑定DOM属性'
      }
    }
  }


</script>

<style>
</style>
