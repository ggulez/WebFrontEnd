import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employees">All Employees</Link>
        </li>
        <li>
          <Link to="/tasks">All Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
