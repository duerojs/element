import DMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
DMenuItem.install = function(Vue) {
  Vue.component(DMenuItem.name, DMenuItem);
};

export default DMenuItem;
