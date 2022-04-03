import Vue from 'vue'
import App from './App.vue'
//全局珠江
import Pagination from "./components/Pagination";
Vue.component(Pagination.name,Pagination);
//引入路由
import router from './router/index.js';

import VueHighlightJS from 'vue-highlightjs'
// 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import 'highlight.js/styles/github.css'

Vue.use(VueHighlightJS)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

