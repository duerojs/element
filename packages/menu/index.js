import DMenu from './src/menu';

/* istanbul ignore next */
DMenu.install = function(Vue) {
  Vue.component(DMenu.name, DMenu);
};

export default DMenu;
