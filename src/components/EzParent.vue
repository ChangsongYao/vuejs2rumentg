<template id='tpl-parent'>
  <div class="ez-parent">
    <p>
      PARENT {{counter}} |
      <button @click="access_el">$el</button>
      <button @click="access_children">$children</button>
      <button @click="access_refs">$refs</button>
    </p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ez-parent",
    data: function () {
      return {counter: 0};
    },
    methods: {
      access_el: function () {
        this.$el.style.backgroundColor = "#93bbd0";
      },
      access_refs: function () {
        this.$refs.nick && this.$refs.nick.inc();
      },
      access_children: function () {
        this.$children.forEach(function (c) {
          c.inc()
        })
      },
      inc: function () {
        this.counter++
      }
    }
  }
</script>

<style scoped>

</style>
