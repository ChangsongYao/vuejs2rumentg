<template>
  <div id="app">
    <h1 v-dumb>哑指令</h1>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    // data: function () {
    //   return {
    //     gender: '',
    //     nations:[]
    //   }
    // }
    directives:{
      'dumb':{}
    }
  }


</script>

<style>
  select{
    min-width:150px;
  }

</style>
