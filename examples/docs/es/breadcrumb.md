## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `d-breadcrumb`, cada `d-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. El valor por defecto es '/'.

```html
<d-breadcrumb separator="/">
  <d-breadcrumb-item :to="{ path: '/' }">homepage</d-breadcrumb-item>
  <d-breadcrumb-item><a href="/">promotion management</a></d-breadcrumb-item>
  <d-breadcrumb-item>promotion list</d-breadcrumb-item>
  <d-breadcrumb-item>promotion detail</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<d-breadcrumb separator-class="d-icon-arrow-right">
  <d-breadcrumb-item :to="{ path: '/' }">homepage</d-breadcrumb-item>
  <d-breadcrumb-item>promotion management</d-breadcrumb-item>
  <d-breadcrumb-item>promotion list</d-breadcrumb-item>
  <d-breadcrumb-item>promotion detail</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





