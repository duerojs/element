<template>
  <transition name="d-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="d-autocomplete-suggestion d-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <d-scrollbar
        tag="ul"
        wrap-class="d-autocomplete-suggestion__wrap"
        view-class="d-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="d-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </d-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';
  import Emitter from 'element-ui/src/mixins/emitter';
  import DScrollbar from 'element-ui/packages/scrollbar';

  export default {
    components: { DScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'DAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('DAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.d-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
