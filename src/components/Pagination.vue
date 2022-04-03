<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',(pageNo-1))">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo == 1}">1</button>

    <button v-if="startNumAndEndNum.start > 2" >···</button>
    <template v-for="(page,index) in startNumAndEndNum.end">
      <button :class="{active:pageNo == page}"  :key="index"  v-if="page>=startNumAndEndNum.start" @click="$emit('getPageNo',page)">{{page}}</button>
    </template>


    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
    <button :class="{active:pageNo == totalPage}" :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  //  当前页、每一页展示的数据、数据总个数、连续页码数（显示的页码数）
  props:['pageNo','pageSize','total','continues'],
  computed:{
    //总页数  math.ceil向上取整
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum(){
      const {continues,pageNo,totalPage} = this;
      //continues：展示的页数；   pageNo：当前页
      let start = 0, //开始页
          end = 0;    //结束页
      if(continues > totalPage) {  //总页数小于5的情况
        start = 1;
        end = totalPage;
      } else {
        //else就是正常情况
        start = pageNo - parseInt(continues/2);
        end = pageNo + parseInt(continues/2);
        //把出现不正常的现象（start <= 0）纠正
        if(start < 1) {
          start = 1;
          end = continues;
        }
        //start大于总页数的情况纠正
        if(end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start,end }
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background-color: #409eff;
}
</style>
