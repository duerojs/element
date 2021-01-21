import { createVue, triggerEvent, destroyVM, triggerKeyDown } from '../util';

describe('Dropdown', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <d-dropdown-item>黄金糕</d-dropdown-item>
            <d-dropdown-item>狮子头</d-dropdown-item>
            <d-dropdown-item>螺蛳粉</d-dropdown-item>
            <d-dropdown-item>双皮奶</d-dropdown-item>
            <d-dropdown-item>蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 400);
  });
  it('menu click', done => {
    const myCommandObject = { name: 'CommandC' };
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown">
            <d-dropdown-item command="a">黄金糕</d-dropdown-item>
            <d-dropdown-item command="b">狮子头</d-dropdown-item>
            <d-dropdown-item ref="commandC" :command="myCommandObject">螺蛳粉</d-dropdown-item>
            <d-dropdown-item command="d">双皮奶</d-dropdown-item>
            <d-dropdown-item command="e">蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `,
      data() {
        return {
          myCommandObject
        };
      }
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      vm.$refs.commandC.$el.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        expect(callback.calledWith(myCommandObject)).to.be.true;
        done();
      }, 300);
    }, 300);
  });
  it('trigger', done => {
    vm = createVue({
      template: `
        <d-dropdown trigger="click" ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单trigger click<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown">
            <d-dropdown-item>黄金糕</d-dropdown-item>
            <d-dropdown-item @click.native="handleClick">狮子头</d-dropdown-item>
            <d-dropdown-item>螺蛳粉</d-dropdown-item>
            <d-dropdown-item>双皮奶</d-dropdown-item>
            <d-dropdown-item>蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdownElm = vm.$el;
    let dropdown = vm.$refs.dropdown;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    dropdown.$nextTick(_ => {
      expect(dropdown.visible).to.not.true;
      triggerElm.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.be.true;
        done();
      }, 300);
    });
  });
  it('split button', done => {
    vm = createVue({
      template: `
        <d-dropdown split-button type="primary" ref="dropdown">
          更多菜单
          <d-dropdown-menu slot="dropdown" class="dropdown-test-split-button">
            <d-dropdown-item>黄金糕</d-dropdown-item>
            <d-dropdown-item>狮子头</d-dropdown-item>
            <d-dropdown-item>螺蛳粉</d-dropdown-item>
            <d-dropdown-item>双皮奶</d-dropdown-item>
            <d-dropdown-item>蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);

    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.querySelector('.d-dropdown__caret-button');
    var callback = sinon.spy();

    dropdown.$on('click', callback);
    dropdownElm.querySelector('.d-button').click();

    setTimeout(_ => {
      expect(callback.called).to.be.true;
    }, 300);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 300);
  });
  it('hide on click', done => {
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown" :hide-on-click="false">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown">
            <d-dropdown-item command="a">黄金糕</d-dropdown-item>
            <d-dropdown-item command="b">狮子头</d-dropdown-item>
            <d-dropdown-item ref="commandC" command="c">螺蛳粉</d-dropdown-item>
            <d-dropdown-item command="d">双皮奶</d-dropdown-item>
            <d-dropdown-item command="e">蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      vm.$refs.commandC.$el.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.true;
        expect(callback.calledWith('c')).to.be.true;
        done();
      }, 300);
    }, 300);
  });
  it('triggerElm keydown', done => {
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <d-dropdown-item>黄金糕</d-dropdown-item>
            <d-dropdown-item>狮子头</d-dropdown-item>
            <d-dropdown-item>螺蛳粉</d-dropdown-item>
            <d-dropdown-item>双皮奶</d-dropdown-item>
            <d-dropdown-item>蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    triggerKeyDown(triggerElm, 13); // enter
    setTimeout(() => {
      expect(dropdown.visible).to.be.true;
      triggerKeyDown(triggerElm, 27); // esc
      setTimeout(() => {
        expect(dropdown.visible).to.be.false;
        done();
      }, 300);
    }, 400);
  });
  it('dropdown menu keydown', done => {
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <d-dropdown-item command="a">黄金糕</d-dropdown-item>
            <d-dropdown-item command="b">狮子头</d-dropdown-item>
            <d-dropdown-item command="c">螺蛳粉</d-dropdown-item>
            <d-dropdown-item command="d">双皮奶</d-dropdown-item>
            <d-dropdown-item command="e">蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let dropdownMenu = dropdown.dropdownElm;

    triggerEvent(triggerElm, 'mouseenter');

    setTimeout(() => {
      expect(dropdown.visible).to.be.true;
      triggerKeyDown(dropdownMenu, 40); // down
      setTimeout(() => {
        triggerKeyDown(dropdownMenu, 13); // enter
        setTimeout(() => {
          expect(dropdown.visible).to.be.false;
          done();
        }, 100);
      }, 100);
    }, 300);
  });
  it('updatePopper', done => {
    vm = createVue({
      template: `
        <d-dropdown ref="dropdown">
          <span class="d-dropdown-link">
            下拉菜单<i class="d-icon-caret-bottom d-icon-right"></i>
          </span>
          <d-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <d-dropdown-item>黄金糕</d-dropdown-item>
            <d-dropdown-item>狮子头</d-dropdown-item>
            <d-dropdown-item>螺蛳粉</d-dropdown-item>
            <d-dropdown-item>双皮奶</d-dropdown-item>
            <d-dropdown-item>蚵仔煎</d-dropdown-item>
          </d-dropdown-menu>
        </d-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      const zIndex1 = document.querySelector('.d-dropdown-menu').style.zIndex;
      dropdown.broadcast('DDropdownMenu', 'updatePopper');
      setTimeout(() => {
        const zIndex2 = document.querySelector('.d-dropdown-menu').style.zIndex;
        expect(zIndex2 > zIndex1).to.be.true;
        done();
      }, 100);
    }, 300);
  });
});
