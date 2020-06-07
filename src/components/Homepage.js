import React, { Component } from 'react';
import Cards from './Cards';
import Secondmenu from './Secondmenu';
import Menu from './Menu';
import Footer from './Footer';
import '../assets/css/App.css';
const Homepage = (props) => {
  if (props.flag === 'true') {
    return (
      <div>
        <Menu />
        <Secondmenu heading='Popular Titles' />
        <Cards />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Menu />
        <Secondmenu heading='Popular Titles' />
        <br />
        <br />
        <p className='ui container'>
          Oops there is some problem.
        </p>
        <Footer />
      </div>
    );
  }
};

export default Homepage;
