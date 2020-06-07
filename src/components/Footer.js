import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/App.css';
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
  render() {
    return (
      <div className='foot'>
        <div
          className='ui inverted  segment '
          style={{
            margin: '5em 0em 0em',
            padding: '5em 0em',
          }}
        >
          <div className='ui  grid container'>
            <div className='ui doubling eight column row'>
              {/* <div className='row'> */}
              <div className='one wide column'>
                <p>Home</p>
              </div>
              <div className='three wide column'>
                <p>Terms and Conditions</p>
              </div>
              <div className='two wide column'>
                <p>Privacy Policy</p>
              </div>
              <div className='three wide column'>
                <p>Collection Statement</p>
              </div>
              <div className='one wide column'>
                <p>Help</p>
              </div>
              <div className='two wide column'>
                <p>Manage Account</p>
              </div>
            </div>
            <div className='ui  row '>
              <div className='column'>
                Copyright © 2016 DEMO Streaming. All rights
                reserved.
              </div>
            </div>
            <div className='ui  row '>
              <div className='column'>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color='white'
                  size='2x'
                  className='social'
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  color='white'
                  size='2x'
                  className='social'
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  color='white'
                  size='2x'
                  className='social'
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default Footer;
