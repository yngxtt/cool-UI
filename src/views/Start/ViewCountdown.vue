<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>倒计时</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <p class="title">倒计时</p>
    <div class="look">
      <c-countdown
          :inputTime="inputTime"
          :title="title"
          :isCountDown="isCountDown"
          :isShowDay="isShowDay"
          :isShowHour="isShowHour"
          :isShowMinute="isShowMinute"
          :isShowSecond="isShowSecond"
      />
    </div>
    <p class="title">计时</p>
    <div class="look">
      <c-countdown
          :inputTime="inputTimeT"
          :title="titleT"
          :isCountDown="isCountDownT"
          :isShowDay="isShowDay"
          :isShowHour="isShowHour"
          :isShowMinute="isShowMinute"
          :isShowSecond="isShowSecond"
      />
    </div>
    <h3><a href="javascript:;">#</a>代码</h3>
    <p class="title">倒计时</p>
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
    <p class="title">计时</p>
    <section class="components-code" style="background-color:#fafafa;">
      <prism-editor
          class="my-editor height-300"
          v-model="codeT"
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
              <td scope="row">inputTime</td>
              <td>输入的时间，格式请参考代码部分</td>
              <td>String</td>
              <td>是</td>
              <td>——</td>
            </tr>
            <tr>
              <td scope="row">title</td>
              <td>标题</td>
              <td>String</td>
              <td>是</td>
              <td>——</td>
            </tr>
            <tr>
              <td scope="row">isCountDown</td>
              <td>是否是倒计时，ture:倒计时/false:计时</td>
              <td>boolean</td>
              <td>是</td>
              <td>——</td>
            </tr>

            <tr>
              <td scope="row">isShowDay</td>
              <td>是否显示天数</td>
              <td>boolean</td>
              <td>是</td>
              <td>——</td>
            </tr>
            <tr>
              <td scope="row">isShowHour</td>
              <td>是否显示秒钟</td>
              <td>boolean</td>
              <td>是</td>
              <td>——</td>
            </tr>
            <tr>
              <td scope="row">isShowMinute</td>
              <td>是否显示分钟</td>
              <td>boolean</td>
              <td>是</td>
              <td>——</td>
            </tr>
            <tr>
              <td scope="row">isShowSecond</td>
              <td>是否显示秒钟</td>
              <td>boolean</td>
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
import CCountdown from "../../components/Countdown";
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
    CCountdown,
    PrismEditor
  },
  data(){
    return{
      code:`
          < template>
              <c-countdown
                :inputTime="inputTime"
                :title="title"
                :isCountDown="isCountDown"
              />
            </template>
            <script>
             export default {
                data(){
                  return{
                      inputTime:'2022-10-01 00:00:00',
                      title:'倒计时',
                      isCountDown:true,
                      isShowDay:true,
                      isShowHour:true,
                      isShowMinute:true,
                      isShowSecond:true,
                  }
                }
             }
           </ script>
           `,
        codeT:`
          < template>
              <c-countdown
                :inputTime="inputTime"
                :title="title"
                :isCountDown="isCountDown"
              />
            </template>
            <script>
             export default {
                data(){
                  return{
                      inputTime:'2021-10-01 00:00:00',
                      title:'计时',
                      isCountDown:false,
                      isShowDay:true,
                      isShowHour:true,
                      isShowMinute:true,
                      isShowSecond:true
                  }
                }
             }
           </ script>
           `,
      lineNumbers:false,
      readonly:true,
      inputTime:'2022-10-01 00:00:00',
      title:'倒计时',
      isCountDown:true,
      isShowDay:true,
      isShowHour:true,
      isShowMinute:true,
      isShowSecond:true,

      inputTimeT:'2021-10-01 00:00:00',
      titleT:'计时',
      isCountDownT:false,
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
.title {
  font-size: 1.2rem;
  margin-left: 1rem;
}
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