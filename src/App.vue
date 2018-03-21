<template>
  <div id="app">
    <ez-listview :data="goods">
      <template scope="props">
        <div class="item" :class="props.view">
          <img :src="props.item.image">
          <p>{{props.item.name}}</p>
          <p>￥{{props.item.price}}</p>
        </div>
      </template>
    </ez-listview>
  </div>
</template>
<script>
  import EzListview from './components/EzListview'

  export default {
    name: 'App',
    data: function () {
      return {
        goods:[
          {name:'双肩包男士多功能防盗背包 商务电脑包大学生书包女双肩背包',price:158,image:'../static/img/bag-1.jpg'},
          {name:'休闲运动背包双肩包女书包中学生男时尚潮流大容量旅游旅行包',price:99,image:'../static/img/bag-2.jpg'},
          {name:'防盗背包双肩包男士商务电脑包旅行包 大学生书包女双肩背包',price:158,image:'../static/img/bag-3.jpg'},
          {name:'米熙双肩包女韩版潮 学院风校园印花背包男旅行包 中学生书包女包',price:99,image:'../static/img/bag-7.jpg'},
        ]
      }
    },
    components:{'ez-listview':EzListview}
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
