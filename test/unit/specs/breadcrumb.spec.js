import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <d-breadcrumb separator=">">
        <d-breadcrumb-item to="/">首页</d-breadcrumb-item>
        <d-breadcrumb-item>活动管理</d-breadcrumb-item>
        <d-breadcrumb-item>活动列表</d-breadcrumb-item>
        <d-breadcrumb-item>活动详情</d-breadcrumb-item>
      </d-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.d-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
