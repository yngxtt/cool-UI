import Home from '../views/Home';
import Start from "../views/Start";
//二级路由
import ViewPagination from "../views/Start/ViewPagination";
import ViewInstall from "../views/Start/ViewInstall";
import ViewFast from "../views/Start/ViewFast";
import ViewRotation from "../views/Start/ViewRotation";
import ViewCalendar from "../views/Start/ViewCalendar";

export default [
    {
        //首页
        path:'/home',
        component:Home
    },
    {
        //文档
        name:'start',
        path:'/start',
        component:Start,
        children:[
        //安装
        {
            path:'install',
            component:ViewInstall
        },
        //引入
        {
            path:'fast',
            component:ViewFast
        },
        //分页器
       {
           path:'page',
           component:ViewPagination
       },
       //轮播图
       {
           path:'rotation',
           component:ViewRotation
       },
       //日历
       {
           path:'calendar',
           component:ViewCalendar
       },

            //重定项，项目初始访问，定向到首页
            {
                path:'/start',
                redirect:'/start/install'
            }]
    },
    //重定项，项目初始访问，定向到首页
        {
            path:'*',
            redirect:'/home'
        }
]