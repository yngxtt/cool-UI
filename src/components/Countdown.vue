<template>
    <div class="cover">
      <div class="main">
          <span class="title" >&nbsp;{{TitleText}}&nbsp;</span>
          <div v-if="isDay" class="is-show"><span class="date"><span v-if=" Day<10 ">0</span>{{Day}}</span><span class="text">天</span></div>
          <div v-if="isHour" class="is-show"><span class="date"><span v-if=" Hour<10 ">0</span>{{Hour}}</span><span class="text">时</span></div>
          <div v-if="isMinute" class="is-show"><span class="date"><span v-if=" Minute<10 ">0</span>{{Minute}}</span><span class="text">分</span></div>
          <div v-if="isSecond" class="is-show"><span class="date"><span v-if=" Second<10 ">0</span>{{Second}}</span><span class="text">秒&nbsp;</span></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Countdown",
  props:['inputTime','title','isCountDown','isShowDay','isShowHour','isShowMinute','isShowSecond'],
  data() {
    return{
        inputTimeData: this.inputTime || '2022-10-01 00:00:00',//输入的时间
        Day:0,        //天
        Hour:0,       //时
        Minute:0,     //分
        Second: 0,    //秒
        TitleText: this.title || '倒计时',//标题
        countDown: this.isCountDown || false,
        times:10,
        isDay: this.isShowDay || true,
        isHour:this.isShowHour || true,
        isMinute: this.isShowMinute || true,
        isSecond: this.isShowSecond || true
    }
  },
  created() {
      // this.TitleText = this.title;
      // this.inputTimeData = this.inputTime;
      // this.countDown = this.isCountDown;
      // this.isDay = this.isShowDay
      // this.isHour = this.isShowHour
      // this.isMinute = this.isShowMinute
      // this.isSecond = this.isShowSecond

  },
  mounted() {
    this.getTime();
  },
  methods: {
      getTime() {
        let _this = this;
        clearInterval(_this.timer);
        let inputTime = +new Date(this.inputTimeData);
        this.timer = setInterval(function () {
            let nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            let times = 0;

            if(_this.countDown===true){
              times = (inputTime - nowTime) / 1000;
            }else {
              times = (nowTime - inputTime) / 1000;
            }
             // times是剩余时间总的秒数
            _this.Day = parseInt(times / 3600 / 24 ); //天
            _this.Hour = parseInt(times / 60 / 60 % 24); //时
            _this.Minute = parseInt(times / 60 % 60); // 分
            _this.Second = parseInt(times % 60); // 当前的秒
            _this.times = parseInt(times);
            if(_this.times < 1){//时间剩余为0，清除定时器
              clearInterval(_this.timer);
              _this.$emit('EndTiming');
            }
        },1000);

      }
  }
}
</script>

<style scoped>
  .is-show {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .cover {
    display: flex;
    justify-content: center;
  }
  .main {
    border: #95999c 1px solid;
    border-radius: 0.5rem;
    margin: 0 auto;
    padding: 0.1rem;
  }
  .main span {
      display: inline-block;
  }
  .title {
    font-size: 1.8rem;
    padding-right: 0.3rem ;
    font-weight: 320;
    border-right: #95999c 1px solid;
    margin: 0.2rem;
    color: #95999c;
  }
  .date {
      font-size: 2rem;
      color: #0c5460;
      padding: 0.1rem ;
      margin: 0.2rem;
  }
  .text {
      color: #95999c;
      font-weight: 300;
      font-size: 1.5rem;
      padding: 0.1rem ;
      margin: 0.2rem;
  }
</style>