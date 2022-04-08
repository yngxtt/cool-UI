<template>
  <div class="cover">
    <div class="logo">
      <div class="logo-img"><img src="../../public/logoText.png" /></div>
      <div class="slogan">
        <div class="slogan-one">轻 量 化</div>
        <div class="slogan-two">V u e  U I 组 件 库</div>
        <div class="slogan-there">
          <a href="https://cn.vuejs.org/" target="_blank">
            <span>Vue 官网</span>
          </a>
          <a  href="https://blog.csdn.net/nilmao/" target="_blank">
           <span class="svg">
              <svg t="1649216410534" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6189" width="16" height="16"><path d="M653.302558 611.117182 370.983634 611.117182c-26.144626 0-47.286268 21.249233-47.286268 47.286268s21.195437 47.340063 47.286268 47.340063l282.318923 0c26.037035 0 47.232472-21.303029 47.232472-47.340063C700.481235 632.366415 679.339593 611.117182 653.302558 611.117182zM439.734317 415.409056l144.602375 0c26.037035 0 47.286268-21.249233 47.286268-47.178677 0-26.09083-21.249233-47.393859-47.286268-47.393859L439.734317 320.83652c-26.09083 0-47.232472 21.303029-47.232472 47.393859C392.448049 394.159823 413.589691 415.409056 439.734317 415.409056zM819.799713 0.107591C619.088603 0 418.323698 0.107591 217.558793 0 198.568972 0 180.009515 1.452479 161.288672 5.594735c-95.271878 20.92646-158.750599 101.888727-159.987896 197.429582C-1.120023 400.830468 0.547638 598.475233 0.601434 796.173793c0 22.378939 0.968319 44.219923 6.186486 66.545066 21.948575 93.012465 98.768587 158.158848 197.859947 160.256874 102.372887 1.990434 204.907161 0.430364 307.226252 0.430364 98.822382 0 197.752356-0.107591 296.574738 0.107591 19.043616 0.053796 37.441686-1.56007 56.216325-5.863712 94.626331-21.840984 159.288554-101.996318 159.34235-199.366221 0.053796-204.853365 0.107591-409.70673 0-614.560095C1023.953736 90.43028 933.415865 0.161387 819.799713 0.107591zM910.660357 497.178257l0 135.779909 0 30.125495c0 137.501366-111.35674 248.858106-248.911901 248.858106L519.835856 911.941766 391.210752 911.941766 362.268759 911.941766c-137.555161 0-248.911901-111.35674-248.911901-248.858106L113.356858 361.021779c0-137.44757 111.35674-248.858106 248.911901-248.858106l68.535501 0 88.977801 0 4.787802 0c0 0.107591 0 0.107591 0 0.107591 135.295749 2.52839 244.177895 112.863015 244.177895 248.750515l0 3.819482 0 20.4423c0 15.062747 12.26538 27.274332 27.166741 27.274332l28.404038 0 13.717859 0c40.077667 0 72.570165 32.492498 72.570165 72.623961L910.660357 497.178257 910.660357 497.178257z" p-id="6190" data-spm-anchor-id="a313x.7781069.0.i38" class="selected" fill="#707070"></path></svg>           </span>
            <span>技术博客</span>
          </a>
          <a href="https://github.com/yngxtt/cool-UI" target="_blank">
            <span class="svg">
              <svg t="1649216713111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139" width="16" height="16"><path d="M1023.560892 524.587752c0 114.331752-32.549236 217.148443-97.647709 308.450075-65.047295 91.301632-149.132822 154.455339-252.205404 189.512299-11.975662 2.303012-20.778286 0.716493-26.305515-4.759558a27.584966 27.584966 0 0 1-8.342021-20.471218V853.150798c0-44.166653-11.566238-76.511177-34.647536-96.982394a446.272549 446.272549 0 0 0 68.32269-12.282731c20.16415-5.476051 41.044792-14.329852 62.590748-26.612583a187.311643 187.311643 0 0 0 53.992837-45.446104c14.432209-18.014672 26.203159-41.914819 35.312851-71.751618 9.109692-29.8368 13.664538-64.074912 13.664538-102.765514 0-55.118754-17.554069-102.049021-52.61103-140.739623 16.376974-41.454216 14.636921-87.872703-5.373695-139.357815-12.436265-4.094244-30.399759-1.535341-53.941659 7.523172a355.17563 355.17563 0 0 0-61.311297 30.041513l-25.333132 16.376974a462.137743 462.137743 0 0 0-127.945112-17.707604 462.137743 462.137743 0 0 0-127.945111 17.758782 589.571074 589.571074 0 0 0-28.301459-18.424096c-11.77095-7.31846-30.34858-16.069906-55.681713-26.305515-25.281954-10.235609-44.422543-13.306292-57.31941-9.212048-19.498835 51.433935-21.085354 97.852421-4.606024 139.306637-35.108139 38.690602-52.713386 85.620869-52.713386 140.739623 0 38.690602 4.606024 72.826357 13.715716 102.458445 9.109692 29.58091 20.778286 53.481057 34.954605 71.700441a180.658498 180.658498 0 0 0 53.634591 45.753172c21.545957 12.282731 42.477777 21.18771 62.641926 26.612583 20.215328 5.527229 42.989557 9.621472 68.32269 12.333909-17.758781 16.376974-28.659705 39.867697-32.651593 70.369811a129.941055 129.941055 0 0 1-29.990334 10.235609 184.087426 184.087426 0 0 1-37.974109 3.428929c-14.688099 0-29.171485-4.913092-43.654872-14.688099-14.432209-9.826185-26.766117-24.053681-37.001726-42.682489a109.162769 109.162769 0 0 0-32.293346-35.517563c-13.101579-9.109692-24.104859-14.585743-33.009839-16.376974l-13.306292-2.047122c-9.314404 0-15.762838 1.023561-19.345301 3.070683-3.582463 2.047122-4.606024 4.606024-3.326572 7.83024a37.769397 37.769397 0 0 0 5.987831 9.570295 49.182101 49.182101 0 0 0 8.700267 8.188487l4.606024 3.377751c9.826185 4.606024 19.447657 13.255114 29.017952 25.998447 9.570294 12.743333 16.581686 24.360749 20.982998 34.80107l6.653146 15.71166c5.783119 17.298179 15.558126 31.320963 29.376197 42.017174 13.766894 10.747389 28.659705 17.554069 44.627255 20.471218 15.96755 2.968327 31.423319 4.606024 46.316131 4.810736 14.841633 0.204712 27.22672-0.562958 37.001726-2.405368l15.302235-2.712436c0 17.298179 0.102356 37.564685 0.358247 60.799517l0.307068 36.848192c0 8.188487-2.86597 15.046345-8.700268 20.471218-5.731941 5.527229-14.636921 7.113748-26.612583 4.810736-103.072582-35.056961-187.158109-98.261846-252.205404-189.512299C32.549236 741.736195 0 638.919504 0 524.587752c0-95.191163 22.876586-182.910331 68.629758-263.31104a516.028224 516.028224 0 0 1 186.288082-190.894106A491.309228 491.309228 0 0 1 511.780446 0.012795a491.309228 491.309228 0 0 1 256.913784 70.369811 516.028224 516.028224 0 0 1 186.236905 190.894106C1000.684306 341.626242 1023.560892 429.447767 1023.560892 524.587752z" fill="#555555" p-id="7140"></path></svg>
            </span >
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </div>
    <div class="button-text">
      <h1>Cool UI  官方网站</h1>
      <p>一 个超 Cool 的 UI 组 件 库</p>
      <span @click="goStart">快速上手 →</span>
    </div>
    <div class="info">
      <div class="info-item">
        <h2>简洁至上</h2>
        <span>以 Markdown 为中心的项目结构，以最少的配置帮助你专注于生产写作。</span>
      </div>
      <div class="info-item">
        <h2>Vue 驱动</h2>
        <span>享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。</span>
      </div>
      <div class="info-item">
        <h2>高性能</h2>
        <span>VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。</span>
      </div>
    </div>
    <footer class="footer"><p>Copyright © 2022-present  cool UI | GitHub/yngxtt</p></footer>
  </div>

</template>

<script>
export default {
  name: "Home",
  methods:{
    goStart() {
      this.$router.push('/start/install')
    }
  }
}
</script>

<style scoped>
  .svg svg{
    width: 20px;
    height: 20px;
  }
  .svg {
    margin-top: 2px;
    margin-right: 5px;
  }
  .cover {
    text-align: center;
  }
  .logo {
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }
  .logo .slogan {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
  }
  .logo .slogan .slogan-one {
    font-size: 3.3rem;
    margin-top: 1rem;
    font-weight: 100;
    text-align: left;
  }
  .logo .slogan .slogan-two {
    font-size: 2.8rem;
    text-align: left;
    font-weight: 140;
  }
  .logo .slogan .slogan-there {
    text-align: left;
    display: flex;
    justify-content: center;
  }
  .logo .slogan .slogan-there a {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 110;
    padding: 0.5rem 0.9rem;
    border-radius: 1.5rem;
    margin-top: 0.3rem;
    margin-right: 0.6rem;
    color: #ffffff;
    box-sizing: border-box;
  }
  .logo .slogan .slogan-there a:nth-child(2):hover span,
  .logo .slogan .slogan-there a:nth-child(3):hover span {
    cursor: pointer;
    color: #409eff;
  }
  .logo .slogan .slogan-there a:nth-child(1):hover span {
    color: #1b1e21;
  }
  .logo .slogan .slogan-there a span {
    display: inline-block;
  }
  .logo .slogan .slogan-there a:nth-child(1) {
    background-color: #42b983;
  }
  .logo .slogan .slogan-there a:nth-child(2),
  .logo .slogan .slogan-there a:nth-child(3) {
    background-color: rgba(200,200,200,0.5);
    color: #1b1e21;
  }
  .logo .slogan .slogan-there a:nth-child(3) {

  }
  .logo img {
      width: 12rem;
      height: 12rem;
      margin: 2rem;
  }

  .button-text h1 {
    font-size: 2.1rem;
  }
  .button-text p {
    font-size: 1.6rem;
    color: #6a8bad;
    margin: 0.5rem;
  }
  .button-text span {
    display: inline-block;
    width: 8rem;
    height: 3.1rem;
    background-color: #409eff;
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 3.1rem;
    border-radius: 0.3rem;
    margin: 1rem;
  }
  .info {
    border-top: 1px solid #eaecef;
    border-bottom: 1px solid #eaecef;
    padding: 1.2rem 0;
    margin:  2.2rem auto 2rem auto;
    display:  flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width:960px;
    border-left: rgba(250,250,250,0) solid 1.5rem;
    border-right: rgba(250,250,250,0) solid 1.5rem;
  }
  .info .info-item {
    display: block;
    dflex-grow: 1;
    flex-basis: 30%;
    /*min-width: 30%;*/
    text-align: left;
  }
  .info .info-item h2 {
    font-weight: 540;
    font-size: 1.3rem;
    display: block;
    margin: 0.5rem 0;
  }
  .info .info-item span {
    font-size: 16px;
    color: #4e6e8e;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.7;
  }
  .footer {
    margin: 4rem auto 3rem auto;
    padding-top: 1rem;
    color: #c0c4cc;
    text-align: center;

    max-width:960px;
  }
  @media screen and (max-width:900px){
    .info {
      display: flex;
      flex-direction: column;
    }
    .slogan-there {
      display: flex;
      justify-content: center;
      margin: 2rem;

    }
    .slogan-there a {
      width: 50%;
      /*display: flex;*/
      /*flex-direction: column;*/
    }
    .logo {
      display: flex;
      flex-direction: column;
    }
    .logo img {
      margin-bottom: 0rem;
      margin-top: 0rem;
    }
    .slogan-one,
    .slogan-two {
      display: flex;
      justify-content: center;
    }
    .button-text {
      margin-top: 0;
    }
  }
  @media screen and (max-width:500px) {
    .slogan-there {
      margin: 2rem 0;
    }
  }
</style>