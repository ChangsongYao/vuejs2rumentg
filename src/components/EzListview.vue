<template>
  <div class="ez-listview">
    <div class="header clearfix">
      <div class="toolbar">
        <button>综合排序</button>
        <button>销量 &darr;</button>
        <button>价格 &darr;</button>
        <button>口碑 &darr;</button>
      </div>
      <div class="toolbar">
        <button @click="viewType='large'"><i class="fa fa-th-large" @click="viewType='large'"></i> 大图</button>
        <button @click="viewType='small'"><i class="fa fa-list" @click="viewType='small'"></i> 小图</button>
      </div>
    </div>
    <div class="content">
      <ul :class="viewType" class="clearfix">
        <li v-for="d in data">
          <slot :item="d" :view="viewType">{{d.name}}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ez-listview",
    props: ['data'],
    data: function () {
      return {
        viewType: 'large'
      }
    }
  }
</script>

<style scoped>

</style>
