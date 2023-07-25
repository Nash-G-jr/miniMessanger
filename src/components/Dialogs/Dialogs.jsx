import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators';
import { Element } from '../FormsControls/FormsControls';
const Textarea = Element('textarea');
const maxlength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxlength100]}
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogsAddMessageForm',
})(AddMessageForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Navigate to={'/login'} />;
  return (
    <div className={s.dialods}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div> {messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
