import DAutocomplete from './src/autocomplete';

/* istanbul ignore next */
DAutocomplete.install = function(Vue) {
  Vue.component(DAutocomplete.name, DAutocomplete);
};

export default DAutocomplete;
