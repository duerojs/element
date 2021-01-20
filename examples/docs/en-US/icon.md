## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `d-icon-iconName`.

:::demo

```html
<i class="d-icon-edit"></i>
<i class="d-icon-share"></i>
<i class="d-icon-delete"></i>
<d-button type="primary" icon="d-icon-search">Search</d-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'d-icon-' + name"></i>
      <span class="icon-name">{{'d-icon-' + name}}</span>
    </span>
  </li>
</ul>
