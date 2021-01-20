## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<d-row>
  <d-button>Default</d-button>
  <d-button type="primary">Primary</d-button>
  <d-button type="success">Success</d-button>
  <d-button type="info">Info</d-button>
  <d-button type="warning">Warning</d-button>
  <d-button type="danger">Danger</d-button>
</d-row>

<d-row>
  <d-button plain>Plain</d-button>
  <d-button type="primary" plain>Primary</d-button>
  <d-button type="success" plain>Success</d-button>
  <d-button type="info" plain>Info</d-button>
  <d-button type="warning" plain>Warning</d-button>
  <d-button type="danger" plain>Danger</d-button>
</d-row>

<d-row>
  <d-button round>Round</d-button>
  <d-button type="primary" round>Primary</d-button>
  <d-button type="success" round>Success</d-button>
  <d-button type="info" round>Info</d-button>
  <d-button type="warning" round>Warning</d-button>
  <d-button type="danger" round>Danger</d-button>
</d-row>

<d-row>
  <d-button icon="d-icon-search" circle></d-button>
  <d-button type="primary" icon="d-icon-edit" circle></d-button>
  <d-button type="success" icon="d-icon-check" circle></d-button>
  <d-button type="info" icon="d-icon-message" circle></d-button>
  <d-button type="warning" icon="d-icon-star-off" circle></d-button>
  <d-button type="danger" icon="d-icon-delete" circle></d-button>
</d-row>
```
:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<d-row>
  <d-button disabled>Default</d-button>
  <d-button type="primary" disabled>Primary</d-button>
  <d-button type="success" disabled>Success</d-button>
  <d-button type="info" disabled>Info</d-button>
  <d-button type="warning" disabled>Warning</d-button>
  <d-button type="danger" disabled>Danger</d-button>
</d-row>

<d-row>
  <d-button plain disabled>Plain</d-button>
  <d-button type="primary" plain disabled>Primary</d-button>
  <d-button type="success" plain disabled>Success</d-button>
  <d-button type="info" plain disabled>Info</d-button>
  <d-button type="warning" plain disabled>Warning</d-button>
  <d-button type="danger" plain disabled>Danger</d-button>
</d-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<d-button type="text">Text Button</d-button>
<d-button type="text" disabled>Text Button</d-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<d-button type="primary" icon="d-icon-edit"></d-button>
<d-button type="primary" icon="d-icon-share"></d-button>
<d-button type="primary" icon="d-icon-delete"></d-button>
<d-button type="primary" icon="d-icon-search">Search</d-button>
<d-button type="primary">Upload<i class="d-icon-upload d-icon-right"></i></d-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<d-button-group>` para agrupar sus botones.

```html
<d-button-group>
  <d-button type="primary" icon="d-icon-arrow-left">Previous Page</d-button>
  <d-button type="primary">Next Page<i class="d-icon-arrow-right d-icon-right"></i></d-button>
</d-button-group>
<d-button-group>
  <d-button type="primary" icon="d-icon-edit"></d-button>
  <d-button type="primary" icon="d-icon-share"></d-button>
  <d-button type="primary" icon="d-icon-delete"></d-button>
</d-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<d-button type="primary" :loading="true">Loading</d-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<d-row>
  <d-button>Default</d-button>
  <d-button size="medium">Medium</d-button>
  <d-button size="small">Small</d-button>
  <d-button size="mini">Mini</d-button>
</d-row>
<d-row>
  <d-button round>Default</d-button>
  <d-button size="medium" round>Medium</d-button>
  <d-button size="small" round>Small</d-button>
  <d-button size="mini" round>Mini</d-button>
</d-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

