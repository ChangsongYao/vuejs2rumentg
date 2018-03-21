<template>
  <div id="app">
    <h1>人口统计数据(万人)</h1>
    <ul class="meta"></ul>
    <table>
      <tr><td>年度</td><td>人口数</td></tr>
      <tr v-for="(population,year) in stats">
        <td>{{year}}</td><td>{{population}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  // let w = document.body.clientWidth,
  //   h = document.body.clientHeight;

  export default {
    name: 'App',
    data: function () {
      return {
        stats:{
          '2000':126743,
          '2001':127627,
          '2002':128453,
          '2003':129227,
          '2004':129988,
          '2005':130756,
          '2006':131448,
        },
        meta:{
          '统计人':'小明',
          '数据来源':'自编',
          '统计时间':'2017'
        }
      }
    }
  }


</script>

<style>
  #app table{
    width:300px;
    border-collapse:collapse;
    border-top:1px solid #777;
  }
  #app table td{
    border-bottom:1px solid #777;
  }
</style>
