import Home from '../views/Home';
import Start from "../views/Start";
//二级路由
import ViewPagination from "../views/Start/ViewPagination";
export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/start',
        component:Start,
        children:[{
            path:'page',
            component:ViewPagination
        }, {
                path:'/start',
                redirect:'/start/page'
        }]
    },
    //重定项，项目初始访问，定向到首页
    {
        path:'*',
        redirect:'/home'
    }
]