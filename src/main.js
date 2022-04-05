import Vue from 'vue'
import App from './App.vue'
//全局珠江
import Pagination from "./components/Pagination";
Vue.component(Pagination.name,Pagination);
//引入路由
import router from './router/index.js';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')

