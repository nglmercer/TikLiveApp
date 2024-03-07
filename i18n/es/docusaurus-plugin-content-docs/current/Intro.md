---
sidebar_position: 10
sidebar_label: 'Intro al Tutorial'
---

# Introducción al Tutorial

Descubramos **Docusaurus en menos de 5 minutos**.

## Obtener y Empezar

Comienza **creando un nuevo sitio**.

O prueba Docusaurus inmediatamente con [docusaurus.new](https://docusaurus.new).

### Lo que necesitarás

- [Node.js](https://nodejs.org/en/download/) versión 18.0 o superior:
  - Al instalar Node.js, se recomienda marcar todas las casillas de verificación relacionadas con las dependencias.

## Generar un nuevo sitio

Genera un nuevo sitio de Docusaurus utilizando la **plantilla clásica**.

La plantilla clásica se agregará automáticamente a tu proyecto después de ejecutar el siguiente comando:


```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
