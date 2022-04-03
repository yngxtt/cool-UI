<template>
  <div class="cover">
    <h1>分页器</h1>
    <h3>预览</h3>
    <div class="look">
      <C-Pagination :pageNo="pageNo" :pageSize="10" :total="100" :continues="5" @getPageNo="getPageNo"/>
    </div>
    <h3>代码</h3>
    <section class="components-code" style="background-color:#fafafa;">
      <pre v-highlightjs="sourcecode" >
        <code class="vue" style="background:none; line-height: 0.8rem">
          <p style="color: #42b983;">&lt;template&gt;</p>
              &lt;C-Pagination
                  :pageNo="pageNo"
                  :pageSize="10"
                  :total="100"
                  :continues="5"
                  @getPageNo="getPageNo"
              /&gt;
          <p>&lt;/script&gt;</p>
          <p style="color: #42b983;">&lt;template&gt;</p>
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
          <p>&lt;/script&gt;</p>
        </code>
      </pre>
    </section>
    <h3>说明</h3>
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
          <td>-</td>
        </tr>
        <tr>
          <td scope="row">total</td>
          <td>需要显示的总数量</td>
          <td>number</td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td scope="row">continues</td>
          <td>显示的页码数量</td>
          <td>number</td>
          <td>是</td>
          <td>5</td>
        </tr>
        <tr>
          <td scope="row">@getPageNol</td>
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
export default {
  name: "ViewPagination",
  components:{
    CPagination
  },
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
</script>

<style lang="less" scoped>
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
      }
      h3 {
        width: 100%;
        text-align: left;
        display: block;
        border-bottom: 1px solid #c0c4cc;
        padding-bottom: 0.5rem;
        margin: 2rem 0;
      }

    .components-code {
      background-color: #eee;
      text-align: left;
      font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;;
      color: #eaecec;
      border: 1px solid #eeeeee;
      border-radius: 0.3rem;
      font-size: 0.9rem;
      margin: 4rem 0;
      line-height: 1;


    }

    .components-code:hover {
      box-shadow: 0.8px 0.8px 1px 1px rgba(160,160,160,0.6),-0.8px -0.8px 1px 1px rgba(160,160,160,0.6);
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