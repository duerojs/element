## Container
Les composants Container servent à structurer la page:

`<d-container>`: Conteneur de wrapping. Quand il est placé à l'intérieur de `<d-header>` ou `<d-footer>`, tous les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.

`<d-header>`: Conteneur pour headers.

`<d-aside>`: Conteneur pour section latérale (en général un menu).

`<d-main>`: Conteneur pour la section principal.

`<d-footer>`: Conteneur pour footers.

:::tip
Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de `<d-container>` doivent être un des quatre éléments précédents, leur élément père devant obligatoirement être `<d-container>`.
:::

### Mises en page habituelles

:::demo
```html
<d-container>
  <d-header>Header</d-header>
  <d-main>Main</d-main>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-main>Main</d-main>
  <d-footer>Footer</d-footer>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-main>Main</d-main>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-container>
    <d-aside width="200px">Aside</d-aside>
    <d-main>Main</d-main>
  </d-container>
</d-container>

<d-container>
  <d-header>Header</d-header>
  <d-container>
    <d-aside width="200px">Aside</d-aside>
    <d-container>
      <d-main>Main</d-main>
      <d-footer>Footer</d-footer>
    </d-container>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-container>
    <d-header>Header</d-header>
    <d-main>Main</d-main>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Aside</d-aside>
  <d-container>
    <d-header>Header</d-header>
    <d-main>Main</d-main>
    <d-footer>Footer</d-footer>
  </d-container>
</d-container>

<style>
  .d-header, .d-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .d-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .d-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .d-container {
    margin-bottom: 40px;
  }

  .d-container:nth-child(5) .d-aside,
  .d-container:nth-child(6) .d-aside {
    line-height: 260px;
  }

  .d-container:nth-child(7) .d-aside {
    line-height: 320px;
  }
</style>
```
:::

### Exemple

:::demo
```html
<d-container style="height: 500px; border: 1px solid #eee">
  <d-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <d-menu :default-openeds="['1', '3']">
      <d-submenu index="1">
        <template slot="title"><i class="d-icon-message"></i>Navigator One</template>
        <d-menu-item-group>
          <template slot="title">Group 1</template>
          <d-menu-item index="1-1">Option 1</d-menu-item>
          <d-menu-item index="1-2">Option 2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="Group 2">
          <d-menu-item index="1-3">Option 3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="1-4">
          <template slot="title">Option4</template>
          <d-menu-item index="1-4-1">Option 4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
      <d-submenu index="2">
        <template slot="title"><i class="d-icon-menu"></i>Navigator Two</template>
        <d-menu-item-group>
          <template slot="title">Group 1</template>
          <d-menu-item index="2-1">Option 1</d-menu-item>
          <d-menu-item index="2-2">Option 2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="Group 2">
          <d-menu-item index="2-3">Option 3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="2-4">
          <template slot="title">Option 4</template>
          <d-menu-item index="2-4-1">Option 4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
      <d-submenu index="3">
        <template slot="title"><i class="d-icon-setting"></i>Navigator Three</template>
        <d-menu-item-group>
          <template slot="title">Group 1</template>
          <d-menu-item index="3-1">Option 1</d-menu-item>
          <d-menu-item index="3-2">Option 2</d-menu-item>
        </d-menu-item-group>
        <d-menu-item-group title="Group 2">
          <d-menu-item index="3-3">Option 3</d-menu-item>
        </d-menu-item-group>
        <d-submenu index="3-4">
          <template slot="title">Option 4</template>
          <d-menu-item index="3-4-1">Option 4-1</d-menu-item>
        </d-submenu>
      </d-submenu>
    </d-menu>
  </d-aside>

  <d-container>
    <d-header style="text-align: right; font-size: 12px">
      <d-dropdown>
        <i class="d-icon-setting" style="margin-right: 15px"></i>
        <d-dropdown-menu slot="dropdown">
          <d-dropdown-item>View</d-dropdown-item>
          <d-dropdown-item>Add</d-dropdown-item>
          <d-dropdown-item>Delete</d-dropdown-item>
        </d-dropdown-menu>
      </d-dropdown>
      <span>Tom</span>
    </d-header>

    <d-main>
      <d-table :data="tableData">
        <d-table-column prop="date" label="Date" width="140">
        </d-table-column>
        <d-table-column prop="name" label="Name" width="120">
        </d-table-column>
        <d-table-column prop="address" label="Address">
        </d-table-column>
      </d-table>
    </d-main>
  </d-container>
</d-container>

<style>
  .d-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .d-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Attributs de Container
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Direction d'affichage pour les éléments enfants. | string | horizontal / vertical | vertical quand dans `d-header` ou `d-footer`; horizontal sinon |

### Attributs de Header
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du header. | string | — | 60px |

### Attributs de Aside
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largeur de la section. | string | — | 300px |

### Attributs de Footer
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du footer. | string | — | 60px |
