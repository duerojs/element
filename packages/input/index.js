import DInput from './src/input';

/* istanbul ignore next */
DInput.install = function(Vue) {
  Vue.component(DInput.name, DInput);
};

export default DInput;
