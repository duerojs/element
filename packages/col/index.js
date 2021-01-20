import DCol from './src/col';

/* istanbul ignore next */
DCol.install = function(Vue) {
  Vue.component(DCol.name, DCol);
};

export default DCol;

