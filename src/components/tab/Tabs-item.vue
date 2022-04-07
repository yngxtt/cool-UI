<template>
  <div class="tabs-item-wrapper" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsItem',
    inject: ['$bus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true   // 必须给 item 一个 name
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.$bus) {
        this.$bus.$on('update:selected', (name) => {
          this.active = (name === this.name)
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) {
          return
        }
        this.$bus && this.$bus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>

<style scoped>
.tabs-item-wrapper {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs-item-wrapper.active {
  color: #409eff;
  font-weight: bold;
}
.tabs-item-wrapper.disabled {
  cursor: not-allowed;
  color: grey;
}
</style>