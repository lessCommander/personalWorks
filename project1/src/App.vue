<template>
  <div id="app">
    <div>
      <catalog></catalog>
    </div>
    <div>
      <list></list>
      <goods></goods>
    </div>
  </div>
</template>

<script>
import catalog from './components/catalog.vue'  //上方类型
import list from './components/list.vue'        //左边列表
import goods from './components/goods.vue'      //右边配件

export default {
  name: 'App',
  components: {
    catalog,
    list,
    goods
  }
}
</script>

<style>
div, ul, li{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  margin: 10px auto;
  padding: 10px 30px;
}
</style>
