<template>
  <div id="app">
    <div class="normal">
      <span>常规</span>
      <button @click="ta=ta.filter((d)=>d<counter-2)">filter()</button>
      <button @click="ta=ta.concat([counter++,counter++])">concat()</button>
      <button @click="ta=ta.slice(1)">slice()</button>
    </div>
    <div class="patched">
      <span>补丁</span>
      <button @click="ta.push(counter++)">push()</button>
      <button @click="ta.pop()">pop()</button>
      <button @click="ta.unshift(counter++)">unshift()</button>
      <button @click="ta.shift()">shift()</button>
      <button @click="ta.splice(0,1,counter++)">splice()</button>
      <button @click="ta.sort((d1,d2)=>d2-d1)">sort()</button>
      <button @click="ta.reverse()">reverse()</button>
    </div>
    <div class="noway">
      <span>失败</span>
      <button @click="ta[0]=798">ta[0]=798</button>
      <button @click="ta.length=100">ta.length=100</button>
    </div>
    <p>ta: {{ta}}</p>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data: function () {
      return {
        counter: 4,
        ta: [1, 2, 3]
      }
    }
  }


</script>

<style>
</style>
