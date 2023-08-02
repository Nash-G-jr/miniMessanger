import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import { Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import withRouter from './withRouter/withRouter';
import store from './Redux/storeRedux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

let SamuraiJsApp = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </Provider>
  );
};

export default SamuraiJsApp;
