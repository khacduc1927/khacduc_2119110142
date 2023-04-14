import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BasketProvider } from './views/frontend/context/basketContext';
import { FilterProvider } from './views/frontend/context/filterContext';
import { ProductProvider } from './views/frontend/context/productContext';
import { CategoryProvider } from './views/frontend/context/categoryContext';
import { AuthProvider } from './views/frontend/context/authContext';
import { SearchProvider } from './views/frontend/context/searchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const compose = (providers) => providers.reduce((Prev, Curr) => ({ children }) => (
  <Prev>
    <Curr>{children}</Curr>
  </Prev>
));

const Provider = compose([AuthProvider, ProductProvider, BasketProvider, FilterProvider, CategoryProvider, SearchProvider])
root.render(
  <Provider>
    <App />
  </Provider>
);
