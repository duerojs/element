## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `d-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="d-icon-edit"></i>
<i class="d-icon-share"></i>
<i class="d-icon-delete"></i>
<el-button type="primary" icon="d-icon-search">搜索</el-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'d-icon-' + name"></i>
      <span class="icon-name">{{'d-icon-' + name}}</span>
    </span>
  </li>
</ul>
