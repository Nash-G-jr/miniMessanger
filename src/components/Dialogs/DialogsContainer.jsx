import React from 'react';
import { addMessage, onMessageChange } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

let mapStateToprops = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.newMessageText,
  };
};
let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToprops, {
  addMessage,
  onMessageChange,
})(AuthRedirectComponent);
