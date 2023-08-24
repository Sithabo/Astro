import './App.css';
import React from 'react';
//import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//import Root from '../components/root';
import Data from './data';
import Header from '../components/header';

/*
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root />}>
      <Route path='Astro/' element={ <Data />} />
    </Route>
  ))
*/

function App() {

  return (
    <>
      <Header />
      <Data />
      {/*<RouterProvider router={route} />*/}
    </>
  );
}

export default App;