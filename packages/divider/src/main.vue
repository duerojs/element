<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.staticClass, 'd-divider', `d-divider--${props.direction}`]"
  >
    <div
      v-if="slots().default && props.direction !== 'vertical'"
      :class="['d-divider__text', `is-${props.contentPosition}`]"
     >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  }
};

</script>
