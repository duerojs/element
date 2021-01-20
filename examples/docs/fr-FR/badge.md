## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<el-badge :value="12" class="item">
  <d-button size="small">Commentaires</d-button>
</el-badge>
<el-badge :value="3" class="item">
  <d-button size="small">Réponses</d-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <d-button size="small">Commentaires</d-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <d-button size="small">Réponses</d-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Cliquez<i class="d-icon-caret-bottom d-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      Commentaires
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      Réponses
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<el-badge :value="200" :max="99" class="item">
  <d-button size="small">Commentaires</d-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <d-button size="small">Réponses</d-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<el-badge value="new" class="item">
  <d-button size="small">Commentaires</d-button>
</el-badge>
<el-badge value="hot" class="item">
  <d-button size="small">Réponses</d-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<el-badge is-dot class="item">Requète</el-badge>
<el-badge is-dot class="item">
  <d-button class="share-button" icon="d-icon-share" type="primary"></d-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
