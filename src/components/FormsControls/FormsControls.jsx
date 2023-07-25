import React from 'react';
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
