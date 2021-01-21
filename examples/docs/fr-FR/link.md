## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <d-link href="https://element.eleme.io" target="_blank">défaut</d-link>
  <d-link type="primary">primaire</d-link>
  <d-link type="success">succès</d-link>
  <d-link type="warning">avertissement</d-link>
  <d-link type="danger">danger</d-link>
  <d-link type="info">info</d-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <d-link disabled>défaut</d-link>
  <d-link type="primary" disabled>primaire</d-link>
  <d-link type="success" disabled>succès</d-link>
  <d-link type="warning" disabled>avertissement</d-link>
  <d-link type="danger" disabled>danger</d-link>
  <d-link type="info" disabled>info</d-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <d-link :underline="false">non souligné</d-link>
  <d-link>Souligné</d-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <d-link icon="d-icon-edit">Éditer</d-link>
  <d-link>Vérifier<i class="d-icon-view d-icon--right"></i> </d-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
