import DTable from './src/table';

/* istanbul ignore next */
DTable.install = function(Vue) {
  Vue.component(DTable.name, DTable);
};

export default DTable;
