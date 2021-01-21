## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<d-container>`: Contenedor. Cuando este elemento se anida con un `<d-header>` o `<d-footer>`, todos los elementos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal. 

`<d-header>`: Contenedor para cabeceras.

`<d-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<d-main>`: Contenedor para sección principal.

`<d-footer>`: Contenedor para pie de página.

:::tip
Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los elementos directos de `<d-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un `<d-container>`.
:::

### Diseños comunes

:::demo
```html
<d-container>
  <d-header>Cabecera</d-header>
  <d-main>Principal</d-main>
</d-container>

<d-container>
  <d-header>Cabecera</d-header>
  <d-main>Principal</d-main>
  <d-footer>Pie de página</d-footer>
</d-container>

<d-container>
  <d-aside width="200px">Barra lateral</d-aside>
  <d-main>Principal</d-main>
</d-container>

<d-container>
  <d-header>Cabecera</d-header>
  <d-container>
    <d-aside width="200px">Barra lateral</d-aside>
    <d-main>Principal</d-main>
  </d-container>
</d-container>

<d-container>
  <d-header>Cabecera</d-header>
  <d-container>
    <d-aside width="200px">Barra lateral</d-aside>
    <d-container>
      <d-main>Principal</d-main>
      <d-footer>Pie de página</d-footer>
    </d-container>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Barra lateral</d-aside>
  <d-container>
    <d-header>Cabecera</d-header>
    <d-main>Principal</d-main>
  </d-container>
</d-container>

<d-container>
  <d-aside width="200px">Barra lateral</d-aside>
  <d-container>
    <d-header>Cabecera</d-header>
    <d-main>Principal</d-main>
    <d-footer>Pie de página</d-footer>
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

### Ejemplo

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

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para elementos secundarios | string | horizontal / vertical | vertical cuando el elemento está anidado con `d-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |