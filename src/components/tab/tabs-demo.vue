<template>
  <div class="tabs-wrapper">
    <c-tabs :selected.sync="selectedTab">
      <c-tabs-head>
        <c-tabs-item name='tab1'>
          <c-icon icon-name="settings"></c-icon>
          Tab1
        </c-tabs-item>
        <c-tabs-item name='tab2'>Tab2</c-tabs-item>
        <c-tabs-item name='tab3'>Tab3</c-tabs-item>
        <c-tabs-item name='tab4' disabled>Tab4</c-tabs-item>
      </c-tabs-head>
      <c-tabs-body>
        <c-tabs-pane name='tab1'>内容1</c-tabs-pane>
        <c-tabs-pane name='tab2'>内容2</c-tabs-pane>
        <c-tabs-pane name='tab3'>内容3</c-tabs-pane>
        <c-tabs-pane name='tab4'>内容4</c-tabs-pane>
      </c-tabs-body>
    </c-tabs>
  </div>
</template>

<script>
  import Tabs from './Tabs'
  import TabsBody from './Tabs-body'
  import TabsHead from './Tabs-head'
  import TabsItem from './Tabs-item'
  import TabsPane from './Tabs-pane'
  import Icon from './Icon'

  export default {
    components: {
      'c-tabs': Tabs, 'c-tabs-head': TabsHead, 'c-tabs-body': TabsBody, 'c-tabs-item': TabsItem,
      'c-tabs-pane': TabsPane, 'c-icon': Icon
    },
    data() { return { selectedTab: 'tab1' } }
  }
</script>

<style scoped>

</style>