import React from 'react';
import Secondmenu from './Secondmenu';
import Menu from './Menu';
import Footer from './Footer';
import _ from 'lodash';
import '../assets/css/App.css';
const Movies = (props) => {
  var movies = [];

  props.data.map((i) => {
    if (
      i.releaseYear >= 2010 &&
      i.programType === 'movie' &&
      movies.length < 21
    ) {
      movies.push(i);
    }
  });

  movies = _.sortBy(movies, 'title');
  console.log(movies);
  const pr = movies.map((x) => {
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
      <Secondmenu heading='Popular Movies' />

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

export default Movies;
