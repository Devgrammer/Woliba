import React from 'react';
import {RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Router } from './router/route'
import './App.css';


function App() {
  return (
    <Layout>
        <RouterProvider router={ Router } />
    </Layout>
  );
}

export default App;
