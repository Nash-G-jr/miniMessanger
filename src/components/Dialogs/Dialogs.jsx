import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
    //props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
    //let action = onMessageChangeActionCreator(text);
    //props.dispatch(action);
  };

  if (!props.isAuth) return <Navigate to={'/login'} />;
  return (
    <div className={s.dialods}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              ref={newMessageElement}
              onChange={onMessageChange}
              value={props.dialogsPage.newMessageText}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
