<template>
  <pre>{{counter}}</pre>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  // data:{  错误写法
  //   name:'Elton John'
  // }
  data(){
    return{
      name:'Elton John',
      counter:0
    }
  }
}

setInterval(function(){
  this.counter++;
},100)

</script>

<style>

</style>
