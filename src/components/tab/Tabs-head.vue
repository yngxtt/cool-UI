<template>
  <div class="tabs-head-wrapper" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsHead',
    inject: ['$bus'],
    mounted() {
      this.$bus.$on('update:selected', (itemName, vm) => {
        let {width, left} = vm.$el.getBoundingClientRect()
        let headLeft =  this.$refs.head.getBoundingClientRect().x
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - headLeft}px`
      })
    }

  }
</script>

<style  scoped>
.tabs-head-wrapper {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #ddd;
}

.tabs-head-wrapper .line {
  margin-bottom: -1px;
  position: absolute;
  bottom: 0;
  border-bottom: 1px solid #409eff;
  transition: all 350ms;
}

.tabs-head-wrapper  .actions-wrapper {
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
}
</style>