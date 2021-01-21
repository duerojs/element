import DCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
DCarouselItem.install = function(Vue) {
  Vue.component(DCarouselItem.name, DCarouselItem);
};

export default DCarouselItem;
