<template id="tpl-child">
  <div class="ez-child">
    <div>
      CHILD {{idx}} / {{counter}} |
      <button @click="access_parent">$parent</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ez-child",
    props: ['idx'],
    data: function () {
      return {counter: 0};
    },
    methods: {
      inc: function () {
        this.counter++
      },
      access_parent: function () {
        this.$parent.inc()
      }
    }
  }
</script>

<style scoped>

</style>
