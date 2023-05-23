import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logo.jpg';


const HomePageView = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" width="20%" height="20%" />
      <br />
      <Link to={'/employees'} > All Employees </Link>
      <br />
      <Link to={'/tasks'} > All Tasks </Link>
    </div>
  );    
}

export default HomePageView;
