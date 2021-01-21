import DProgress from './src/progress';

/* istanbul ignore next */
DProgress.install = function(Vue) {
  Vue.component(DProgress.name, DProgress);
};

export default DProgress;
