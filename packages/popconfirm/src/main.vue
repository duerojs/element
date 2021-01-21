<template>
  <d-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="d-popconfirm">
    <p class="d-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="d-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="d-popconfirm__action">
      <d-button 
        size="mini" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{ displayCancelButtonText }}
      </d-button>
      <d-button 
        size="mini" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{ displayConfirmButtonText }}
      </d-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</d-popover>
</template>

<script>
import DPopover from 'element-ui/packages/popover';
import DButton from 'element-ui/packages/button';
import {t} from 'element-ui/src/locale';

export default {
  name: 'DPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'd-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    DPopover,
    DButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
