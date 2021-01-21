import DTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
DTimelineItem.install = function(Vue) {
  Vue.component(DTimelineItem.name, DTimelineItem);
};

export default DTimelineItem;
