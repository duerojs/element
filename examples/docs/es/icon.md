## Icon

Element proporciona un conjunto de iconos propios.

### Uso básico

Simplemente asigna el nombre de la clase a `d-icon-iconName`.

:::demo

```html
<i class="d-icon-edit"></i>
<i class="d-icon-share"></i>
<i class="d-icon-delete"></i>
<el-button type="primary" icon="d-icon-search">Search</el-button>

```
:::

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'d-icon-' + name"></i>
      <span class="icon-name">{{'d-icon-' + name}}</span>
    </span>
  </li>
</ul>
