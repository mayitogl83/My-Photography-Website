import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import BookOnline from './BookOnline';
import './App.css';

class App extends Component {

  state = {
    sessions: [
      {
        "id": "Newborn",
        "title": "Newborn Session",
        "description": "Describe your service here for a newborn session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "1 hr | Photo Session",
        "price": "140",
        "qty": "50",
        "class": 'newborn-session-img',
        "mainclass": "exmpl-one"
      },
      {
        "id": "Studio",
        "title": "Studio Session",
        "description": "Describe your service here a for studio session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "1/30 hr | Photo Session",
        "price": "180",
        "qty": "60",
        "class": "studio-session-img",
        "mainclass": "exmpl-two"
      },
      {
        "id": "Couple",
        "title": "Couple Session",
        "description": "Describe your service here for a couple session. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.",
        "info": "2 hrs | Photo Session",
        "price": "200",
        "qty": "80",
        "class": "couple-session-img",
        "mainclass": "exmpl-three"
      }
    ],
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
              sessions={ this.state.sessions }
            />
          ) }/>
          <Route path='/bookonline' render={()=>(
          <BookOnline
            onBookingSession={ this.bookingSession }
            sessions={ this.state.sessions }/>
        ) }/>
        </div>
      </div>
    );
  }
}

export default App;
