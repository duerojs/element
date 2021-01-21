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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-avatar:not(:last-child) {
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
      <el-radio v-model="radio" label="1">Option A</el-radio>
      <el-radio v-model="radio" label="2">Option B</el-radio>
    </d-row>
    <d-row class="demo-line">
      <el-radio-group v-model="radio1">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </d-row>
    <d-row class="demo-line">
      <el-radio v-model="radio2" label="1" border>Option A</el-radio>
      <el-radio v-model="radio2" label="2" border>Option B</el-radio>
    </d-row>
    <h4>Checkbox</h4>
    <d-row class="demo-line">
      <el-checkbox v-model="checked">Option</el-checkbox>
    </d-row>
    <d-row class="demo-line">
      <el-checkbox-group v-model="checked1">
        <el-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </d-row>
    <d-row class="demo-line">
      <el-checkbox v-model="checked2" label="Option1" border></el-checkbox>
    </d-row>
    <h4>Input</h4>
    <d-row style="width: 180px">
      <el-input placeholder="Please input" v-model="input"></el-input>
    </d-row>
    <h4>InputNumber</h4>
    <d-row>
      <el-input-number v-model="inputNumber" :min="1" :max="10"></el-input-number>
    </d-row>
    <h4>Select</h4>
    <d-row>
      <el-select v-model="selectValue" placeholder="Select">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </d-row>
    <h4>Cascader</h4>
    <d-row>
      <el-cascader :options="cascadeOptions" v-model="cascaderValue"></el-cascader>
    </d-row>
    <h4>Switch</h4>
    <d-row>
      <el-switch v-model="switchValue"></el-switch>
      <el-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </el-switch>
    </d-row>
    <h4>Slider</h4>
    <d-row style="width: 380px">
      <el-slider v-model="slider"></el-slider>
    </d-row>
    <h4>DatePicker</h4>
    <d-row>
      <el-date-picker v-model="datePicker" type="date"></el-date-picker>
    </d-row>
    <h4>Rate</h4>
    <d-row>
      <el-rate class="demo-line" v-model="rate"></el-rate>
      <el-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </el-rate>
    </d-row>
    <h4>Transfer</h4>
    <d-row>
      <el-transfer v-model="transfer" filterable :data="transferData">
        <d-button class="transfer-footer" slot="left-footer" size="small">Operation</d-button>
        <d-button class="transfer-footer" slot="right-footer" size="small">Operation</d-button>
      </el-transfer>
    </d-row>
    <h4>Table</h4>
    <d-row>
      <el-table :data="tableData" style="width: 70%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </d-row>
    <h4>Tag</h4>
    <d-row>
      <el-tag class="demo-item" closable>Tag One</el-tag>
      <el-tag class="demo-item" closable type="success">Tag Two</el-tag>
      <el-tag class="demo-item" closable type="info">Tag Three</el-tag>
      <el-tag class="demo-item" closable type="warning">Tag Four</el-tag>
      <el-tag class="demo-item" closable type="danger">Tag Five</el-tag>
    </d-row>
    <h4>Progress</h4>
    <d-row style="width: 380px">
      <el-progress :percentage="20"></el-progress>
      <el-progress :percentage="60" status="exception"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
    </d-row>
    <h4>Tree</h4>
    <d-row style="width: 380px">
      <el-tree :data="treeData" :props="defaultTreeProps" ></el-tree>
    </d-row>
    <h4>Pagination</h4>
    <d-row>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </d-row>
    <h4>Badge</h4>
    <d-row>
      <el-badge :value="12" class="demo-item">
        <d-button size="small">comments</d-button>
      </el-badge>
      <el-badge :value="3" class="demo-item">
        <d-button size="small">replies</d-button>
      </el-badge>
      <el-badge :value="1" class="demo-item" type="primary">
        <d-button size="small">comments</d-button>
      </el-badge>
      <el-badge :value="2" class="demo-item" type="warning">
        <d-button size="small">replies</d-button>
      </el-badge>
    </d-row>
    <h4>Alert</h4>
    <d-row style="width: 380px;">
      <el-alert class="demo-item" title="success alert" type="success" show-icon></el-alert>
      <el-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></el-alert>
      <el-alert class="demo-item" title="warning alert" type="warning" show-icon></el-alert>
      <el-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </el-alert>
    </d-row>
    <h4>Loading</h4>
    <d-row>
      <el-table :data="tableData" style="width: 90%" v-loading="true">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </d-row>
    <h4>Message</h4>
    <d-row>
      <div role="alert" class="demo-item el-message el-message--success el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon d-icon-success"></i><p class="el-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--warning el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon d-icon-warning"></i><p class="el-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--info el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon d-icon-info"></i><p class="el-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--error is-closable el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon d-icon-error"></i><p class="el-message__content">Oops, this is a error message.</p><i class="el-message__closeBtn d-icon-close"></i></div>
    </d-row>
    <h4>MessageBox</h4>
    <d-row>
      <div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close d-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__status d-icon-warning"></div><div class="el-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="el-message-box__input" style="display: none;"><div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" class="el-input__inner"><!----><!----><!----></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="el-message-box__btns"><button type="button" class="d-button d-button--default d-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="d-button d-button--default d-button--small d-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </d-row>
    <h4>Notification</h4>
    <d-row>
      <div role="alert" class="el-notification right" style="position: relative; left: 0;"><!----><div class="el-notification__group"><span class="el-notification__title">Notification</span><div class="el-notification__content"><div>This is a message </div></div><div class="el-notification__closeBtn d-icon-close"></div></div></div>
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
      <el-tabs v-model="tab" class="demo-item">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
      <el-tabs type="card" class="demo-item">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </d-row>
    <h4>Dialog</h4>
    <d-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="el-dialog" style="margin: 0"><div class="el-dialog__header"><span class="el-dialog__title">Tips</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close d-icon d-icon-close"></i></button></div><div class="el-dialog__body"><span>This is a message</span> </div><div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="d-button d-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="d-button d-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </d-row>
    <h4>Tooltip</h4>
    <d-row>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </d-row>
    <h4>Popover</h4>
    <d-row>
      <div role="tooltip" x-placement="top" id="el-popover-2936" aria-hidden="true" class="el-popover el-popper el-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="el-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </d-row>
    <h4>Card</h4>
    <d-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </el-card>
    </d-row>
    <h4>Carousel</h4>
    <d-row>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </d-row>
    <h4>Collapse</h4>
    <d-row>
      <el-collapse v-model="collapse">
        <el-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </el-collapse-item>
      </el-collapse>
    </d-row>
    <h4>Avatar</h4>
    <d-row class="demo-line avatar-demo">
      <el-avatar icon="d-icon-user-solid"/>
      <el-avatar> avatar </el-avatar>
      <el-avatar shape="square" fit="contain" :src="avatarData.url"></el-avatar>
      <el-avatar size="large"> large </el-avatar>
      <el-avatar size="medium"> medium </el-avatar>
      <el-avatar size="small"> small </el-avatar>
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
