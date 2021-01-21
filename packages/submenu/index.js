import DSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
DSubmenu.install = function(Vue) {
  Vue.component(DSubmenu.name, DSubmenu);
};

export default DSubmenu;
