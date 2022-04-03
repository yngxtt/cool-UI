<template>
    <div class="cover ">
      <div class="nav-left clearfix" >
        <div class="nav-item">
          <p>入 门</p>
          <ul>
            <li v-for="(item,index) in navStart" :key="index" @click="navSwitch(item.id)" :class="{active:active==item.id}">
              <router-link :to="item.page">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-item">
          <p>组 件</p>
          <ul>
            <li v-for="(item,index) in navComponents" :key="index"  @click="navSwitch(item.id)" :class="{active:active==item.id}">
              <router-link :to="item.page">{{item.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>

</template>

<script>
export default {
  name: "Start",
  data() {
    return{
      navStart:[{
        id:0,
        text:'安装',
        page:'/start/page'
      },{
        id:1,
        text:'快速上手',
        page:'/start/page'
      }],
      navComponents:[{
        id:2,
        text:'Pagination - 分页',
        page:'/start/page'
      },{
        id:3,
        text:'Rotation - 轮播图',
        page:'/start/page'
      },{
        id:4,
        text:'Calendar - 日历',
        page:'/start/page'
      }],
      active:0
    }
  },
  methods:{
    //导航切换
    navSwitch(id) {
      this.active = id;
    }
  }
}
</script>

<style scoped>
/* 清除浮动 */
.clearfix::after {
  display: block;
  height: 0;
  content: "";
  clear: both;
  visibility: hidden;
}
.cover {

}
  .nav-left {
    font-size: 16px;
    background-color: #fff;
    width: 16rem;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 3.6rem;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
  }
  .nav-left .nav-item {
    padding: 1rem;
  }
  .nav-left .nav-item p {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .nav-left .nav-item li {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    margin-top:  0.5rem;
    padding-left: 1rem;
  }
  .router-view{
    position: absolute;
    right: 0;
    width: 86%;
    text-align: center;
    top: 3.6rem;
  }
  .active {
    color: #409eff;
    border-left: 2px solid #409eff;
  }
  .active a {
    color: #409eff;
  }

</style>