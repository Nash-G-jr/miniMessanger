import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/storeRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>,
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
reportWebVitals();
