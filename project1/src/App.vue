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
import catalog from './components/catalog.vue'
import list from './components/list.vue'
import goods from './components/goods.vue'

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
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  margin: 10px auto;
  padding: 10px 30px;
}
</style>
