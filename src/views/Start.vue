<template>
    <div class="cover ">
<!--      <transition name="nav">-->
          <div class="nav-left run-animation  clearfix"  ref="nav">
            <div class="gbc" ref="gbc"></div>
            <div class="nav-item">
              <p>入 门</p>
              <ul>
                <li ref="item" v-for="(item,index) in navStart" :key="index" @click="navSwitch(item.id)" :class="{active:active==item.id}">
                  <router-link :to="item.page">{{item.text}}</router-link>
                </li>
              </ul>
            </div>
            <div class="nav-item">
              <p>组 件</p>
              <ul>
                <li ref="item" v-for="(item,index) in navComponents" :key="index"  @click="navSwitch(item.id)" :class="{active:active==item.id}">
                 <router-link :to="item.page">{{item.text}}</router-link>
                </li>
              </ul>
            </div>
          </div>
<!--      </transition>-->
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
        text:'栏切换 - Tab',
        page:'/start/tabs'
      },{
        id:3,
        text:'日    历 - Calendar',
        page:'/start/calendar'
      },{
        id:4,
        text:'分页器 - Pagination',
        page:'/start/page'
      },{
        id:5,
        text:'轮播图 - Rotation',
        page:'/start/rotation'
      },{
        id:6,
        text:'倒计时 - Countdown',
        page:'/start/countdown'
      }],
      active:0,
      windowWidth:1000
    }
  },
  methods:{
    //导航切换
    navSwitch(id) {
      this.active = id;
      this.$refs.gbc.style.top = this.$refs.item[id].offsetTop + 'px';
      // console.log(index)
      if(this.windowWidth < 960) {
        this.navIsShow = false;
        this.$bus.$emit('getNavShowValue',this.navIsShow);
      }
    },
    navShow(value) {
      this.navIsShow = value;

    },
    windowW(value) {
      this.windowWidth = value
    }
  },
  watch:{
    'navIsShow':function (val) {
      if(val) {
        this.$refs.nav.style.left = '0'
      } else {
        this.$refs.nav.style.left = '-260px'
      }
    }
  },
  mounted() {
    this.$bus.$on('navShow',this.navShow,);
    this.$bus.$on('getWindowWidth',this.windowW);

  },

  beforeDestroy() {
    this.$bus.$off('navShow')
    this.$bus.$off('getWindowWidth')
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
    width: 260px;
    height: 100%;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 2.3rem;
    left: -246px;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
    transition: all 800ms;
  }
  .nav-left .nav-item p {
    margin-top:1rem;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 600;
    padding-left: 1.5rem;
  }
  .nav-left .nav-item li {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    margin-top:  0.3rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 2rem;
    height: 1.6rem;
  }
.nav-left .nav-item li a {
  display: block;

  height: 1.6rem;
}
  .gbc {
    position: relative;
    background-color: #409eff;
    width: 0.3rem;
    height: 1.9rem;
    top:85px;
    transition: all 900ms;
  }
  .nav-left .nav-item li a:hover {
    color: #409eff;
  }
  .nav-left .nav-item  li:hover {
    background-color: rgba(220,220,220,0.1);
    transition: all 350ms;
  }
  .router-view{
    position: absolute;
    right: 0 ;
    width: 86%;
    text-align: center;
    top: 3.6rem;
    padding: 1rem;
  }
  .active {
    color: #409eff;
    padding-left: 1.8rem;
    background-color: rgba(220,220,220,0.2);
  }
  .active a {
    color: #409eff;
  }
  @media screen and (max-width:1146px){
    .router-view {
      width: 75%;
    }
  }
@media screen and (max-width:1042px){
  .router-view {
    width: 70%;
  }
}
@media screen and (max-width:900px){
    .router-view {
      width: 95%;
      top:0;
      margin: 3rem auto;
      /*padding: 0 0.5rem;*/
    }
    .nav-left {
      width: 14rem;
      left:-260px
    }
  }
@media screen and (min-width:900px){
  .nav-left {
  }
  @keyframes animation {
    from {
      left : -260px;
    }
    to {
      left : 0;
    }
  }
  .run-animation {
    animation: animation 800ms ease;
  }
}

</style>