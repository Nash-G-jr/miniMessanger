import React from 'react';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';

let mapStateToprops = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.newMessageText,
  };
};
let dispatchStateToprops = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateOnMessageChange: (text) => {
      let action = onMessageChangeActionCreator(text);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(
  mapStateToprops,
  dispatchStateToprops,
)(Dialogs);

export default DialogsContainer;
