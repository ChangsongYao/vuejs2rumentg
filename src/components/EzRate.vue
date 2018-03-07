<!--<template>-->
<!--</template>-->

<script>
  export default {
    name: "ez-rate",
    data: function () {
      return {
        levels: ['极差', '差', '一般', '好', '极好'],
        rate: 2
      }
    },
    render: function () {
      var self = this;
      var stars = this.levels.map(function (level, i) {
        return self._c('i', {
          'class': {
            star: true,
            fa: true,
            'fa-star': true,
            active: i <= self.rate
          },
          on: {
            click: self.rateit(i)
          }
        });
      })
      var label = this._c('span', {}, [this._v(this.levels[this.rate])])

      return this._c('div', {class: 'ez-rate'}, stars.concat(label));
    },
    methods: {
      rateit: function (idx) {
        console.log(this);
        return function () {
          this.rate = idx
        }.bind(this);
      }
    }
  }
</script>

<style scoped>
  .ez-rate span{
    margin-left:10px;
  }
  .star{
    color:#f0f0f0;
    cursor:pointer;
    font-size:25px;
  }
  .star.active{
    color:#ff8109;
  }
</style>
