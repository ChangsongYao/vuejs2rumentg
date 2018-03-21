<template>
  <div id="app">
    <div>
      <h4 v-pre>快讯：{{message}}</h4>
      <p>快讯：{{message}}</p>
    </div>
    <div>
      <h4>v-text="message"</h4>
      <p v-text="message"></p>
    </div>
    <div>
      <h4>v-html="html_message"</h4>
      <p v-html="html_message"></p>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        message: '每日比特币：区间震荡 上行动能有所衰退',
        html_message: '<i>以色列驻约旦使馆发生持械伤人事件 袭击者被击毙</i>'
      }
    }
  }


</script>

<style>

</style>
