---
sidebar_position: 2
---

# Traduce tu sitio

Vamos a traducir `docs/intro.md` al francés.

## Configura i18n

Modifica `docusaurus.config.js` para agregar soporte para la localización `fr`:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traduce un documento
Copia el archivo `docs/intro.md` a la carpeta `i18n/fr` 

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduce `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en Frances.

## Inicia tu sitio localizado

Inicia tu sitio en la localización francesa:

```bash
npm run start -- --locale fr
```

Tu sitio localizado estará disponible en  [http://localhost:3000/fr/](http://localhost:3000/fr/) y el `Getting Started` estará traducida.

:::caution

En desarrollo, solo puedes utilizar una localización a la vez.

:::

## Agrega un menú desplegable ¨Dropdown¨ de localización

Para navegar sin problemas entre los idiomas, agrega un menú desplegable de localización.


modifica el archivo `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

El menú desplegable de localización ahora aparecerá en tu barra de navegación:

![Locale Dropdown](./img/localeDropdown.png)
## Construye tu sitio localizado
Construye tu sitio para una localización específica:


```bash
npm run build -- --locale fr
```

O construye tu sitio para incluir todas las localizaciones a la vez:

```bash
npm run build
```
