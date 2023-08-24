import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from '../components/root';
import Data from './data';

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root />}>
      <Route index element={ <Data />} />
    </Route>
  ))
function App() {

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;