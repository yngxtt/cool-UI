<template>
  <div class="tabs-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'InitTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {$bus: new Vue()}
    },
    provide() {
      return {$bus: this.$bus}
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs的子组件应该是tabs-head和tabs-body')
        }
      },
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'InitTabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'InitTabsItem'
                && childVm.name === this.selected) {
                this.$bus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren();
      this.selectTab();
    }
  }
</script>

<style  scoped>
  .tabs-wrapper {
  }
</style>