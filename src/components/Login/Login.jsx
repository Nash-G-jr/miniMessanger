import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { required } from '../../utils/validators';
import { CreateField, Element } from '../FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from 'react-router-dom';
const Input = Element('input');

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={'email'}
          name={'email'}
          component={Input}
          validate={required}
        />
      </div>
      <div>
        <Field
          placeholder={'password'}
          name={'password'}
          component={Input}
          validate={required}
        />
      </div>
      <div>
        <Field type={'checkbox'} name={'remebmerMe'} component={Input} />
        remebmer me
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) return <Navigate to={'/profile'} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login })(Login);
