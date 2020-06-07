import React from 'react';

const Secondmenu = (props) => {
  return (
    <div>
      <div className='ui  row '>
        <div className='ui teal inverted segment'>
          <div className='ui container '>
            <div className='header'>
              <p
                style={{ fontSize: '18px' }}
                // align='center'
              >
                {props.heading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondmenu;
