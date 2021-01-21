## Transitions

Vous pouvez utiliser les transitions d'Element directement. Mais avant ça, merci de lire la [documentation](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Il y a deux effets de fading: `d-fade-in-linear` et `d-fade-in`.
```html
<template>
  <div>
    <d-button @click="show = !show">Cliquez ici</d-button>

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

### Zoom

:::demo `d-zoom-in-center`, `d-zoom-in-top` et `d-zoom-in-bottom` sont fournis.
```html
<template>
  <div>
    <d-button @click="show2 = !show2">Cliquez ici</d-button>

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


### Collapse

Pour l'effet collapse, utilisez le composant `d-collapse-transition`.

:::demo
```html
<template>
  <div>
    <d-button @click="show3 = !show3">Cliquez ici</d-button>

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

### À la demande

```js
// fade/zoom
import 'element-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
