import DOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
DOptionGroup.install = function(Vue) {
  Vue.component(DOptionGroup.name, DOptionGroup);
};

export default DOptionGroup;
