import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <nav>
      <ui className="menu">
        <li className="menu-item"><NavLink to="/" exact>Home</NavLink></li>
        <li className="menu-item"><NavLink to="/vid" exact>Video</NavLink></li>
        <li className="menu-item"><NavLink to="/about" exact>About</NavLink></li>
      </ui>
    </nav>
  );
}
