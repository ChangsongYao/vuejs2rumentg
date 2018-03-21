<template>
  <div id="app">
    <div class="ad" v-show="!vip">
      <img src="../static/img/banner4.jpg">
      <button @click="vip=true">LOGIN AS VIP</button>
    </div>
    <div class="content">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
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
        vip: false,
        title: '欧洲多国军事人员在斯洛伐克参加反恐培训',
        content: '新华社布拉迪斯拉发７月１７日电（记者曲曦）斯洛伐克国防部１７日宣布，来自１３个欧洲国家的军事人员结束了在斯中部莱斯特军事训练基地进行的“检测及处置自制爆炸物”反恐培训。 斯洛伐克国防部发言人丹卡·察帕科娃说，参加培训的是来自斯洛伐克、奥地利、法国、德国、意大利和希腊等１３国的３２名军事人员。 培训负责人杜尚·哈拉宾说，在为期两周的培训中，来自斯洛伐克爆炸物处置中心的专家为参训人员介绍相关理论知识，训练如何使用装置检测、处置爆炸物。（完）'
      }
    }
  }


</script>

<style>
  .ad img{width:100%}
  .ad button{position:absolute;right:10px;top:10px;}
</style>
