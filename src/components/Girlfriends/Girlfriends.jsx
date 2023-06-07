import React from 'react';
import s from './Girlfriends.module.css';

const Girlfriends = (props) => {
  let girlsList = props.state.map((g) => (
    <div className={s.girlsName}>
      {g.name}
      <div className={s.girlsAge}>age:{g.age}</div>
    </div>
  ));

  return <div>{girlsList}</div>;
};

export default Girlfriends;
