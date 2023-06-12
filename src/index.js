import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {
  addMessage,
  subscribe,
  updateNewMessageText,
} from './Redux/state';
import { addPost, updateNewPostText } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);
reportWebVitals();
