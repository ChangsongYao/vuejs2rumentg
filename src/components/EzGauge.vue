<template id="tpl-gauge">
  <div class="ez-gauge">
    <div class="outer"></div>
    <div class="inner"></div>
    <div class="indicator" :style="rotateStyle"></div>
    <div class="data">
      <h1>{{value}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ez-gauge",
    props: {
      min: {default: 0},
      max: {default: 100},
      value: {}
    },
    computed: {
      rotateStyle: function () {
        var val = this.value < this.min ? 0 : (this.value > this.max ? this.max : this.value);
        var angle = val * 180 / (this.max - this.min);
        return {transform: 'rotate(' + angle + 'deg)'}
      }
    }
  }
</script>

<style scoped>

</style>
