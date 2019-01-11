import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import './App.css';

class App extends Component {

  state = {

    images: [
      {
        "id": "Newborn",
        "mainclass": "exmpl-one"
      },
      {
        "id": "Studio",
        "mainclass": "exmpl-two"
      },
      {
        "id": "Couple",
        "mainclass": "exmpl-three"
      },
      {
        "id": "Wedding",
        "mainclass": "exmpl-four"
      },
      {
        "id": "Pregnancy",
        "mainclass": "exmpl-five"
      },
      {
        "id": "Baby",
        "mainclass": "exmpl-six"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div id="page-content" className="content">
          <Route exact path='/' render={()=>(
            <MainPage
              images={ this.state.images }
            />
          ) }/>
        </div>
      </div>
    );
  }
}

export default App;
