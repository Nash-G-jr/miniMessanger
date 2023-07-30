import React from 'react';
import { Field } from 'redux-form';
import s from './FormsControls.module.css';

export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <Element {...input} {...props} {...meta} />
        {hasError && <span> {meta.error} </span>}
      </div>
    );
  };

export const CreateField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = '',
) => {
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
      text={text}
    />
  </div>;
};
