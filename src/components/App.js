import React, { Component } from 'react';

import axios from 'axios';
import Homepage from './Homepage';
import Series from './Series';
import Movies from './Movies';
import Secondmenu from './Secondmenu';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import Menu from './Menu';
class App extends Component {
  state = {
    data: [],
    errorMessage: '',
  };
  componentDidMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
      )
      .then((res) => {
        // console.log(res);
        const element = res.data.entries;
        // console.log(element);
        this.setState({ data: element });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }
  render() {
    console.log(this.state.data);
    console.log(this.state.errorMessage);

    if (!this.state.errorMessage) {
      return (
        <div className='app'>
          <Route
            exact
            path='/'
            render={() => <Homepage flag='true' />}
          />
          <Route
            exact
            path='/Series'
            render={() => <Series data={this.state.data} />}
          />

          <Route
            exact
            path='/Movies'
            render={() => <Movies data={this.state.data} />}
          />
        </div>
      );
    }
    if (this.state.data) {
      return (
        <div className='app'>
          <Route
            exact
            path='/'
            render={() => <Homepage flag='false' />}
          />
        </div>
      );
    } else {
      return (
        <div className='app'>
          <Menu />
          <Secondmenu />
          Loading ....
          <Footer />
        </div>
      );
    }
  }
}
export default App;
