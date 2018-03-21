<template>
  <div id="app" tabindex="0" @keydown.down="v--"  @keydown.up="v++">
    <button @click="v--"> &darr; 刹车</button>
    <label class="v">{{v}}</label>
    <button @click="v++"> &uarr; 油门</button>
    <span class="status">{{status}}</span>
    <ez-gauge v-model="v" @overload="onOverload"></ez-gauge>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  import EzGauge from './components/EzGauge'

  export default {
    name: 'App',
    data: function () {
      return {
        v:78,
        status:''
      }
    },
    methods:{
      onOverload:function(flag){
        if(flag) this.status = 'OVERLOAD!!!';
        else this.status = '';
      }
    },
    components:{
      'ez-gauge': EzGauge
    }
  }


</script>

<style>
  body{
    background:#222;
  }
  #app{
    outline:none;
  }
  .ez-gauge {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 150px;
    left: 200px;
    overflow: hidden;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .outer {
    z-index: 1;
    position: absolute;
    background-color: rgba(255,255,255,.2);
    width: 400px;
    height: 200px;
    top: 0%;
    border-radius: 250px 250px 0px 0px;
    cursor:pointer;
  }

  .inner {
    z-index: 3;
    position: absolute;
    background-color: #222;
    width: 250px;
    height: 125px;
    top: 75px;
    margin-left: 75px;
    margin-right: auto;
    border-radius: 250px 250px 0px 0px;
    pointer-events:none;
  }

  .indicator {
    z-index: 2;
    position: absolute;
    background-color: #4fda10;
    width: 400px;
    height: 200px;
    top: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0px 0px 200px 200px;
    transform-origin: center top;
    transition: all .1s ease-in-out;
    pointer-events:none;
  }

  .indicator.overload{
    background-color:red;
  }

  .ez-gauge:hover .indicator {  transform:rotate(.5turn);
  }

  .ez-gauge:hover .data { color: rgba(255,255,255,1); }

  .data {
    z-index: 4;
    color: rgba(255,255,255,.2);
    font-size: 1.2em;
    line-height: 25px;
    position: absolute;
    width: 400px;
    height: 200px;
    top: 90px;
    margin-left: auto;
    margin-right: auto;
    transition: all 1s ease-out;
    pointer-events:none;
  }
  .status{
    color: red;
  }
  .v{
    color:white;
  }
</style>
