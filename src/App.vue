<template>
  <div id="app">
    <img src="../static/img/the-road-to-ordianry.jpg" :class="{playing:playing}">
    <span :class="{fa:true,'fa-play-circle':!playing,'fa-stop-circle':playing}"
          @click="playing=!playing" class="control"></span>
  </div>
</template>
<script>
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'App',
    data: function () {
      return {
        playing: false
      }
    }
  }
</script>

<style>
  #app {
    transition: all .2s;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  span.fa {
    position: absolute;
    font-size: 50px;
    left: 78px;
    top: 75px;
    color: #333;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  img:hover {
  }

  .playing {
    animation: turn 30s linear infinite;
  }

  @keyframes turn {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
