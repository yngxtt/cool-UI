<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>分页器</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <p>点击页码试试，页码有逻辑可以正常跳转...</p>
    <div class="look">
      <c-pagination :pageNo="pageNo" :pageSize="10" :total="100" :continues="5" @getPageNo="getPageNo"/>
    </div>
    <h3><a href="javascript:;">#</a>代码</h3>
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
    <h3><a href="javascript:;">#</a>说明</h3>
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
          <td scope="row">pageNo</td>
          <td>当前页码</td>
          <td>number</td>
          <td>是</td>
          <td>1</td>
        </tr>
        <tr>
          <td scope="row">pageSize</td>
          <td>每页指定显示的数量</td>
          <td>number</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr>
          <td scope="row">total</td>
          <td>需要显示的总数量</td>
          <td>number</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr>
          <td scope="row">continues</td>
          <td>显示的页码数量</td>
          <td>number</td>
          <td>是</td>
          <td>5</td>
        </tr>
        <tr>
          <td scope="row">@getPageNo="getPageNo"</td>
          <td>切换页码时触发的回调函数，页码作为参数返回</td>
          <td>function</td>
          <td>是</td>
          <td>固定式</td>
        </tr>
        </tbody>
      </table>
    </div>
    <footer class="footer"><p>Copyright © 2022-present  cool UI | GitHub/yngxtt</p></footer>
  </div>

</template>

<script>
import CPagination from "../../components/Pagination";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";



export default {
  name: "ViewPagination",
  components:{
    CPagination,
    PrismEditor
  },
  data(){
    return{
      pageNo:1,
      code:`
          < template>
              <c-pagination
                  :pageNo="pageNo"
                  :pageSize="10"
                  :total="100"
                  :continues="5"
                  @getPageNo="getPageNo"
                />
            </template>
            <script>
             export default {
                data(){
                  return{
                    pageNo:1,
                  }
                },
                methods:{
                  getPageNo(pageNo) {
                    this.newPageNo = pageNo;
                    this.pageNo = this.newPageNo;
                  }
                }
            }
           </ script>
           `,
        lineNumbers:false,
        readonly:true

    }
  },
  methods:{
    getPageNo(pageNo) {
      this.newPageNo = pageNo;
      this.pageNo = this.newPageNo;
    },

    highlighter(code) {
     return highlight(code, languages.js); //returns html
   }

  }
}
</script>

<style lang="less" scoped>
  p {color: #606266;}
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