---
sidebar_position: 2
---

# Crear un Documento

Los documentos son **grupos de páginas** conectados a través de:

- una **barra lateral**
- **navegación anterior/siguiente**
- **versionamiento**

## Crea tu primer Documento

Crea un archivo Markdown en `docs/hello.md`:

```md title="docs/hello.md"
# Hola

¡Este es mi **primer documento Docusaurus**!
```

Un nuevo documento está disponible ahora en [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configura la Barra Lateral

Docusaurus automáticamente **creates a sidebar** desde carpeta `docs`.

Agrega metadatos para personalizar la etiqueta y posición de la barra lateral:


```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hello!'
sidebar_position: 3
---

# Hola

¡Este es mi **primer documento Docusaurus**!
```

También es posible crear tu barra lateral explícitamente en `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};

```
