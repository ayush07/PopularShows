import React from 'react';
import Secondmenu from './Secondmenu';
import Menu from './Menu';
import Footer from './Footer';
import _ from 'lodash';
import '../assets/css/App.css';
const Series = (props) => {
  var series = [];

  props.data.map((i) => {
    if (
      i.releaseYear >= 2010 &&
      i.programType === 'series' &&
      series.length < 21
    ) {
      series.push(i);
    }
  });

  console.log(series);
  series = _.sortBy(series, 'title');
  const pr = series.map((x) => {
    return (
      <div>
        <img
          key={x.title}
          src={x.images['Poster Art'].url}
        />
        <p align='center'>{x.title}</p>
        <br />
      </div>
    );
  });
  console.log(pr.key);
  return (
    <div>
      <Menu />
      <Secondmenu heading='Popular Series' />

      <div
        className='ui container center '
        style={{ marginTop: '50px' }}
      >
        <div className='size'>{pr}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
