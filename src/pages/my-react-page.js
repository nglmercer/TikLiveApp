import React from 'react';
import Layout from '@theme/Layout';
import ImageGrid from './ImageGrid'; // Importación sin llaves
export default function MyReactPage() {
  return (
    <Layout>
              <ImageGrid />
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}