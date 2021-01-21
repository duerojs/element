import DBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
DBreadcrumb.install = function(Vue) {
  Vue.component(DBreadcrumb.name, DBreadcrumb);
};

export default DBreadcrumb;
