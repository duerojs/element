<template>
  <div class="d-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`d-collapse-content-${id}`"
      :aria-describedby ="`d-collapse-content-${id}`"
    >
      <div
        class="d-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`d-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="d-collapse-item__arrow d-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <d-collapse-transition>
      <div
        class="d-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`d-collapse-head-${id}`"
        :id="`d-collapse-content-${id}`"
      >
        <div class="d-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </d-collapse-transition>
  </div>
</template>
<script>
  import DCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import Emitter from 'element-ui/src/mixins/emitter';
  import { generateId } from 'element-ui/src/utils/util';

  export default {
    name: 'DCollapseItem',

    componentName: 'DCollapseItem',

    mixins: [Emitter],

    components: { DCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('DCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('DCollapse', 'item-click', this);
      }
    }
  };
</script>
