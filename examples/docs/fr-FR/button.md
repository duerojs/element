## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<d-row>
  <d-button>Défaut</d-button>
  <d-button type="primary">Primary</d-button>
  <d-button type="success">Success</d-button>
  <d-button type="info">Info</d-button>
  <d-button type="warning">Warning</d-button>
  <d-button type="danger">Danger</d-button>
</d-row>

<d-row>
  <d-button plain>Plein</d-button>
  <d-button type="primary" plain>Primary</d-button>
  <d-button type="success" plain>Success</d-button>
  <d-button type="info" plain>Info</d-button>
  <d-button type="warning" plain>Warning</d-button>
  <d-button type="danger" plain>Danger</d-button>
</d-row>

<d-row>
  <d-button round>Arrondi</d-button>
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

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<d-row>
  <d-button disabled>Défaut</d-button>
  <d-button type="primary" disabled>Principal</d-button>
  <d-button type="success" disabled>Succès</d-button>
  <d-button type="info" disabled>Info</d-button>
  <d-button type="warning" disabled>Attention</d-button>
  <d-button type="danger" disabled>Danger</d-button>
</d-row>

<d-row>
  <d-button plain disabled>Plein</d-button>
  <d-button type="primary" plain disabled>Principal</d-button>
  <d-button type="success" plain disabled>Succès</d-button>
  <d-button type="info" plain disabled>Info</d-button>
  <d-button type="warning" plain disabled>Attention</d-button>
  <d-button type="danger" plain disabled>Danger</d-button>
</d-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo
```html
<d-button type="text">Bouton texte</d-button>
<d-button type="text" disabled>Bouton texte</d-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<d-button type="primary" icon="d-icon-edit"></d-button>
<d-button type="primary" icon="d-icon-share"></d-button>
<d-button type="primary" icon="d-icon-delete"></d-button>
<d-button type="primary" icon="d-icon-search">Recherche</d-button>
<d-button type="primary">Upload<i class="d-icon-upload d-icon-right"></i></d-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<d-button-group>` pour grouper vos boutons.

```html
<d-button-group>
  <d-button type="primary" icon="d-icon-arrow-left">Page précédente</d-button>
  <d-button type="primary">Page suivante<i class="d-icon-arrow-right d-icon-right"></i></d-button>
</d-button-group>
<d-button-group>
  <d-button type="primary" icon="d-icon-edit"></d-button>
  <d-button type="primary" icon="d-icon-share"></d-button>
  <d-button type="primary" icon="d-icon-delete"></d-button>
</d-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<d-button type="primary" :loading="true">Chargement</d-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<d-row>
  <d-button>Défaut</d-button>
  <d-button size="medium">Medium</d-button>
  <d-button size="small">Small</d-button>
  <d-button size="mini">Mini</d-button>
</d-row>
<d-row>
  <d-button round>Défaut</d-button>
  <d-button size="medium" round>Medium</d-button>
  <d-button size="small" round>Small</d-button>
  <d-button size="mini" round>Mini</d-button>
</d-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
