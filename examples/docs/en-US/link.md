## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <d-link href="https://element.eleme.io" target="_blank">default</d-link>
  <d-link type="primary">primary</d-link>
  <d-link type="success">success</d-link>
  <d-link type="warning">warning</d-link>
  <d-link type="danger">danger</d-link>
  <d-link type="info">info</d-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <d-link disabled>default</d-link>
  <d-link type="primary" disabled>primary</d-link>
  <d-link type="success" disabled>success</d-link>
  <d-link type="warning" disabled>warning</d-link>
  <d-link type="danger" disabled>danger</d-link>
  <d-link type="info" disabled>info</d-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <d-link :underline="false">Without Underline</d-link>
  <d-link>With Underline</d-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <d-link icon="d-icon-edit">Edit</d-link>
  <d-link>Check<i class="d-icon-view d-icon--right"></i> </d-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
