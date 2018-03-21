<template>
  <div id="app">
    <ez-panel :title="demoTitle">
      <img :src="demoPicture" style="float:left;margin-right:10px;">
      <div>{{demoContent}}</div>
      <p><i class="fa fa-thumbs-up"></i> 点赞：<span class="thumbup">123</span></p>
    </ez-panel>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  import EzPanel from './components/EzPanel'

  export default {
    name: 'App',
    data: function () {
      return {
        demoTitle:'物理学重大突破:华人科学家发现“天使粒子”',
        demoPicture: '../static/img/angel-particle.jpg',
        demoContent:'21日，张首晟及其团队在美国《科学》杂志发表重大发现：在国际物理学界历经80年探索后，他们终于发现了正反同体的天使粒子——马约拉那费米子。这是继上帝粒子、中微子、引力子之后的又一里程碑发现，意味着量子计算已成为可能。张首晟团队的这一发现，也验证了意大利理论物理学家 Ettore Majorana 在 80 年前提出的预测——存在一类没有反粒子的粒子。同时，张首晟团队的发现也证明了存在一种比量子还小的单位，这也将对现在的量子理论带来巨大的改变。国际同行纷纷表示，张首晟团队的这一发现是一项里程碑式的发现，对于物理界来说，或许将会开启一个新的时代。'
      }
    },
    components:{'ez-panel':EzPanel}
  }


</script>

<style>
  .ez-panel{
    border: 1px solid #222;
    border-radius:5px;
  }
  .ez-panel .header{
    background:blue;
    color:white;
    padding: 5px;
  }
  .ez-panel .content{
    padding:5px;
  }
  .ez-panel .content:after{
    content:' ';
    display:block;
    clear:both;
  }
</style>
