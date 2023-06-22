import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Routes } from 'react-router-dom';
import Girlfriends from './components/Girlfriends/Girlfriends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsContainer store={props.store} />}
            />
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route
              path="/girlfriends"
              element={<Girlfriends state={props.state.girlfriends} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
