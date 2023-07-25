import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Element } from '../../FormsControls/FormsControls';

const maxlength10 = maxLengthCreator(10);
const Textarea = Element('textarea');

const AddNewPostForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxlength10]}
        ></Field>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likeCount={p.likeCount} />
  ));

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <AddNewPostReduxForm onSubmit={addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
