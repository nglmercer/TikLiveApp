/**
 * Crear una barra lateral te permite:
 - crear un grupo ordenado de documentos
 - mostrar una barra lateral para cada documento de ese grupo
 - proporcionar navegación siguiente/anterior

 Las barras laterales pueden generarse a partir del sistema de archivos o definirse explícitamente aquí.

 Crea tantas barras laterales como desees.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Por defecto, Docusaurus genera una barra lateral a partir de la estructura de carpetas de los documentos
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  // Pero también puedes crear una barra lateral manualmente
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;