## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<d-container>`：外层容器。当子元素中包含 `<d-header>` 或 `<d-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<d-header>`：顶栏容器。

`<d-aside>`：侧边栏容器。

`<d-main>`：主要区域容器。

`<d-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<d-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<d-container>`。
:::

### 常见页面布局

:::demo
```html
<d-container>
  <d-header>Header</d-header>
  <d-main>Main</d-main>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-main>Main</d-main>
  <d-footer>Footer</d-footer>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-main>Main</d-main>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-container>
    <d-aside width="200px">Aside</d-aside>
    <d-main>Main</d-main>
  </d-container>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-container>
    <d-aside width="200px">Aside</d-aside>
    <d-container>
      <d-main>Main</d-main>
      <d-footer>Footer</d-footer>
    </d-container>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-container>
    <d-header>Header</d-header>
    <d-main>Main</d-main>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-container>
    <d-header>Header</d-header>
    <d-main>Main</d-main>
    <d-footer>Footer</d-footer>
  </d-container>
</d-container>

<style>
  .d-header, .d-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .d-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .d-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .d-container {
    margin-bottom: 40px;
  }
  
  .d-container:nth-child(5) .d-aside,
  .d-container:nth-child(6) .d-aside {
    line-height: 260px;
  }
  
  .d-container:nth-child(7) .d-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<d-container style="height: 500px; border: 1px solid #eee">
  <d-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <d-menu :default-openeds="['1', '3']">
      <d-submenu index="1">
        <template slot="title"><i class="d-icon-message"></i>导航一</template>
        <d-menu-item-group>
          <template slot="title">分组一</template>
          <d-menu-item index="1-1">选项1</d-menu-item>
          <d-menu-item index="1-2">选项2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="分组2">
          <d-menu-item index="1-3">选项3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="1-4">
          <template slot="title">选项4</template>
          <d-menu-item index="1-4-1">选项4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
      <d-submenu index="2">
        <template slot="title"><i class="d-icon-menu"></i>导航二</template>
        <d-menu-item-group>
          <template slot="title">分组一</template>
          <d-menu-item index="2-1">选项1</d-menu-item>
          <d-menu-item index="2-2">选项2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="分组2">
          <d-menu-item index="2-3">选项3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="2-4">
          <template slot="title">选项4</template>
          <d-menu-item index="2-4-1">选项4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
      <d-submenu index="3">
        <template slot="title"><i class="d-icon-setting"></i>导航三</template>
        <d-menu-item-group>
          <template slot="title">分组一</template>
          <d-menu-item index="3-1">选项1</d-menu-item>
          <d-menu-item index="3-2">选项2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="分组2">
          <d-menu-item index="3-3">选项3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="3-4">
          <template slot="title">选项4</template>
          <d-menu-item index="3-4-1">选项4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
    </d-menu>
  </d-aside>
  
  <d-container>
    <d-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="d-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </d-header>
    
    <d-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </d-main>
  </d-container>
</d-container>

<style>
  .d-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .d-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `d-header` 或 `d-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |