<template>
  <i :class="'d-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'DIcon',

    props: {
      name: String
    }
  };
</script>
