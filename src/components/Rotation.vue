<template>
  <div class="cover">
    <div class="slider">

      <ul class="img-ul" ref="imgUl">
        <li ref="imgUls" v-for="(item,index) in imgList" :key="index" >
          <a :href="item.imgLink">
            <img :src=" item.imgUrl ">
          </a>
        </li>
      </ul>
      <button @click="arrowLeft" class="arrow-l">〈&nbsp;&nbsp;</button>
      <button @click="arrowRight" class="arrow-r">&nbsp;&nbsp;〉</button>

      <ol ref="ol" class="circle">
          <li v-for="(NUM,index) in olNumber" :key="index" @click="olClick(index)"></li>
      </ol>
    </div>
    <img src="../assets/img/d.png" alt="">
  </div>
</template>

<script>
export default {
  name: "Rotation",
  props:['imgData','speed'],
  data() {
    return {
      imgList:[],//用与遍历的图片数据
      olNumber:1, //动态同台计算小圆点数量
      flag : true, //节流阀
      num : 0, //图片序号
      circle : 0 ,//控制小圈子的播放
      imgWidth:0,
      test:[],
    }
  },
  methods:{
    //初始化数据
    olList() {
      this.olNumber = this.imgList.length-1;//动态同台计算小圆点数量
      this.imgWidth = this.$refs.imgUls[0].offsetWidth;
    },
    /**动画函数封装 animate(obj,target,callback);
     * obj:移动元素
     * target:目标位置
     * callback:回调函数，不需要的时候可以不传
     * */

    animate(obj,target) {
    clearInterval(obj.timer);//先清理定时器
    obj.timer = setInterval(function (){
      let step = (target - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target) {
          clearInterval(obj.timer);
            // if(callback) {
            //     callback();//回调函数
            // }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
      },26)
    },

    //箭头点击事件
    arrowLeft() {
    // arrowRight() {
      if(this.flag){
        this.flag = false;//关闭节流阀
        if(this.num == 0){
          this.num = this.imgList.length-2;
          this.$refs.imgUl.style.left = (-(this.num * this.imgWidth)) +'px';
        }
        this.num--;
        this.animate(this.$refs.imgUl,-(this.num*this.imgWidth));
        this.flag = true;//打开节流阀
        if(this.circle == 0) {
          this.circle = this.imgList.length-2;
        }
        this.circle--;
        this.circleChange(this.circle);
      }
    },
    arrowRight(){
    // arrowLeft() {
      if(this.flag){
        this.flag = false;
        if(this.num == this.$refs.imgUls.length-2){
          this.num = 0 ;
          this.$refs.imgUl.style.left = this.num + 'px';
        }
        this.num++;
        this.animate(this.$refs.imgUl,-this.num*this.imgWidth);

          this.flag = true;//打开节流阀

        //-----------------------------
        this.circle++;
        if(this.circle == this.$refs.ol.children.length){
          this.circle = 0 ;
        }
        this.circleChange(this.circle);
      }
    },
    //自动播放
    Auto(){
      setInterval(() => {
        //手动调用右侧按钮的点击事件
        this.arrowRight()
      },this.speed || 2000)
    },
    // 圆点变色
    circleChange(num){
      for(var i = 0;i < this.$refs.ol.children.length;i++) {
        this.$refs.ol.children[i].style.backgroundColor = 'rgba(255,255,255,0.3)';
      }
      this.$refs.ol.children[num].style.backgroundColor = 'rgba(255,255,255,1)';
    },
    //圆点点击事件
    olClick(index){
      //排他思想，小圆圈变色
      for(var i = 0;i < this.$refs.ol.children.length; i++ ) {
        this.$refs.ol.children[i].style.backgroundColor = 'rgba(255,255,255,0.3)';
      }
      this.$refs.ol.children[index].backgroundColor = 'rgba(255,255,255,1)';
      /**点击小圆圈，移动图片
       * imgWidth 图片宽度
       * 移动距离 -(imgWidth * index)*/
      // var index = this.getAttribute('index');
      //点击后把index给num；实现同步
      index --;
      this.num = index;
      //同理
      this.circle = index;
      this.animate(this.$refs.imgUl,-(this.imgWidth * index));
    }


  },
  component() {

  },
  created() {
    this.imgList = this.imgData;
    this.imgList.push(this.imgData[0])
  },
  mounted() {
    this.olList();
    this.Auto();
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
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  top:50%;
  color: white;
  line-height: 28px;
  text-align-all: center;
}
.arrow-l:hover,
.arrow-r:hover {
  background-color: rgba(0,0,0,0.6);
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
  background-color:   rgba(255,255,255,0.4);
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
  background: rgba(255,255,255,0.7);
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