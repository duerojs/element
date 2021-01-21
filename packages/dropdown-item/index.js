import DDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
DDropdownItem.install = function(Vue) {
  Vue.component(DDropdownItem.name, DDropdownItem);
};

export default DDropdownItem;
