import DForm from './src/form';

/* istanbul ignore next */
DForm.install = function(Vue) {
  Vue.component(DForm.name, DForm);
};

export default DForm;
