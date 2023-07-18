import React from 'react';
import { addMessage, onMessageChange } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToprops = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.newMessageText,
  };
};

export default compose(
  connect(mapStateToprops, {
    addMessage,
    onMessageChange,
  }),
  withAuthRedirect,
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// export default connect(mapStateToprops, {
//   addMessage,
//   onMessageChange,
// })(AuthRedirectComponent);
