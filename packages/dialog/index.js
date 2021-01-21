import DDialog from './src/component';

/* istanbul ignore next */
DDialog.install = function(Vue) {
  Vue.component(DDialog.name, DDialog);
};

export default DDialog;
