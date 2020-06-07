import React, { Component } from 'react';
import '../assets/css/App.css';
class Menu extends Component {
  render() {
    return (
      <div className='ui  inverted stackable menu'>
        <div className='ui container '>
          <div className='header item'>
            <h3>Demo Streaming</h3>
          </div>

          <div className='right menu'>
            <a className='item'>Login</a>
            <a className='item'>
              <div className='ui primary button'>
                Start Your Free Trial
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
