<template>
  <div class="cover">
    <div class="logo">
      <img src="../assets/logoText.png" alt="">
    </div>
    <div class="button-text">
      <h1>Cool UI  官方网站</h1>
      <p>一个很Cool的UI组件库</p>
      <a href="">快速上手 →</a>
    </div>
    <div class="info">
      <div class="info-item">
        <h2>简洁至上</h2>
        <span>以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span>
      </div>
      <div class="info-item">
        <h2>Vue驱动</h2>
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
  name: "Home"
}
</script>

<style scoped>
  .cover {
    text-align: center;
  }
  .logo {

  }
  .logo img {
      width: 12rem;
      height: 12rem;
      margin: 2rem;
  }
  .button-text h1 {
    font-size: 2.2rem;
  }
  .button-text p {
    font-size: 1.6rem;
    color: #6a8bad;
    margin: 0.5rem;
  }
  .button-text a {
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
    margin-top: 1.6rem;
    display:  flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    max-width:960px;
    margin-left:  auto;
    margin-right: auto;
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
    margin: 2rem 0 1rem 0;
    color: #c0c4cc;
  }
</style>