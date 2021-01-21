## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `d-breadcrumb`, chaque `d-breadcrumb-item` est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type `String` appelé `separator` qui détermine le séparateur. Sa valeur par défaut est '/'.

```html
<d-breadcrumb separator="/">
  <d-breadcrumb-item :to="{ path: '/' }">Accueil</d-breadcrumb-item>
  <d-breadcrumb-item><a href="/">Gestion promotions</a></d-breadcrumb-item>
  <d-breadcrumb-item>Liste promotions</d-breadcrumb-item>
  <d-breadcrumb-item>Détail promotion</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<d-breadcrumb separator-class="d-icon-arrow-right">
  <d-breadcrumb-item :to="{ path: '/' }">Accueil</d-breadcrumb-item>
  <d-breadcrumb-item>Gestion promotions</d-breadcrumb-item>
  <d-breadcrumb-item>Liste promotions</d-breadcrumb-item>
  <d-breadcrumb-item>Détail promotion</d-breadcrumb-item>
</d-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique. | boolean | — | false |
