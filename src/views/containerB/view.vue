<template>
  <div>
      <div>容器B属性：{{containerBAttr}}</div>
      <div>私有属性：{{priveAttr}}</div>
      <button @click="onUpdate">更新容器组件B</button>
  </div>
</template>
<script>

export default {
    name: 'viewB',
    props: {
        containerBAttr: {
            type: String,
            default: ''
        },
        priveAttr: {
            type: String,
            default: ''
        }
    },
    methods: {
        onUpdate() {
            this.$emit('on-update');
        }
    }
}
</script>


