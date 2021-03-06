import Vue from 'vue'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import stores from './store/store.js'

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history' //切换路径模式，变成history模式
	//scrollBehavior: () => ({ y: 0 }) // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
});

Vue.config.productionTip = false;

// render: h => h(App),
new Vue({
  el: '#app',
  router,
  store: stores,
  components: { App },
  template: '<App/>'
})