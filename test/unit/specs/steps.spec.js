import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <d-steps>
        <d-step title="step1"></d-step>
        <d-step title="step2"></d-step>
        <d-step title="step3"></d-step>
      </d-steps>
    `);

    expect(vm.$el.querySelectorAll('.d-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <d-steps>
        <d-step title="step1"></d-step>
        <d-step title="step2"></d-step>
        <d-step title="step3"></d-step>
      </d-steps>
    `, true);

    const vm2 = createVue(`
      <d-steps :space="100">
        <d-step title="step1"></d-step>
        <d-step title="step2"></d-step>
        <d-step title="step3"></d-step>
        <d-step title="step4"></d-step>
      </d-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.d-step');
    const stepElm2 = vm2.$el.querySelector('.d-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <d-steps :active="1" process-status="error">
        <d-step title="step1"></d-step>
        <d-step title="step2"></d-step>
        <d-step title="step3"></d-step>
      </d-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.d-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <d-steps :active="1" :process-status="processStatus">
          <d-step title="abc"></d-step>
          <d-step title="abc2"></d-step>
        </d-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.d-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.d-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <d-steps :active="1" finish-status="error">
        <d-step title="abc"></d-step>
        <d-step title="abc2"></d-step>
      </d-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.d-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <d-steps :active="active" finish-status="error">
          <d-step title="abc"></d-step>
          <d-step title="abc2"></d-step>
        </d-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.d-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.d-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <d-steps direction="vertical">
        <d-step title="aaa"></d-step>
        <d-step title="bbb"></d-step>
      </d-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <d-steps direction="vertical" :space="200">
        <d-step title="aaa"></d-step>
        <d-step title="bbb"></d-step>
      </d-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.d-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <d-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <d-step title="step1"></d-step>
        <d-step title="step2" status="error"></d-step>
        <d-step title="step3"></d-step>
      </d-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.d-step:nth-child(2) .d-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.d-step:nth-child(3) .d-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
