import React from 'react';
import Header from './Header';
import { connect } from 'react-redux/es/exports';
import { authenticactionThunk } from '../../Redux/authReducer';
import { logout } from '../../Redux/authReducer';
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authenticactionThunk();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authenticactionThunk, logout })(
  HeaderContainer,
);
