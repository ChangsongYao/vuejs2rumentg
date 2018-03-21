<template>
  <div class="ez-panel">
    <div class="header">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ez-panel",
    props: {
      title: {default: 'Panel Title', type: String}
    }
  }
</script>

<style scoped>

</style>
