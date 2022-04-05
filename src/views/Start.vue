<template>
    <div class="cover ">
      <div class="nav-left clearfix" v-if="navIsShow" >
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
      navIsShow:false, //导航是否显示
      navStart:[{
        id:0,
        text:'安装',
        page:'/start/install'
      },{
        id:1,
        text:'快速上手',
        page:'/start/fast'
      }],
      navComponents:[{
        id:2,
        text:'Calendar - 日历',
        page:'/start/calendar'
      },{
        id:3,
        text:'Rotation - 轮播图',
        page:'/start/rotation'
      },{
        id:4,
        text:'Pagination - 分页',
        page:'/start/page'
      }],
      active:0,
      windowWidth:1000
    }
  },
  methods:{
    //导航切换
    navSwitch(id) {
      this.active = id;
      if(this.windowWidth < 960) {
        this.navIsShow = false;
      }
    },
    navShow(value) {
      if( this.windowWidth < 960 ){
        if( this.navIsShow === value) {
          this.navIsShow = !value;
        } else {
          this.navIsShow = value;
        }

      } else {
        this.navIsShow = value;
      }

    },
    windowW(value) {
      this.windowWidth = value


    }
  },
  mounted() {
    this.$bus.$on('navShow',this.navShow,
      //   (value)=>{
      // console.log(value)
    // }
    );
    this.$bus.$on('getWindowWidth',this.windowW
        //   (value)=>{
        // console.log(value)
        // }
    );
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
    right: 0 ;
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
  @media screen and (max-width:960px){
    .router-view {
      width: 96%;
      top:0;
      margin: 2rem auto;
      /*padding: 0 0.5rem;*/
    }
  }

</style>