<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>快速上手</h1>
    <p>你可以引入整个 Cool UI，或是根据需要仅引入部分组件。</p>
    <h3><a href="javascript:;">#</a>完整引入组件</h3>
      <p>在 main.js 中写入以下内容：</p>
      <section class="components-code" style="background-color:#fafafa;">
        <prism-editor
            class="out-line my-editor"
            v-model="introduce"
            language="vue"
            :readonly="readonly"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
        />
      </section>
      <p>以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。</p>
    <h3><a href="javascript:;">#</a>按需引入组件</h3>
      <p>接下来，如果你只希望引入部分组件，比如 Button 和 Pagination，那么需要在 main.js 中写入以下内容：</p>
      <section class="components-code" style="background-color:#fafafa;">
        <prism-editor
            class="my-editor height-300"
            v-model="register"
            language="vue"
            :readonly="readonly"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
        />
      </section>
    <h3><a href="javascript:;">#</a>开始使用</h3>
      <section class="components-code" style="background-color:#fafafa;">
        <prism-editor
            class="my-editor height-300"
            v-model="use"
            language="vue"
            :readonly="readonly"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
        />
      </section>
    <footer class="footer"><p>Copyright © 2022-present  cool UI | GitHub/yngxtt</p></footer>
  </div>

</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "ViewFast",
  components:{
    PrismEditor
  },
  data(){
    return{
      introduce:`
         import Vue from 'vue';
         import CoolUI from 'cool-ui';
         import 'cool-ui/dist/index.css';
         import App from './App.vue';
         Vue.use(CoolUI);
         new Vue({
           el: '#app',
           render: h => h(App)
         });
           `,
      register:`
          import Vue from 'vue';
          import { Button, Pagination } from 'cool-ui';
          import App from './App.vue';

          Vue.component(Button.name, Button);
          Vue.component(Pagination.name, Select);
          /* 或写为
           * Vue.use(Button)
           * Vue.use(Pagination)
           */

          new Vue({
            el: '#app',
            render: h => h(App)
          });
      `,
      use:`
        <template>
          <div>
            <c-button>默认按钮</c-button>
          </div>
        </template>
      `,
      lineNumbers:false,
      readonly:true

    }
  },
  methods:{
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }

  }
}
</script>

<style lang="less" scoped>
p {
  color: #606266;
}
.my-editor {
  color: #409eff;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional */
.prism-editor__textarea:focus {
  outline: 0;
  border: 0;
}

/* not required: */

.out-line {
  outline: none;
  border : none;
}

.cover {
  max-width: 740px;
  margin-top: 3rem;
  text-align: left;
  /*background-color: #ccc;*/
  margin-left: auto;
  margin-right: auto;
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
      margin-left: -1.48rem;
      color: #409eff;
      padding-right: 0.3rem;
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
    margin: 2rem 0;
    a {
      margin-left: -1rem;
      color: #409eff;
      padding-right: 0.3rem;
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
    //color: #eaecec;
    border: 1px solid #eeeeee;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    margin: 4rem 0;
    line-height: 1;
  }

  .components-code:hover {
    box-shadow: -0.1px 0.5px 0.6px 0.8px rgba(160,160,160,0.6),-0.1px 0.5px 0.6px 0.8px rgba(160,160,160,0.2);
    transition: all 0.8s;
  }
  .footer {
    margin: 2rem auto 3rem auto;
    padding-top: 1rem;
    color: #c0c4cc;
    text-align: center;
    border-top: 1px #eeeeee solid;
  }
}

</style>