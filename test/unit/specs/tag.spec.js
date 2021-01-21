import { createTest, createVue, destroyVM } from '../util';
import Tag from 'packages/tag';

describe('Tag', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
      <d-tag></d-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('d-tag')).to.be.true;
    expect(vm.$el.classList.contains('d-tag__close')).to.be.false;
    expect(vm.$el.classList.contains('is-hit')).to.be.false;
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('text', () => {
    vm = createVue({
      template: `
      <d-tag>标签</d-tag>
      `
    }, true);
    expect(vm.$el.textContent.length).to.be.at.least(2);
  });

  it('type', () => {
    vm = createVue({
      template: `
      <d-tag type="primary"></d-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('d-tag--primary')).to.be.true;
  });

  it('hit', () => {
    vm = createVue({
      template: `
      <d-tag hit></d-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('is-hit')).to.be.true;
  });

  it('closable', done => {
    vm = createVue({
      template: `
      <d-tag closable @close="handleClose">关闭标签</d-tag>
      `,
      data() {
        return {
          isClose: false
        };
      },
      methods: {
        handleClose() {
          this.isClose = true;
        }
      }
    }, true);
    var closeBtn = vm.$el.querySelector('.d-tag .d-tag__close');
    expect(closeBtn).to.exist;
    closeBtn.click();
    vm.$nextTick(_ => {
      expect(vm.isClose).to.true;
      done();
    });
  });

  it('closeTransition', () => {
    vm = createVue({
      template: `
      <d-tag closable closeTransition></d-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('color', () => {
    vm = createVue({
      template: `
      <d-tag ref="tag" color="rgb(0, 0, 0)"></d-tag>
      `
    }, true);
    expect(vm.$el.style.backgroundColor).to.equal('rgb(0, 0, 0)');
  });

  it('click', done => {
    vm = createVue({
      template: `
      <d-tag ref="tag" @click="handleClick">点击标签</d-tag>
      `,
      data() {
        return {
          clicksCount: 0
        };
      },
      methods: {
        handleClick() {
          this.clicksCount = this.clicksCount + 1;
        }
      }
    }, true);

    let tag = vm.$refs.tag;
    tag.$el.click();

    setTimeout(_ => {
      expect(vm.clicksCount).to.be.equal(1);
      done();
    }, 20);
  });

  it('theme', () => {
    vm = createTest(Tag, { effect: 'dark' }, true);
    const el = vm.$el;
    expect(el.className).to.includes('d-tag--dark');
    expect(el.className).to.not.includes('d-tag--light');
    expect(el.className).to.not.includes('d-tag--plain');
  });
});
