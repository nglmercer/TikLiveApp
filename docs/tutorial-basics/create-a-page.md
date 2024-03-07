---
sidebar_position: 1
---

# Crear una Página

Agrega archivos **Markdown o React** a `src/pages` para crear una **página independiente**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Crea tu primera Página React

Crea un archivo en `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

Una nueva página está disponible ahora en [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Crea tu primera Página Markdown

Crea un archivo en `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# Mi página Markdown

Esta es una página Markdown

```

Una nueva página está disponible ahora en

 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
