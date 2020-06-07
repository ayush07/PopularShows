import React from 'react';
import '../assets/css/App.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div
      className='ui container'
      style={{ marginTop: '50px' }}
    >
      <div className='ui link cards'>
        <div className=' card'>
          <div className='image'>
            <img src={require('../assets/images/15.jpg')} />
          </div>
          <div className='content'>
            <div className='header'>
              <Link to='/Series'>
                <p align='center'>Popular Series</p>
              </Link>
            </div>
          </div>
        </div>
        <div className=' card'>
          <div className='image'>
            <img src={require('../assets/images/12.jpg')} />
          </div>
          <div class='content'>
            <div class='header'>
              <Link to='/Movies'>
                <p align='center'>Popular Movies</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
