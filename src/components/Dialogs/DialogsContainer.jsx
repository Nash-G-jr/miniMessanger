import React from 'react';
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = onMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      UpdateOnMessageChange={onMessageChange}
      dialogsPage={state}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
