<template>
    <div>
      <div class="test" v-show="testShow">
        <h1>等 待 更 新 . . .</h1>
        <p>娱 乐 时 间   |   欢 迎 开 始  →  <span>2 0 4 8 小 游 戏 </span>  |   经 典 小 游 戏</p>
      </div>
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
    border-bottom: #c0c4cc 3px solid;
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
    margin-bottom: 1rem;
  }
  .test p {
    color: #95999c;
    font-size: 1.5rem;
  }
  .test p span {
    color: #409eff;
  }
</style>