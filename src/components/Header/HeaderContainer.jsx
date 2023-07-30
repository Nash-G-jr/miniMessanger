import React from 'react';
import Header from './Header';
import { connect } from 'react-redux/es/exports';
import { logout } from '../../Redux/authReducer';
import { compose } from 'redux';
// import withRouter from '../../withRouter/withRouter';
// import { withAuthRedirect } from '../../HOC/withAuthRedirect';
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
