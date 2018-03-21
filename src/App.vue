<template>
  <div id="app"
       tabindex=1
       @keydown.up='move("up",5,5)'
       @keydown.down='move("down",5,5)'
       @keydown.left='move("left",5,5)'
       @keydown.right='move("right",5,5)'
       :style="{'background-position':bgpos[0]+'px ' + bgpos[1] + 'px' }"
  >
    <h1>开车吧，老司机</h1>
    <div class="square fa fa-space-shuttle"
         :style="{left:pos.left+'px',top:pos.top+'px',transform:tx}"></div>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        tx:'rotate(-90deg)',
        pos:{
          left:300,
          top:150
        },
        bgpos:[0,0],
        dir:'up'
      }
    },
    created:function(){
      var self = this;
      var step = function(){
        self.move(self.dir,0,1);
        self.$forceUpdate();
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },
    methods:{
      move:function(dir,fgstep,bgstep){
        this.dir = dir;
        switch(dir){
          case 'left':
            this.pos.left -= fgstep;
            this.tx = 'rotate(-180deg)';
            this.bgpos[0] +=bgstep;
            break;
          case 'right':
            this.pos.left += fgstep;
            this.tx = 'rotate(0deg)';
            this.bgpos[0] -=bgstep;
            break;
          case 'up':
            this.pos.top -= fgstep;
            this.tx = 'rotate(-90deg)';
            this.bgpos[1] +=bgstep;
            break;
          case 'down':
            this.pos.top += fgstep;
            this.tx = 'rotate(90deg)';
            this.bgpos[1] -=bgstep;
            break;
        }
      }
    }
  }


</script>

<style>
  #app{
    position: absolute;
    left:0;top:0;right:0;bottom:0;
    overflow:hidden;
    outline:none;
    background:url(../static/img/sky.jpg) repeat;
    color:white;
  }
  #app .square{
    position:absolute;
    font-size:50px;
    color:#7a6e6e;
    transition:transform .5s;
  }
</style>
