import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  debugger;
  return (
    <header className={s.header}>
      <img src="http://pushkin-info.ru/images/com_adsmanager/ads/operator-pk-kontent-menedzher-b-op-online_11154_1_t.jpg" />

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
