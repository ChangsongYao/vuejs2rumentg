<template>
  <div id="app">
    <div class="single">
      <h4>绑定单选列表</h4>
      <select v-model="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p>gender: {{gender}}</p>
    </div>
    <div class="multiple">
      <h4>绑定多选列表</h4>
      <select multiple v-model="nations">
        <option value="CN">China</option>
        <option value="JPN">Japan</option>
        <option value="KR">Korea</option>
      </select>
      <p>nations:{{nations}}</p>
    </div>
  </div>
</template>
<script>
  // import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        gender: '',
        nations:[]
      }
    }
  }


</script>

<style>
  select{
    min-width:150px;
  }

</style>
