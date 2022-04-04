<template>
  <div class="cover">
    <h1><a href="javascript:;">#</a>轮播图</h1>
    <h3><a href="javascript:;">#</a>预览</h3>
    <p>自动播放无缝隙滚动 | 点击按钮节流控制 | 自动播放曲线运动</p>
    <P class="p">可自定义播放速度，可自定义播放曲线。</P>
    <div class="look">
      <c-rotation
          :imgData="imgData"
          :speed="speed"
      />
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
          <td scope="row">speed</td>
          <td>每张图片播放的时间周期，控制播放速度</td>
          <td>number</td>
          <td>否</td>
          <td>2000</td>
        </tr>
        <tr>
          <td scope="row">imgData</td>
          <td>图片数据，数组长度无要求</td>
          <td>array</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr class="tr-font-size">
          <td scope="row">imgUrl</td>
          <td>图片链接地址src</td>
          <td>String</td>
          <td>是</td>
          <td>——</td>
        </tr>
        <tr class="tr-font-size">
          <td scope="row">imgLink</td>
          <td>图片跳转链接</td>
          <td>String</td>
          <td>否</td>
          <td>——</td>
        </tr>
        </tbody>
      </table>
    </div>
    <footer class="footer"><p>Copyright © 2022-present  cool UI | GitHub/yngxtt</p></footer>
  </div>

</template>

<script>
import   CRotation from '../../components/Rotation'

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
    CRotation,
    PrismEditor
  },
  data(){
    return{
      imgData:[
        {
          imgUrl:'../assets/img/a.png',
          imgLink:''
        },
        {
          imgUrl:'../assets/img/b.png',
          imgLink:''
        },
        {
          imgUrl:'../assets/img/c.png',
          imgLink:''
        },
        {
          imgUrl:'../assets/img/d.png',
          imgLink:''
        },
        {
          imgUrl:'../assets/img/e.png',
          imgLink:''
        }


        // {
        //   imgUrl:require('/img/a.png'),
        //   imgLink:''
        // },
        // {
        //   imgUrl:require('../assets/img/b.png'),
        //   imgLink:''
        // },
        // {
        //   imgUrl:require('../assets/img/c.png'),
        //   imgLink:''
        // },
        // {
        //   imgUrl:require('../assets/img/d.png'),
        //   imgLink:''
        // },
        // {
        //   imgUrl:require('../assets/img/e.png'),
        //   imgLink:''
        // },
      ],
      speed:2000,
      pageNo:1,
      code:`
          < template>
              <c-rotation
                :speed="speed"
                :imgData="imgData"
              />
            </template>
            <script>
             export default {
                data(){
                  return{
                    speed:2000,
                    imgData:[
                        {
                          imgUrl:'../assets/img/a.png',
                          imgLink:''
                        },
                        {
                          imgUrl:'../assets/img/b.png',
                          imgLink:''
                        },
                        {
                          imgUrl:'../assets/img/c.png',
                          imgLink:''
                        }
                    ]
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

  .tr-font-size {
    font-size: 0.95rem;
    color: #606266;
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
.p {
  margin: 0.5rem 0;
  color: #606266;
  font-size: 0.9rem;
}
</style>