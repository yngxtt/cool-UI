<template>
  <div class="tabs-pane-wrapper" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsPane',
    inject: ['$bus'],
    props: {
      name: {
        type: [String, Number],
        required: true
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
          active: this.active
        }
      }
    },
    created() {
      this.$bus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style  scoped>
  .tabs-pane-wrapper {
    padding: 1rem;


  }
  .active {
  }
</style>