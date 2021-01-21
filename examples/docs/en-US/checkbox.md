## Checkbox

A group of options for multiple choices.

### Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `d-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `d-checkbox` tag will become the description following the button of the checkbox.

```html
<template>
  <!-- `checked` should be true or false -->
  <d-checkbox v-model="checked">Option</d-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### Disabled State

Disabled state for checkbox.

:::demo Set the `disabled` attribute.

```html
<template>
  <d-checkbox v-model="checked1" disabled>Option</d-checkbox>
  <d-checkbox v-model="checked2" disabled>Option</d-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `d-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```html
<template>
  <d-checkbox-group v-model="checkList">
    <d-checkbox label="Option A"></d-checkbox>
    <d-checkbox label="Option B"></d-checkbox>
    <d-checkbox label="Option C"></d-checkbox>
    <d-checkbox label="disabled" disabled></d-checkbox>
    <d-checkbox label="selected and disabled" disabled></d-checkbox>
  </d-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
```
:::

### Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

```html
<template>
  <d-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</d-checkbox>
  <div style="margin: 15px 0;"></div>
  <d-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <d-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</d-checkbox>
  </d-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```
:::

### Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

:::demo

```html
<template>
  <d-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <d-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</d-checkbox>
  </d-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::

### Button style

Checkbox with button styles.

:::demo You just need to change `d-checkbox` element into `d-checkbox-button` element. We also provide `size` attribute.
```html
<template>
  <div>
    <d-checkbox-group v-model="checkboxGroup1">
      <d-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</d-checkbox-button>
    </d-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox-group v-model="checkboxGroup2" size="medium">
      <d-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</d-checkbox-button>
    </d-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox-group v-model="checkboxGroup3" size="small">
      <d-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</d-checkbox-button>
    </d-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <d-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</d-checkbox-button>
    </d-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Checkboxes.
```html
<template>
  <div>
    <d-checkbox v-model="checked1" label="Option1" border></d-checkbox>
    <d-checkbox v-model="checked2" label="Option2" border></d-checkbox>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox v-model="checked3" label="Option1" border size="medium"></d-checkbox>
    <d-checkbox v-model="checked4" label="Option2" border size="medium"></d-checkbox>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox-group v-model="checkboxGroup1" size="small">
      <d-checkbox label="Option1" border></d-checkbox>
      <d-checkbox label="Option2" border disabled></d-checkbox>
    </d-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <d-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <d-checkbox label="Option1" border></d-checkbox>
      <d-checkbox label="Option2" border></d-checkbox>
    </d-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
</script>
```
:::

### Checkbox Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | string / number / boolean | — | — |
| label     | value of the Checkbox when used inside a `checkbox-group`   | string / number / boolean   |       —        |     —    |
| true-label | value of the Checkbox if it's checked   | string / number    |       —        |     —    |
| false-label | value of the Checkbox if it's not checked   | string / number    |      —         |     —    |
| disabled  | whether the Checkbox is disabled   | boolean   |  — | false   |
| border  | whether to add a border around Checkbox  | boolean   | — | false   |
| size  | size of the Checkbox, only works when `border` is true  | string  | medium / small / mini | — |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the Checkbox is checked   | boolean   |  — | false   |
| indeterminate  | same as `indeterminate` in native checkbox | boolean   |  — | false   |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-group Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | array | — | — |
|size | size of checkbox buttons or bordered checkboxes | string | medium / small / mini | — |
| disabled  | whether the nesting checkboxes are disabled | boolean   | — | false   |
| min     | minimum number of checkbox checked   | number    |       —        |     —    |
| max     | maximum number of checkbox checked   | number    |       —        |     —    |
|text-color | font color when button is active | string   | — | #ffffff   |
|fill  | border and background color when button is active | string   | — | #409EFF   |

### Checkbox-group Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-button Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | value of the checkbox when used inside a `checkbox-group` | string / number / boolean  |       —        |     —    |
| true-label | value of the checkbox if it's checked | string / number | — |     —    |
| false-label | value of the checkbox if it's not checked | string / number    |      —         |     —    |
| disabled  | whether the checkbox is disabled | boolean   |  — | false   |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the checkbox is checked | boolean   |  — | false   |
