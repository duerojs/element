import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <d-col :span="12">
        </d-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('d-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <d-col :span="12">
        </d-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('d-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <d-col :span="12" :pull="3">
        </d-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('d-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <d-col :span="12" :push="3">
        </d-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('d-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <d-row :gutter="20">
          <d-col :span="12" ref="col">
          </d-col>
        </d-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <d-row :gutter="20">
          <d-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </d-col>
        </d-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('d-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('d-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('d-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('d-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('d-col-md-8')).to.be.true;
  });
});
