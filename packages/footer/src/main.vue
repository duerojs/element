<template>
  <footer class="d-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'DFooter',

    componentName: 'DFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
