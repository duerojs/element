import DCollapse from './src/collapse';

/* istanbul ignore next */
DCollapse.install = function(Vue) {
  Vue.component(DCollapse.name, DCollapse);
};

export default DCollapse;

