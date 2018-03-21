<template>
  <div id="app">
    <form @submit.prevent="check" v-if="!authorized">
      <input v-model="name" placeholder="账号">
      <input type="password" v-model="pass" placeholder="密码">
      <input type="submit" value="登录">
      <div class="status">{{status}}</div>
    </form>
    <div class="protected" v-else></div>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        name:'',
        pass:'',
        authorized:false,
        status:''
      }
    },
    methods:{
      check:function(){
        if(this.name!=='admin' || this.pass!=='admin')
          return this.status='失败！不如试试 admin/admin？';
        this.authorized = true;
      }
    }
  }


</script>

<style>
  html,body,#app,.protected{
    height:100%;
  }
  #app form{
    width:250px;
    margin:40px auto;
    padding:20px 30px;
    background:#787878;
  }
  #app form > *{
    margin-bottom:10px;
  }
  #app input{
    width:100%;
  }
  .status{
    color:red;
  }
  .protected{
    background:url(../static/img/kings-glory.jpg);
    background-size:cover;
  }

</style>
