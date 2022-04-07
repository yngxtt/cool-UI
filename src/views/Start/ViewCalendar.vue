<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>日历</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <h4>{{ year }}年{{ month }}月{{ day }}日</h4>
    <div class="look">
        <c-calendar
           :animationTime= "animationTime"
           :slideAnimation ="slideAnimation"
           :isWeek = "isWeek"
           :Height = "Height"
           :HeightAnimation ="HeightAnimation"
           :etc="etc"
           :isProgressBar="isProgressBar"
           @getDateData="getDateData"
        />
      <br><br><br>
      <p>适配移动端 , 适配PC端 , 支持移动端滑动事件 ;</p><br>
      <p>宽度追加适应 , 支持高雅动画 , 支持年月翻页 , 支持调节行高 . . .</p>
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
          <td scope="row">animationTime</td>
          <td>动画持续时间</td>
          <td>number</td>
          <td>否</td>
          <td>0.3</td>
        </tr>
        <tr>
          <td scope="row">slideAnimation</td>
          <td>左右滑动是否需要动画</td>
          <td>boolean</td>
          <td>否</td>
          <td>true</td>
        </tr>
        <tr>
          <td scope="row">isWeek</td>
          <td>周视图/月视图:false/true</td>
          <td>boolean</td>
          <td>否</td>
          <td>false</td>
        </tr>
        <tr>
          <td scope="row">Height</td>
          <td>表格行高</td>
          <td>number</td>
          <td>否</td>
          <td>50</td>
        </tr>
        <tr>
          <td scope="row">HeightAnimation</td>
          <td>高度变化是否需要动画</td>
          <td>boolean</td>
          <td>否</td>
          <td>true</td>
        </tr>
        <tr>
          <td scope="row">etc</td>
          <td>是否延迟 (动画结束在处理数据)</td>
          <td>boolean</td>
          <td>否</td>
          <td>false</td>
        </tr>
        <tr>
          <td scope="row">isProgressBar</td>
          <td>是否需要显示轮博进度条</td>
          <td>boolean</td>
          <td>否</td>
          <td>true</td>
        </tr>
        <tr>
          <td scope="row">@getDateData=""</td>
          <td>获取日期函数，返回一个对象值</td>
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
import CCalendar from "../../components/Calendar";
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "ViewPagination",
  components:{
    CCalendar,
    PrismEditor
  },
  data(){
    return{
      year:0,
      month:0,
      day:0,
      code:`
          < template>
              <c-calendar
               :animationTime= "animationTime"
               :slideAnimation ="slideAnimation"
               :isWeek = "isWeek"
               :Height = "Height"
               :HeightAnimation ="HeightAnimation"
               :etc="etc"
               :isProgressBar="isProgressBar"
               @getDateData="getDateData"
            />
            </template>
            <script>
             export default {
                data(){
                  return{
                      animationTime:0.3,
                      slideAnimation:true,
                      isWeek: false,
                      HeightAnimation:true,
                      etc:true,
                      isProgressBar:true
                  }
                },
                methods:{
                   getDateData(date) {
                      console.log(date.day)
                      console.log(date.month)
                      console.log(date.year)
                   }
                }
            }
           </ script>
           `,
      lineNumbers:false,
      readonly:true,

      animationTime:0.3,// 动画持续时间
      slideAnimation:true,// 左右滑动是否需要动画
      isWeek: false, // 周视图还是月视图
      Height: 50,   // 子元素行高
      HeightAnimation:true,// 高度变化是否需要动画
      etc:true, // 是否延迟 (动画结束在处理数据)
      isProgressBar:true  //是否显示进度进度条
    }
  },
  methods:{
    getDateData(date) {
      this.year = date.year
      this.month = date.month
      this.day = date.day

    },

    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }

  },
  watch: {
    'Date':function (newVal) {
        this.Date = newVal

    },
    deep:true
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
      margin-left: -1.49rem;
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