<template>
    <div class="app">
      <div class="test" v-show="testShow">
        <h1>等 待 更 新 . . .</h1>
      </div>
      <p>欢 迎 试 用  →  <span>基 与 Vue 的 2 0 4 8 小 游 戏 </span> </p>
      <game></game>
    </div>
</template>

<script>
import game from "./game";
export default {
  name: "Etc",
  components:{
    game
  },
  data() {
    return {
      testShow:true
    }
  },
  methods:{
    show(value) {
      console.log(value)
    }
  },
  created() {
    this.$bus.$on('testIsShow',(value) => {this.testShow = value})
  },
}
</script>

<style scoped>
  .test {
    margin: 1rem;
    padding: 1rem;
    border-bottom: #c0c4cc 1px solid;
    -webkit-transition:-webkit-transform 1s,background 1s,width 1s,height 1s,font-size 1s;
    -o-transition-property:width,height,-o-transform,background,font-size;
    -o-transition-duration:1s,1s,1s,1s,1s;
    -moz-transition-property:width,height,-o-transform,background,font-size;
    -moz-transition-duration:1s,1s,1s,1s,1s;
    transition-property:width,height,transform,background,font-size;
    transition-duration:10s,10s,10s,10s,10s;
  }
  .test h1 {
    color: #0c5460;
    margin-bottom: 2rem;
    margin-top:6rem;
    font-size: 5rem;
    font-weight: 200;
  }
  .app p {
    margin: 3rem;
    color: #95999c;
    font-size: 1.5rem;
  }
  .app p span {
    color: #409eff;
  }
</style>