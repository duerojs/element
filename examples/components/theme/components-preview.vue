<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .d-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .d-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .d-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <d-row class="demo-line">
      <d-button>Default</d-button>
      <d-button type="primary">Primary</d-button>
      <d-button type="success">Success</d-button>
      <d-button type="info">Info</d-button>
      <d-button type="warning">Warning</d-button>
      <d-button type="danger">Danger</d-button>
    </d-row>
    <d-row class="demo-line">
      <d-button plain>Plain</d-button>
      <d-button type="primary" plain>Primary</d-button>
      <d-button type="success" plain>Success</d-button>
      <d-button type="info" plain>Info</d-button>
      <d-button type="warning" plain>Warning</d-button>
      <d-button type="danger" plain>Danger</d-button>
    </d-row>
    <d-row class="demo-line">
      <d-button round>Round</d-button>
      <d-button type="primary" round>Primary</d-button>
      <d-button type="success" round>Success</d-button>
      <d-button type="info" round>Info</d-button>
      <d-button type="warning" round>Warning</d-button>
      <d-button type="danger" round>Danger</d-button>
    </d-row>
    <d-row class="demo-line">
      <d-button icon="d-icon-search" circle></d-button>
      <d-button type="primary" icon="d-icon-edit" circle></d-button>
      <d-button type="success" icon="d-icon-check" circle></d-button>
      <d-button type="info" icon="d-icon-message" circle></d-button>
      <d-button type="warning" icon="d-icon-star-off" circle></d-button>
      <d-button type="danger" icon="d-icon-delete" circle></d-button>
    </d-row>
    <d-row class="demo-line">
      <d-button>Default</d-button>
      <d-button size="medium">Medium</d-button>
      <d-button size="small">Small</d-button>
      <d-button size="mini">Mini</d-button>
    </d-row>
    <h4>Radio</h4>
    <d-row class="demo-line">
      <d-radio v-model="radio" label="1">Option A</d-radio>
      <d-radio v-model="radio" label="2">Option B</d-radio>
    </d-row>
    <d-row class="demo-line">
      <d-radio-group v-model="radio1">
        <d-radio-button label="New York"></d-radio-button>
        <d-radio-button label="Washington"></d-radio-button>
        <d-radio-button label="Los Angeles"></d-radio-button>
        <d-radio-button label="Chicago"></d-radio-button>
      </d-radio-group>
    </d-row>
    <d-row class="demo-line">
      <d-radio v-model="radio2" label="1" border>Option A</d-radio>
      <d-radio v-model="radio2" label="2" border>Option B</d-radio>
    </d-row>
    <h4>Checkbox</h4>
    <d-row class="demo-line">
      <d-checkbox v-model="checked">Option</d-checkbox>
    </d-row>
    <d-row class="demo-line">
      <d-checkbox-group v-model="checked1">
        <d-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</d-checkbox-button>
      </d-checkbox-group>
    </d-row>
    <d-row class="demo-line">
      <d-checkbox v-model="checked2" label="Option1" border></d-checkbox>
    </d-row>
    <h4>Input</h4>
    <d-row style="width: 180px">
      <d-input placeholder="Please input" v-model="input"></d-input>
    </d-row>
    <h4>InputNumber</h4>
    <d-row>
      <d-input-number v-model="inputNumber" :min="1" :max="10"></d-input-number>
    </d-row>
    <h4>Select</h4>
    <d-row>
      <d-select v-model="selectValue" placeholder="Select">
        <d-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></d-option>
      </d-select>
    </d-row>
    <h4>Cascader</h4>
    <d-row>
      <d-cascader :options="cascadeOptions" v-model="cascaderValue"></d-cascader>
    </d-row>
    <h4>Switch</h4>
    <d-row>
      <d-switch v-model="switchValue"></d-switch>
      <d-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </d-switch>
    </d-row>
    <h4>Slider</h4>
    <d-row style="width: 380px">
      <d-slider v-model="slider"></d-slider>
    </d-row>
    <h4>DatePicker</h4>
    <d-row>
      <d-date-picker v-model="datePicker" type="date"></d-date-picker>
    </d-row>
    <h4>Rate</h4>
    <d-row>
      <d-rate class="demo-line" v-model="rate"></d-rate>
      <d-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </d-rate>
    </d-row>
    <h4>Transfer</h4>
    <d-row>
      <d-transfer v-model="transfer" filterable :data="transferData">
        <d-button class="transfer-footer" slot="left-footer" size="small">Operation</d-button>
        <d-button class="transfer-footer" slot="right-footer" size="small">Operation</d-button>
      </d-transfer>
    </d-row>
    <h4>Table</h4>
    <d-row>
      <d-table :data="tableData" style="width: 70%">
        <d-table-column prop="date" label="Date" width="180"></d-table-column>
        <d-table-column prop="name" label="Name" width="180"></d-table-column>
        <d-table-column prop="address" label="Address"></d-table-column>
      </d-table>
    </d-row>
    <h4>Tag</h4>
    <d-row>
      <d-tag class="demo-item" closable>Tag One</d-tag>
      <d-tag class="demo-item" closable type="success">Tag Two</d-tag>
      <d-tag class="demo-item" closable type="info">Tag Three</d-tag>
      <d-tag class="demo-item" closable type="warning">Tag Four</d-tag>
      <d-tag class="demo-item" closable type="danger">Tag Five</d-tag>
    </d-row>
    <h4>Progress</h4>
    <d-row style="width: 380px">
      <d-progress :percentage="20"></d-progress>
      <d-progress :percentage="60" status="exception"></d-progress>
      <d-progress :percentage="100" status="success"></d-progress>
    </d-row>
    <h4>Tree</h4>
    <d-row style="width: 380px">
      <d-tree :data="treeData" :props="defaultTreeProps" ></d-tree>
    </d-row>
    <h4>Pagination</h4>
    <d-row>
      <d-pagination layout="prev, pager, next" :total="1000"></d-pagination>
    </d-row>
    <h4>Badge</h4>
    <d-row>
      <d-badge :value="12" class="demo-item">
        <d-button size="small">comments</d-button>
      </d-badge>
      <d-badge :value="3" class="demo-item">
        <d-button size="small">replies</d-button>
      </d-badge>
      <d-badge :value="1" class="demo-item" type="primary">
        <d-button size="small">comments</d-button>
      </d-badge>
      <d-badge :value="2" class="demo-item" type="warning">
        <d-button size="small">replies</d-button>
      </d-badge>
    </d-row>
    <h4>Alert</h4>
    <d-row style="width: 380px;">
      <d-alert class="demo-item" title="success alert" type="success" show-icon></d-alert>
      <d-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></d-alert>
      <d-alert class="demo-item" title="warning alert" type="warning" show-icon></d-alert>
      <d-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </d-alert>
    </d-row>
    <h4>Loading</h4>
    <d-row>
      <d-table :data="tableData" style="width: 90%" v-loading="true">
        <d-table-column prop="date" label="Date" width="180"></d-table-column>
        <d-table-column prop="name" label="Name" width="180"></d-table-column>
        <d-table-column prop="address" label="Address"></d-table-column>
      </d-table>
    </d-row>
    <h4>Message</h4>
    <d-row>
      <div role="alert" class="demo-item d-message d-message--success d-message-fade-leave-active d-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="d-message__icon d-icon-success"></i><p class="d-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item d-message d-message--warning d-message-fade-leave-active d-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="d-message__icon d-icon-warning"></i><p class="d-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item d-message d-message--info d-message-fade-leave-active d-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="d-message__icon d-icon-info"></i><p class="d-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item d-message d-message--error is-closable d-message-fade-leave-active d-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="d-message__icon d-icon-error"></i><p class="d-message__content">Oops, this is a error message.</p><i class="d-message__closeBtn d-icon-close"></i></div>
    </d-row>
    <h4>MessageBox</h4>
    <d-row>
      <div class="d-message-box"><div class="d-message-box__header"><div class="d-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="d-message-box__headerbtn"><i class="d-message-box__close d-icon-close"></i></button></div><div class="d-message-box__content"><div class="d-message-box__status d-icon-warning"></div><div class="d-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="d-message-box__input" style="display: none;"><div class="d-input"><!----><input type="text" autocomplete="off" placeholder="" class="d-input__inner"><!----><!----><!----></div><div class="d-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="d-message-box__btns"><button type="button" class="d-button d-button--default d-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="d-button d-button--default d-button--small d-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </d-row>
    <h4>Notification</h4>
    <d-row>
      <div role="alert" class="d-notification right" style="position: relative; left: 0;"><!----><div class="d-notification__group"><span class="d-notification__title">Notification</span><div class="d-notification__content"><div>This is a message </div></div><div class="d-notification__closeBtn d-icon-close"></div></div></div>
    </d-row>
    <h4>Menu</h4>
    <d-row>
      <d-menu :default-active="menu" class="d-menu-demo" mode="horizontal">
        <d-menu-item index="1">Processing Center</d-menu-item>
        <d-submenu index="2">
          <template slot="title">Workspace</template>
          <d-menu-item index="2-1">item one</d-menu-item>
          <d-menu-item index="2-2">item two</d-menu-item>
          <d-menu-item index="2-3">item three</d-menu-item>
          <d-submenu index="2-4">
            <template slot="title">item four</template>
            <d-menu-item index="2-4-1">item one</d-menu-item>
            <d-menu-item index="2-4-2">item two</d-menu-item>
            <d-menu-item index="2-4-3">item three</d-menu-item>
          </d-submenu>
        </d-submenu>
        <d-menu-item index="3" disabled>Info</d-menu-item>
        <d-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </d-menu-item>
      </d-menu>
      <d-menu
        default-active="2"
        class="demo-line"
      >
        <d-submenu index="1">
          <template slot="title">
            <i class="d-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <d-menu-item-group title="Group One">
            <d-menu-item index="1-1">item one</d-menu-item>
            <d-menu-item index="1-2">item one</d-menu-item>
          </d-menu-item-group>
          <d-menu-item-group title="Group Two">
            <d-menu-item index="1-3">item three</d-menu-item>
          </d-menu-item-group>
          <d-submenu index="1-4">
            <template slot="title">item four</template>
            <d-menu-item index="1-4-1">item one</d-menu-item>
          </d-submenu>
        </d-submenu>
        <d-menu-item index="2">
          <i class="d-icon-menu"></i>
          <span>Navigator Two</span>
        </d-menu-item>
        <d-menu-item index="3" disabled>
          <i class="d-icon-document"></i>
          <span>Navigator Three</span>
        </d-menu-item>
        <d-menu-item index="4">
          <i class="d-icon-setting"></i>
          <span>Navigator Four</span>
        </d-menu-item>
      </d-menu>
    </d-row>
    <h4>Tabs</h4>
    <d-row>
      <d-tabs v-model="tab" class="demo-item">
        <d-tab-pane label="User" name="first">User</d-tab-pane>
        <d-tab-pane label="Config" name="second">Config</d-tab-pane>
        <d-tab-pane label="Role" name="third">Role</d-tab-pane>
        <d-tab-pane label="Task" name="fourth">Task</d-tab-pane>
      </d-tabs>
      <d-tabs type="card" class="demo-item">
        <d-tab-pane label="User">User</d-tab-pane>
        <d-tab-pane label="Config">Config</d-tab-pane>
        <d-tab-pane label="Role">Role</d-tab-pane>
        <d-tab-pane label="Task">Task</d-tab-pane>
      </d-tabs>
    </d-row>
    <h4>Dialog</h4>
    <d-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="d-dialog" style="margin: 0"><div class="d-dialog__header"><span class="d-dialog__title">Tips</span><button type="button" aria-label="Close" class="d-dialog__headerbtn"><i class="d-dialog__close d-icon d-icon-close"></i></button></div><div class="d-dialog__body"><span>This is a message</span> </div><div class="d-dialog__footer"><span class="dialog-footer"><button type="button" class="d-button d-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="d-button d-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </d-row>
    <h4>Tooltip</h4>
    <d-row>
      <div role="tooltip" x-placement="top" class="d-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="d-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </d-row>
    <h4>Popover</h4>
    <d-row>
      <div role="tooltip" x-placement="top" id="d-popover-2936" aria-hidden="true" class="d-popover d-popper d-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="d-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </d-row>
    <h4>Card</h4>
    <d-row>
      <d-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </d-card>
    </d-row>
    <h4>Carousel</h4>
    <d-row>
      <d-carousel height="150px">
        <d-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </d-carousel-item>
      </d-carousel>
    </d-row>
    <h4>Collapse</h4>
    <d-row>
      <d-collapse v-model="collapse">
        <d-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </d-collapse-item>
        <d-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </d-collapse-item>
      </d-collapse>
    </d-row>
    <h4>Avatar</h4>
    <d-row class="demo-line avatar-demo">
      <d-avatar icon="d-icon-user-solid"/>
      <d-avatar> avatar </d-avatar>
      <d-avatar shape="square" fit="contain" :src="avatarData.url"></d-avatar>
      <d-avatar size="large"> large </d-avatar>
      <d-avatar size="medium"> medium </d-avatar>
      <d-avatar size="small"> small </d-avatar>
    </d-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
