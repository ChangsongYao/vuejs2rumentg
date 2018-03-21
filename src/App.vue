<template>
  <div id="app">
    <form>
      <div class="lazy">
        <h4>.lazy</h4>
        <p><input v-model="query" placeholder="without .lazy">{{query}}</p>
        <p><input v-model.lazy="queryLazy" placeholder="with .lazy">{{queryLazy}}</p>
      </div>
      <div class="trim">
        <h4>.trim</h4>
        <p>
          <input v-model="title" placeholder="without .trim">
          {{title.replace(/\s/g,'_')}} / {{title.length}}
        </p>
        <p>
          <input v-model.trim="titleTrim" placeholder="with .trim">
          {{titleTrim.replace(/\s/g,'_')}} / {{titleTrim.length}}
        </p>
      </div>
      <div class="number">
        <h4>.number</h4>
        <p>
          <input type="number" v-model="quantity" placeholder="quantity">
          {{quantity}} / {{typeof quantity}}
        </p>
        <p>
          <input type="number" v-model.number="quantityNumber" placeholder="with .number">
          {{quantityNumber}} / {{typeof quantityNumber}}
        </p>
      </div>
    </form>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        query:'',
        queryLazy:'',
        title:'',
        titleTrim:'',
        quantity:'10',
        quantityNumber:10
      }
    }
  }


</script>

<style>
  html,body,#app,.protected{height:100%;}
  pre{display:inline-block}
</style>
