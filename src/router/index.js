import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//使用VueRouter插件
Vue.use(VueRouter);
//引入store

let router = new VueRouter({
    //路由配置
    routes,

});

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})

export default router;