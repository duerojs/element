import DDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
DDropdownMenu.install = function(Vue) {
  Vue.component(DDropdownMenu.name, DDropdownMenu);
};

export default DDropdownMenu;
