import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/storeRedux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import { StoreContext } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store}
          />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
reportWebVitals();
