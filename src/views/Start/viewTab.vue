<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>分页器</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <div class="look">
      <tabs-demo></tabs-demo>
    </div>
    <h3><a href="javascript:;">#</a>使用方法</h3>
    <section class="components-code" style="background-color:#fafafa;">
      <prism-editor
          class="my-editor height-300"
          v-model="code"
          language="vue"
          :readonly="readonly"
          :highlight="highlighter"
          :line-numbers="lineNumbers"
      />
    </section>
    <p class="text">此组件的 <span>&lt;i-tabs&gt;</span> <span>&lt;i-tabs-item&gt;</span> <span>&lt;i-tabs-pane&gt;</span> name值必须要有一 一对应的对应关系。</p>
    <h3><a href="javascript:;">#</a>选项</h3>
      <p class="text"><span>&lt;i-tabs&gt;</span>: 需要设置 selected 属性来确定默认标签。默认高亮状态</p>
      <p class="text">可以这样写: :selected.sync="selectedTab",其中 selectedTab 是需要传递的默认值。</p>
      <p class="text"><span>&lt;i-tabs-head&gt;</span> 和 <span>&lt;i-tabs-body&gt;</span>:是&lt;i-tabs&gt;标签的子组件，错误嵌套会得到一个警告。</p>
      <p class="text"><span>&lt;c-icon&gt;</span>: 可以在标题区域添加图标;</p>
      <p class="text"> <span>&lt;i-tabs-item&gt;:</span> 标题标签  disabled 属性可以设置该标签的不可用状态。</p>
    <p class="text"><span>&lt;c-tabs-pane&gt;</span>: 区域内容标签;</p>
    <div class="explain">
      <table class="table ">
        <thead>
        <tr>
          <th scope="col">参数</th>
          <th scope="col">说明</th>
          <th scope="col">类型</th>
          <th scope="col">必须</th>
          <th scope="col">默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td scope="row">name</td>
          <td>值</td>
          <td>String</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr>
          <td scope="row">icon-name</td>
          <td>值</td>
          <td>String</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr>
          <td scope="row">disabled</td>
          <td>标签属性，设置是否可用</td>
          <td>String</td>
          <td>是</td>
          <td>——</td>
        </tr>
        </tbody>
      </table>
    </div>
    <footer class="footer"><p>Copyright © 2022-present  cool UI | GitHub/yngxtt</p></footer>
  </div>

</template>

<script>
import   tabsDemo from '../../components/tab/tabs-demo'

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
export default {
  name: "viewTab",
  components: {
    tabsDemo,
    PrismEditor

  },
  data(){
    return{
      code:`
          < template>
              <c-tabs :selected.sync="selectedTab">
                  <c-tabs-head>
                        <c-tabs-item name='tab1'>
                            <c-icon icon-name="settings"></c-icon>
                            Tab1
                        </c-tabs-item>
                        <c-tabs-item name='tab2'>Tab2</c-tabs-item>
                        <c-tabs-item name='tab3'>Tab3</c-tabs-item>
                        <c-tabs-item name='tab4' disabled>Tab4</c-tabs-item>
                    </c-tabs-head>
                    <c-tabs-body>
                        <c-tabs-pane name='tab1'>内容1</c-tabs-pane>
                        <c-tabs-pane name='tab2'>内容2</c-tabs-pane>
                        <c-tabs-pane name='tab3'>内容3</c-tabs-pane>
                        <c-tabs-pane name='tab4'>内容4</c-tabs-pane>
                  </c-tabs-body>
              </c-tabs>
            </template>
            <script>
             export default {
                  data() {
                      return {
                          selectedTab: 'tab1'
                      }
                  }
              }
           </ script>
           `,
      lineNumbers:false,
      readonly:true,


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
p {color: #606266;}
.text {
  margin: 0.5rem 0;
}
.text span {
  color: #409eff;
}
.my-editor {
  color: #409eff;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}
.cover {
  max-width: 740px;
  margin-top: 3rem;
  text-align: left;
  /*background-color: #ccc;*/
  margin-left: auto;
  margin-right: auto;

  .goods-cover {
    padding-top: 3rem;
    width: 80%;
    height: 40%;
    margin: 0 auto;
    .goods {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;


      .good {
        background-color: rgba(190,195,200,0.2);
        padding: 1rem 3rem;
        margin: 0.1rem;
        border-radius: 9px;
        span {
          font-size: 3rem;
          color: #999999;
          font-family: Helvetica;
        }
      }
    }
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
    font-size: 1.6rem;
    a {
      margin-left: -1.25rem;
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
  .explain {
    table {
      margin: 4rem 0;
      width: 100%;
      thead {
        /*display: flex;*/
        /*justify-content: center;*/
        tr {
          flex-grow: 1;
          th {
            width: 16%;
            text-align: center;
            font-weight: 460;
            color: #95999c;
            padding: 0 0.4rem ;
            height: 2.3rem;
          }
        }
      }
      tbody {
        tr {
          td {
            height: 2.8rem;
            width: 16%;
            text-align: center;
            border-top: 1px solid #c0c8cc;
            color: #4e6e8e;
          }
          td:nth-child(2) {
            width: 36%;
          }
        }
      }
    }
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