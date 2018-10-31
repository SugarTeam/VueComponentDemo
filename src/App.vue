<template>
  <div id="app">
      <ContainerA :commonAttr="commonAttr"/>
      <ContainerB/>
      <ContainerC :commonAttr="commonAttr"/>
  </div>
</template>
<script>

import ContainerA from './views/containerA/index.vue';
import ContainerB from './views/containerB/index.vue';
import ContainerC from './views/containerC/index.vue';

export default {
  name:'app',
  data() {
    return {
      commonAttr: 'app common attr',
    }
  },
  components: {
    ContainerA,
    ContainerB,
    ContainerC
  }
}
</script>

<style>
#app {
  display: flex;
}

.container {
    padding: 16px;
    margin: 10px;
    flex: 1;
    background: #ccc;
}
</style>


