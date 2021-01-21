import DTag from './src/tag';

/* istanbul ignore next */
DTag.install = function(Vue) {
  Vue.component(DTag.name, DTag);
};

export default DTag;
