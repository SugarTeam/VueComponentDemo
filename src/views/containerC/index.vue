<template>
  <div class="container">
      容器组件C
    <ViewComponent :priveAttr="priveAttr" :commonAttr="commonAttr" :containerBAttr="containerB.attr" @on-update="onUpdate"/>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import ViewComponent from './view.vue';

export default {
    props: {
        commonAttr: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            priveAttr: 'prive attr',
        }
    },
    computed: {
        ...mapState(['containerB'])
    },
    methods: {
        ...mapActions(['updateContainerB']),
        onUpdate() {
            this.updateContainerB();
        }
    },
    components: {
        ViewComponent,
    }
}
</script>


