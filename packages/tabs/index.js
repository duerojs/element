import DTabs from './src/tabs';

/* istanbul ignore next */
DTabs.install = function(Vue) {
  Vue.component(DTabs.name, DTabs);
};

export default DTabs;
