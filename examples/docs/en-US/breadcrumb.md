## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `d-breadcrumb`, each `d-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<d-breadcrumb separator="/">
  <d-breadcrumb-item :to="{ path: '/' }">homepage</d-breadcrumb-item>
  <d-breadcrumb-item><a href="/">promotion management</a></d-breadcrumb-item>
  <d-breadcrumb-item>promotion list</d-breadcrumb-item>
  <d-breadcrumb-item>promotion detail</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<d-breadcrumb separator-class="d-icon-arrow-right">
  <d-breadcrumb-item :to="{ path: '/' }">homepage</d-breadcrumb-item>
  <d-breadcrumb-item>promotion management</d-breadcrumb-item>
  <d-breadcrumb-item>promotion list</d-breadcrumb-item>
  <d-breadcrumb-item>promotion detail</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





