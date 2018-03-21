<template>
  <div id="app">
    <textarea v-model="raw"></textarea>
    <div class="canvas" v-html="parsed"></div>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        raw: '# demo\n\nthis is a paragraph.and following is a list.\n\n- item 1\n- item 2'
      }
    },
    computed:{
      parsed: function(){
        return marked(this.raw);
      }
    }
  }


</script>

<style>
  html,body,#app{
    height: 100%;
  }
  #app{
    display:flex;
  }
  #app > *{
    flex:1;
  }
  #app textarea{
    font-family:Consolas;
    outline:none;
    border:0;
    border-right:1px solid black;
  }
  #app div{
    padding:0 10px;
  }

</style>
