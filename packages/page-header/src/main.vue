<template>
  <div class="d-page-header">
    <div class="d-page-header__left" @click="$emit('back')">
      <i class="d-icon-back"></i>
      <div class="d-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="d-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'element-ui/src/locale';
export default {
  name: 'DPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
