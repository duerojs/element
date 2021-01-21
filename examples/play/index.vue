<template>
  <div style="margin: 20px;">
    <d-input v-model="input" placeholder="请输入内容"></d-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
