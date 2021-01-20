## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `d-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="d-icon-edit"></i>
<i class="d-icon-share"></i>
<i class="d-icon-delete"></i>
<el-button type="primary" icon="d-icon-search">Chercher</el-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'d-icon-' + name"></i>
      <span class="icon-name">{{'d-icon-' + name}}</span>
    </span>
  </li>
</ul>
