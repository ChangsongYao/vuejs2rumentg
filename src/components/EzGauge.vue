<template id="tpl-gauge">
  <div class="ez-gauge">
    <div class="outer" @click="triggerInput"></div>
    <div class="inner"></div>
    <div class="indicator" :style="rotateStyle" :class="{overload:overload}"></div>
    <div class="data">
      <h1>{{value}} km/h</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ez-gauge",
    props: {
      min:{default:0,type:Number},
      max:{default:100,type:Number},
      thresh:{default:80,type:Number},
      value:{required:true,type:Number}
    },
    computed:{
      rotateStyle:function(){
        var val = this.value < this.min ? 0 : (this.value > this.max ? this.max: this.value);
        var angle = val * 180/(this.max-this.min);
        return {transform:'rotate(' + angle+'deg)'}
      },
      overload:function(){ return this.value >= this.thresh;}
    },
    watch:{
      value:function(nv,ov){
        if(nv >= this.thresh && ov < this.thresh) this.$emit('overload',true);
        if(nv < this.thresh && ov >= this.thresh) this.$emit('overload',false);
      }
    },
    methods:{
      triggerInput:function(evt){
        var x = evt.offsetX - 200;
        var y = 200 - evt.offsetY;
        var angel = Math.PI - Math.atan(y/x);
        angel = angel > Math.PI ? angel-Math.PI : angel;
        var val = Math.floor(angel * (this.max-this.min) / Math.PI);
        this.$emit('update:value',val);
      }
    }
  }
</script>

<style scoped>

</style>
