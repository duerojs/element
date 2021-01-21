import DOption from '../select/src/option';

/* istanbul ignore next */
DOption.install = function(Vue) {
  Vue.component(DOption.name, DOption);
};

export default DOption;
