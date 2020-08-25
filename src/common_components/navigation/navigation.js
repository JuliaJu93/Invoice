import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sidebar_navigation">
      <ul>
        <li>
          <Link to="/terminals"> Терминалы </Link>
        </li>
        <li>
          <Link to="/buyers"> Покупатели </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
