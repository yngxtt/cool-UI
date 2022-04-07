<template>
  <div>
  <div class="cover">
    <div class="logo">
      <img @click="navShowClick" v-if="navLinkShow" class="logo-img" src="../../public/navIcon.svg" >
      <span v-if="logoIsShow"><router-link c  to="/home">Cool UI</router-link></span>
    </div>
    <div class="navbar">
      <div class="search-input">
        <input v-if="searchShow" type="text">
      </div>
      <img class="search-img" @click="isSearchShow" src="../../public/search.svg" />
      <div class="nav-text" v-for="(nav,index) in navList"  :key="index" @click="navTransfrom(index)">
        <template  @click="navTransfrom(index)">
          <router-link :class="{active:activeValue == index}" :to="nav.page">{{nav.text}}</router-link>
        </template>
      </div>
      <div class="github">
        <a target="_blank" href="https://github.com/yngxtt/cool-UI">GitHub</a>
        <img src="../../public/link.svg" />
      </div>
    </div>
  </div>
  <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "Hearder",
  data() {
    return{
      searchShow:true, //搜索框是否显示
      logoIsShow:true, //logo字是否显示
      navLinkShow:false, //导航显示按钮 是否显示
      navIsShow:null, //导航是否显示   传递给Start组件
      navList:[{
        text:'主 页',
        page:'/home'
      },{
        text:'文 档',
        page:'/start/install'
      }],
      activeValue:0,
      screenWidth: null,//收集屏幕宽度
    }
  },
  methods:{
    navTransfrom(index) {
      this.activeValue = index;
    },
    navShowClick() {
      if(this.$route.path==='/home') {
        this.$router.push('/start')
      }else {
        this.navIsShow = !this.navIsShow
        this.$bus.$emit('navShow',this.navIsShow)
        this.$bus.$emit('getWindowWidth',this.screenWidth)
      }
    },
    isSearchShow() {
      if( this.screenWidth<900 ) {
        this.searchShow = !this.searchShow;
      }
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    },
        this.$bus.$on('getNavShowValue',(value)=>{
            this.navIsShow = value
        })
  },
  beforeDestroy() {
    this.$bus.$off('getNavShowValue')
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        if (val < 900) {
          this.searchShow = false
          this.logoIsShow = false
          this.navLinkShow = true
          this.navIsShow = false
          // console.log(val+'屏幕宽度小于900px')
        } else {
          this.searchShow = true
          this.logoIsShow = true
          this.navLinkShow = false
          this.navIsShow = true
          // console.log(val+'屏幕宽度大于900px')
        }
        this.$bus.$emit('navShow',this.navIsShow)
        this.$bus.$emit('getWindowWidth',this.screenWidth)
      },
      immediate: true,
      deep:true
    },
    '$route.path':function (newValue) {
        if(newValue === '/home') {
            this.activeValue = 0
        } else {
          this.activeValue = 1
        }
        if(this.screenWidth>900) {
          this.$bus.$emit('navShow',true)
        }
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width:960px){

  }
  .cover {
    width: 100%;
    height: 3.6rem;
    background-color: #fff;
    position: fixed;
    border-bottom: 1px solid #eaecec;
    display: flex;
    justify-content: space-between;
    z-index: 99;
  }
  .clear{
    width: 100%;
    height: 3.6rem;
  }
  .cover .logo {
    height: 100%;
    padding-left: 1rem;
  }
  .cover .logo span{
    color: #409eff;
    font-size: 1.6rem;
    font-weight: 600;
    /*color: #2c3e50;*/
    line-height: 3.6rem;
  }
  .cover .logo-img{
    width: 1.6rem;
    height: 1.6rem;
    margin: 1rem ;
  }
  .cover .navbar {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    font-size:1.1rem;
    font-weight: 500;
  }

  .cover .navbar .search-input {
    border: 1px solid #eaecec;
    height: 1.8rem;
    margin: 0.9rem;
    border-radius: 1.3rem;
  }
  .cover .navbar .search-input input {
    z-index: 22;
    border: none;
    background: none;
    outline: none;
    height: 1.8rem;
    margin-left: 0.8rem;
    font-size: 0.8rem;
    color: #606266;
    width: 10rem;
  }
  .cover .navbar .search-img {
    z-index: 21;
    height: 1.5rem;
    width: 1.5rem;
    margin: 1.1rem 1.2rem 1rem -2.8rem ;
  }
  .cover .navbar .search-img:hover {
    height: 1.6rem;
    width: 1.6rem;
  }
  .cover .navbar .search-input:focus-within  {
    border: 1px solid #409eff;
    box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem #409eff,-0.01rem -0.01rem 0.01rem 0.01rem #409eff;
    transition: all 0.8s;
  }

  .cover .navbar .nav-text {
    display: flex;
    justify-content: flex-end;
  }
  .cover .navbar .nav-text a {
    display: inline-block;
    padding: 1.05rem 0;
    margin: 0 0.5rem;
  }
  .github {
    display: flex;
    justify-content: flex-end;
  }
  .cover .navbar .github a {
    display: inline-block;
    margin: 0;
    padding: 1.05rem 0 1.2rem  1rem;
    font-weight: 600;
  }
  .cover .navbar .github img {
    height: 1.3rem;
    width: 1.3rem;
    margin-right: 1.5rem;
    padding: 1.1rem 0 1.1rem 0.1rem;
  }
  .active {
    border-bottom: 2px solid #409eff;
  }
  @media screen and (max-width:560px) {
    .github {
      display: none;
    }
    .navbar {
      margin-right: 1rem;
    }
  }
</style>