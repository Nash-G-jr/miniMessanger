import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/storeRedux';

import SamuraiJsApp from './App';
//import { StoreContext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <SamuraiJsApp />
    </React.StrictMode>,
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
reportWebVitals();
