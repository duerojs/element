## Link

Texto con hipervínculo

### Básico

Texto con hipervínculo básico
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

### Deshabilitar

Deshabilita el hipervínculo
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

### Subrayado

Subrayado del hipervínculo
:::demo

```html
<div>
  <d-link :underline="false">Without Underline</d-link>
  <d-link>With Underline</d-link>
</div>
```

:::

### Icono

Hipervínculo con icono
:::demo

```html
<div>
  <d-link icon="d-icon-edit">Edit</d-link>
  <d-link>Check<i class="d-icon-view d-icon--right"></i> </d-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervínculo estará subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervínculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
