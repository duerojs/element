## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

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

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

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

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

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

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

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

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

