<template>
  <div id="app">
    <div class="ad" v-if="!vip">
      <img src="../static/img/banner2.jpg">
      <button @click="vip=true">LOGIN AS VIP</button>
    </div>
    <div class="lottery" v-else>
      <img src="../static/img/lottery.jpg">
      <button @click="vip=false">LOGOUT</button>
    </div>
    <div class="content">
      <h1>{{title}}</h1>
      <p class="intro">{{intro}}</p>
      <p class="fulltext" v-if="vip">{{fulltext}}</p>
    </div>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        vip: true,
        title: '央行金融稳定局局长：国务院金稳会做什么、怎么做?',
        intro: '为何要设立金稳会？陆磊认为，当前，我国的系统性金融风险总体可控，但不良资产风险、流动性风险、影子银行风险、外部冲击风险、房地产泡沫风险、政府债务风险、互联网金融风险等正在积累，金融市场上也乱象丛生，套利投机泛滥，利益输送严重，大案要案不断滋生。而金融监管不协调、监管缺失、执法不严等问题不断暴露，不适应跨行业、跨市场金融产品创新发展。设立国务院金稳会，是为了加强监管协调，补齐监管短板，有效防控系统性金融风险，促进金融体系健康发展，提高金融业服务实体经济的水平...',
        fulltext:' 7月17日，中国人民银行金融稳定局局长陆磊接受人民日报记者采访时表示，金稳会的主要职能是统筹金融改革发展和监管，统筹协调货币政策和财政政策、产业政策等，增强监管协调的权威性和有效性。具体来看，金稳会的主要职能包括：坚持协同防范，统筹协调，健全风险监测预警和早期干预机制，补齐监管短板，健全监管制度，改进监管方法，进行监管问责，深化金融业改革开放，稳妥解决体制性、机制性问题。 为何要设立金稳会？ 陆磊认为，当前，我国的系统性金融风险总体可控，但不良资产风险、流动性风险、影子银行风险、外部冲击风险、房地产泡沫风险、政府债务风险、互联网金融风险等正在积累，金融市场上也乱象丛生，套利投机泛滥，利益输送严重，大案要案不断滋生。而金融监管不协调、监管缺失、执法不严等问题不断暴露，不适应跨行业、跨市场金融产品创新发展。 设立国务院金稳会，是为了加强监管协调，补齐监管短板，有效防控系统性金融风险，促进金融体系健康发展，提高金融业服务实体经济的水平。 陆磊说，人民银行将按照中央的要求，强化宏观审慎管理和系统性风险防范职责，以“一盘棋”的思维和手段来维护国家金融稳定：'
      }
    }
  }


</script>

<style>
  .ad img,.lottery img{width:100%}
  .ad button,.lottery button{position:absolute;right:10px;top:10px;}
</style>
