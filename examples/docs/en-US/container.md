## Container
Container components for scaffolding basic structure of the page:

`<d-container>`: wrapper container. When nested with a `<d-header>` or `<d-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<d-header>`: container for headers.

`<d-aside>`: container for side sections (usually a side nav).

`<d-main>`: container for main sections.

`<d-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<d-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<d-container>`.
:::

### Common layouts

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

### Example

:::demo
```html
<d-container style="height: 500px; border: 1px solid #eee">
  <d-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="d-icon-message"></i>Navigator One</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="d-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="d-icon-setting"></i>Navigator Three</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </d-aside>
  
  <d-container>
    <d-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="d-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </d-header>
    
    <d-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Address">
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
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
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `d-header` or `d-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |