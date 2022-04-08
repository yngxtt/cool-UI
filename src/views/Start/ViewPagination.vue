<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>分页器</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <p>点击页码试试，页码有逻辑可以正常跳转...</p>
    <div class="goods-cover">
      <div class="goods">
        <div class="good"  v-for="(good,index) in goods[pageNo-1]" :key="index"><span>{{good}}</span></div>
      </div>
    </div>
    <div class="look">
      <c-pagination :pageNo="pageNo" :pageSize="12" :total="102" :continues="5" @getPageNo="getPageNo"/>
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
          <td scope="row">@getPageNo=""</td>
          <td>切换页码时触发的回调函数，页码作为参数返回</td>
          <td>function</td>
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
                  :pageSize="pageSize"
                  :total="total"
                  :continues="continues"
                  @getPageNo="getPageNo"
                />
            </template>
            <script>
             export default {
                data(){
                  return{
                    pageNo:1,
                    total:102,
                    pageSize:12,
                    continues:5
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
      readonly:true,
      goods:[
          ['01','02','03','04','05','06','07','08','09',10,11,12],
          [13,14,15,16,17,18,19,20,21,22,23,24],
          [25,26,27,28,29,30,31,32,33,34,35,36],
          [37,38,39,40,41,42,43,44,45,46,47,48],
          [49,50,51,52,53,54,55,56,57,58,59,60],
          [61,62,63,64,65,66,67,68,69,70,71,72],
          [73,74,75,76,77,78,79,80,81,82,83,84],
          [85,86,87,88,89,90,91,92,93,94,95,96],
          [97,98,99,'00','01','02']
      ]

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