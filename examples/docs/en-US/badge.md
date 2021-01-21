## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<d-badge :value="12" class="item">
  <d-button size="small">comments</d-button>
</d-badge>
<d-badge :value="3" class="item">
  <d-button size="small">replies</d-button>
</d-badge>
<d-badge :value="1" class="item" type="primary">
  <d-button size="small">comments</d-button>
</d-badge>
<d-badge :value="2" class="item" type="warning">
  <d-button size="small">replies</d-button>
</d-badge>

<d-dropdown trigger="click">
  <span class="d-dropdown-link">
    Click Me<i class="d-icon-caret-bottom d-icon--right"></i>
  </span>
  <d-dropdown-menu slot="dropdown">
    <d-dropdown-item class="clearfix">
      comments
      <d-badge class="mark" :value="12" />
    </d-dropdown-item>
    <d-dropdown-item class="clearfix">
      replies
      <d-badge class="mark" :value="3" />
    </d-dropdown-item>
  </d-dropdown-menu>
</d-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<d-badge :value="200" :max="99" class="item">
  <d-button size="small">comments</d-button>
</d-badge>
<d-badge :value="100" :max="10" class="item">
  <d-button size="small">replies</d-button>
</d-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<d-badge value="new" class="item">
  <d-button size="small">comments</d-button>
</d-badge>
<d-badge value="hot" class="item">
  <d-button size="small">replies</d-button>
</d-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<d-badge is-dot class="item">query</d-badge>
<d-badge is-dot class="item">
  <d-button class="share-button" icon="d-icon-share" type="primary"></d-button>
</d-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
