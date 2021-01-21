import DTableColumn from '../table/src/table-column';

/* istanbul ignore next */
DTableColumn.install = function(Vue) {
  Vue.component(DTableColumn.name, DTableColumn);
};

export default DTableColumn;
