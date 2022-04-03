<template>
  <div>
  <div class="cover">
    <div class="logo">
      <span>Cool UI</span>
    </div>
    <div class="navbar">
      <div class="search-input">
        <input type="search" results>
        <img src="../assets/search.svg">
      </div>
      <div class="nav-text" v-for="(nav,index) in navList"  :key="index" @click="navTransfrom(index)">
        <template  @click="navTransfrom(index)">
          <router-link :class="{active:activeValue==index}" :to="nav.page">{{nav.text}}</router-link>
        </template>
      </div>
      <div class="nav-text github">
        <a href="">GitHub</a>
        <img src="../assets/link.svg">
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
      navList:[{
        text:'主页',
        page:'/home'
      },{
        text:'文档',
        page:'/start'
      }],
      activeValue:0
    }
  },
  methods:{
    navTransfrom(index) {
      this.activeValue = index;
    }
  }
}
</script>

<style scoped>
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
    font-size: 1.6rem;
    font-weight: 600;
    color: #2c3e50;
    line-height: 3.6rem;
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
    display: flex;
    justify-content: flex-end;
  }
  .cover .navbar .search-input input {
    border: none;
    background: none;
    outline: none;
    height: 1.8rem;
    margin-left: 0.8rem;
    font-size: 0.8rem;
    color: #606266;
    width: 9rem;
  }
  .cover .navbar .search-input img{
    height: 1.5rem;
    width: 1.5rem;
    margin: 0.2rem 0.4rem 0.4rem 0;
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
</style>