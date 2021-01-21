## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `d-fade-in-linear` and `d-fade-in`.
```html
<template>
  <div>
    <d-button @click="show = !show">Click Me</d-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="d-fade-in-linear">
        <div v-show="show" class="transition-box">.d-fade-in-linear</div>
      </transition>
      <transition name="d-fade-in">
        <div v-show="show" class="transition-box">.d-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom

:::demo `d-zoom-in-center`, `d-zoom-in-top` and `d-zoom-in-bottom` are provided.
```html
<template>
  <div>
    <d-button @click="show2 = !show2">Click Me</d-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="d-zoom-in-center">
        <div v-show="show2" class="transition-box">.d-zoom-in-center</div>
      </transition>

      <transition name="d-zoom-in-top">
        <div v-show="show2" class="transition-box">.d-zoom-in-top</div>
      </transition>

      <transition name="d-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.d-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse

For collapse effect, use the `d-collapse-transition` component.

:::demo
```html
<template>
  <div>
    <d-button @click="show3 = !show3">Click Me</d-button>

    <div style="margin-top: 20px; height: 200px;">
      <d-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">d-collapse-transition</div>
          <div class="transition-box">d-collapse-transition</div>
        </div>
      </d-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### On demand

```js
// fade/zoom
import 'element-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
