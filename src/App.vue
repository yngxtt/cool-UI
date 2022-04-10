<template>
  <div id="app">
<!--    <HelloWorld :pageNo="pageNo" :pageSize="10" :total="100" :continues="5" @getPageNo="getPageNo"></HelloWorld>-->
    <Hearder></Hearder>
<!--    <Home></Home>-->
<!--    <Start></Start>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Hearder from "./views/Hearder";
// import Home from "./views/Home";
// import Start from "./views/Start";

export default {
  name: 'App',
  components: {
  Hearder
  // Home,
  //   Start
    // HelloWorld
  },
  data(){
    return{
      pageNo: 1,
    }
  },
  methods:{
    getPageNo(pageNo) {
      this.newPageNo = pageNo;
      this.pageNo = this.newPageNo;
    }
  }
}
</script>

<style>
html { overflow-y: scroll; }
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
input {
  /*border: none;*/
}
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  color: #2c3e50;
}
#app {

}
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width:12px;
  height:16px;
  background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
  -webkit-box-shadow:inset 0 0 3px rgba(0,0,255,0.5);
  border-radius:10px;
  background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius:10px;
  -webkit-box-shadow:inset 0 0 5px rgba(0,0,255,.5);
  background-color:#eee;
}

</style>
