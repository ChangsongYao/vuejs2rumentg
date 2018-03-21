<template>
  <div id="app">
    <button @click="activeView='comp1'">1</button>
    <button @click="activeView='comp2'">2</button>
    <keep-alive>
      <component :is="activeView"/>
    </keep-alive>
  </div>
</template>
<script>
  import Comp1 from './components/Comp1'
  import Comp2 from './components/Comp2'

  export default {
    name: 'App',
    data: function () {
        return{
          activeView: 'comp1'
        }
    },
    components:{
      'comp1': Comp1,
      'comp2': Comp2
    }
  }


</script>

<style>
  .clearfix:after{
    display:block;
    content:' ';
    clear:both;
  }
  #app div.item.small{
    display:flex;
  }
  #app div.item.small> p:nth-child(2){
    flex:1;
  }
  #app div.item.small> p:last-child{
    width:100px;
  }

  .ez-listview{
    border:1px solid #222;
    border-radius:5px;
  }
  .ez-listview .header{
    background:#f0f0f0;
    padding:5px;
  }
  .ez-listview .toolbar{
    word-spacing:-10px;
    float:left;
  }
  .ez-listview .content{
    padding:5px;
  }
  .ez-listview ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  ul li{
    display:block;
    border:1px solid #ccc;
  }
  ul.large li{
    float:left;
    width:200px;
    height:350px;
    padding:5px;
    box-sizing:border-box;
  }
  ul.large li img{
    width:100%;
  }
</style>
