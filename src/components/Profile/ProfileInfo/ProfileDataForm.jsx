import React from 'react';
import s from './ProfileInfo.module.css';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Element } from '../../FormsControls/FormsControls';

const TextArea = Element('textarea');
const Input = Element('input');
const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      {
        <div>
          <button>Save</button>
        </div>
      }
      <div>
        <b>Full Name: </b>

        <div>
          <Field
            placeholder={'Full name'}
            name={'fullName'}
            component={Input}
          />
        </div>
      </div>
      <div>
        <b>Looking for a job:</b>
        <Field
          type={'checkbox'}
          placeholder={''}
          name={'lookingForAJob'}
          component={Input}
        />
      </div>
      {
        <div>
          <b>My professional skills:</b>
          <Field
            placeholder={'My professional skills'}
            name={'lookingForAJobDescription'}
            component={TextArea}
          />
        </div>
      }

      <div>
        <b>About me: </b>
        <Field placeholder={'About me'} name={'aboutMe'} component={TextArea} />
      </div>
      <div>
        <b>Contacnts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}:
                <Field
                  placeholder={key}
                  name={'contacts.' + key}
                  component={TextArea}
                />
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
