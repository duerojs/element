<template>
  <header class="d-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'DHeader',

    componentName: 'DHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
