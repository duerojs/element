import DDropdown from './src/dropdown';

/* istanbul ignore next */
DDropdown.install = function(Vue) {
  Vue.component(DDropdown.name, DDropdown);
};

export default DDropdown;
