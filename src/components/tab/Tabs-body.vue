<template>
  <div class="tabs-body-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsBody',
    inject: ['$bus'],
    created() {
    }
  }
</script>

<style  scoped>
  .tabs-body-wrapper {

  }
</style>