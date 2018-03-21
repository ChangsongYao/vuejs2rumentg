<template>
  <div id="app">
    <h1>{{shop}}</h1>
    <ul class="clearfix">
      <li v-for="item in items">
        <div class="img-wrapper"><img :src="item.thumbnail"></div>
        <div class="title">{{item.title}}</div>
        <div class="price">¥{{item.price}}</div>
      </li>
    </ul>
    <hr>
    <div class="comments"></div>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        shop:'酷动商城',
        items:[
          {thumbnail:'../static/img/sku-1.jpg',title:'永久山地自行车',price:'568',url:''},
          {thumbnail:'../static/img/sku-2.jpg',title:'绿源电动车正品',price:'2169',url:''},
          {thumbnail:'../static/img/sku-3.jpg',title:'包邮正品 防暴雨 6-12人',price:'1382.5',url:''},
          {thumbnail:'../static/img/sku-4.jpg',title:'kd智能平衡车',price:'969',url:''},
          {thumbnail:'../static/img/sku-5.jpg',title:'万达康仰卧起坐健身器材',price:'598',url:''},

        ],
        comments:[
          {user:'lisa',text:'非常NICE的老板'},
          {user:'aha',text:'帐篷很不错，就是有点漏雨:-('},
          {user:'wobushibieren',text:'东西不错，就是物流太慢了！'},
          {user:'ddddd',text:'必须好评！'},
        ]
      }
    }
  }


</script>

<style>
  .clearfix:after{
    content:' ';
    display:block;
    clear:both;
  }
  #app ul{
    list-style:none;
    padding:0;
    margin:0;
  }
  #app ul li{
    float:left;
    margin:10px;
  }
  #app ul li img{
    width:150px;
    height:150px;
  }
  #app .title{
    text-align:center;
  }
  #app .price{
    text-align:center;
    color:red;
  }
  #app .comment{
    padding:10px;
    border-bottom:1px dashed #777;
  }
</style>
