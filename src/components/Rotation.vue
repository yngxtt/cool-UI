<template>
  <div class="cover">
    <div class="slider">

      <ul class="img-ul">
        <li v-for="(item,index) in imgList" :key="index"><a href="#"><img :src="item.imgUrl" ></a></li>
      </ul>
      <button class="arrow-l">〈&nbsp;&nbsp;</button>
      <button class="arrow-r">&nbsp;&nbsp;〉</button>

      <ol class="circle">

      </ol>

    </div>
  </div>
</template>

<script>
export default {
  name: "Rotation",
  data() {
    return {
      imgList:[
        {
          imgUrl:require('../assets/img/a.png'),
          imgLink:''
        },
        {
          imgUrl:require('../assets/img/b.png'),
          imgLink:''
        },
        {
          imgUrl:require('../assets/img/c.png'),
          imgLink:''
        },
        {
          imgUrl:require('../assets/img/d.png'),
          imgLink:''
        },
        {
          imgUrl:require('../assets/img/e.png'),
          imgLink:''
        }
      ]
    }
  },
  methods:{
    /**动画函数封装 animate(obj,target,callback);
     * obj:移动元素
     * target:目标位置
     * callback:回调函数，不需要的时候可以不传
     * */

    animate(obj,target,callback) {
    clearInterval(obj.timer);//先清理定时器
    obj.timer = setInterval(function (){
      var step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if(callback) {
            //     callback();//回调函数
            // }
            callback && callback();
          }
          obj.style.left = obj.offsetLeft + step + 'px';
        },26)
      }
    },

  component() {

  },
  mounted() {
      this.srt = (this.imgList[0]);
      this.imgList.push(this.srt);
      console.log(this.imgList);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.slider {
  width: 520px;
  height: 280px;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.img-ul {
  list-style: none;
  width: 660%;
  position: absolute;
  top: 0;
  left: 0;
}
.img-ul li {
  float: left;
  display: block;
}


.img-ul img {
  width: 520px;
  height: 280px;

}

.arrow-l,
.arrow-r {
  border: 0;
  width: 28px;
  height: 28px;
  background-color: rgba(0,0,0,0.1);
  position: absolute;
  top:50%;
  color: white;
  line-height: 28px;
  text-align-all: center;
}
.arrow-l:hover,
.arrow-r:hover {
  background-color: rgba(0,0,0,0.5);
  cursor: pointer;
}
.arrow-l {
  left: 0;
  border-radius:  0 14px 14px 0;
}
.arrow-r {
  right: 0;
  border-radius:  14px 0 0 14px;
}
.circle {
  width: auto;
  height: 13px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  background-color:   rgba(255,255,255,0.3);
  border-radius: 6px;
  margin-left: -32px;
}
.circle li {
  float: left;
  margin: 2px;
  list-style: none;
  width: 9px;
  height: 9px;
  cursor: pointer;
  font-size: 5px;
  border-radius: 4px;
  background: rgba(255,255,255,0.3);
}
.top-f {
  height: 30px;
  width: 100%;
  background-color: #ff0000;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99999;
  display: none;
}
</style>