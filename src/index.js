import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Page/Root';
import Category from './Page/Category';
import Product from './Page/Product';
import Home from './Page/Home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/categories/:id",
//         element: <Category />
//       },
//       {
//         path: "/product/:id",
//         element: <Product />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/categories/:id",
          element: <Category />
        },
        {
          path: "/product/:id",
          element: <Product />
        }
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

