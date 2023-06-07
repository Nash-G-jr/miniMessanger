import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/girlfriends"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Girlfriends
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
