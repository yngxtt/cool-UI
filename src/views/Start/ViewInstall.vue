<template>
  <div class="cover">
    <p class="p">Cool UI 是一个 Cool 的 UI 框架，更多酷酷的更新，敬请期待！现在开始安装体验吧！</p>
    <h1>安装<a href="javascript:;">#</a></h1>
    <h3>NPM&nbsp;<a href="javascript:;">#</a></h3>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <section class="components-code" style="background-color:#fafafa;">
      <pre>
        <code  style="background:none; ">
            <span>npm</span> <span>install</span> <span>vue-cool-ui</span>
        </code>
      </pre>
    </section>
    <h3>YARN<a href="javascript:;">#</a></h3>
    <section class="components-code" style="background-color:#fafafa;">
      <pre>
        <code style="background:none;">
          <span>yarn</span> <span>add</span> <span>vue-cool-ui</span>
        </code>
      </pre>
    </section>
  </div>
</template>

<script>


export default {
  name: "ViewPagination"
}
</script>

<style lang="less" scoped>
  p {
    color: #606266;
  }
  .cover {
      max-width: 740px;
      margin-top: 3rem;
      text-align: left;
      /*background-color: #ccc;*/
      margin-left: auto;
      margin-right: auto;
      .p {
        margin-bottom: 2rem;
        display: block;
      }
      .look {
        display: block;
        margin: 4rem 0;
      }
      h1 {
        width: 100%;
        text-align: left;
        display: block;
        padding-bottom: 3rem;
        a {
          margin-left: -5.5rem;
          color: #409eff;
          display: none;
        }
      }
      h1:hover a {
        display: inline-block;
      }
      h3 {
        width: 100%;
        text-align: left;
        display: block;
        border-bottom: 1px solid #c0c4cc;
        padding-bottom: 0.5rem;
        margin: 2rem 0 3rem 0;
        a {
          margin-left: -4.2rem;
          color: #409eff;
          display: none;
        }
      }
      h3:hover a {
        display: inline-block;
      }

    .components-code {
      background-color: #eee;
      text-align: left;
      font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;;
      border: 1px solid #eeeeee;
      border-radius: 0.3rem;
      font-size: 1rem;
      margin: 1rem 0;
      height: 3rem;

      pre {
        code {
          padding: 0;
          margin: 0;
          height: 2.6rem;
          border: none;

          span {
            display: inline-block;
          }
          span:nth-child(1) {
            color: #1c7430;
          }
          span:nth-child(2) {
            color: #fd7e14;
          }
        }
      }

    }

    .components-code:hover {
      box-shadow: 0.3px 0.3px 0.6px 0.6px rgba(160,160,160,0.5),-0.3px -0.3px 0.6px 0.6px rgba(160,160,160,0.5);
      transition: all 0.8s;
    }
  }

</style>