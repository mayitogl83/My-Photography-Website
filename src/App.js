import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import BookOnline from './BookOnline';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import Galleria from './Galleria';
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

  bookingSession = (session) => {
    this.setState((state) => ({
      sessions: state.sessions.filter((s) => s.id === session.id)
    }))
  }

  refreshPage = () => {
      window.location.reload();
  }

  w3_open = ()=> {
  document.getElementById("my-sidebar").style.width = "100%";
  document.getElementById("my-sidebar").style.display = "block";
  document.getElementById("my-sidebar").style.marginTop = "0px";

  }
  w3_close = ()=> {
      document.getElementById("my-sidebar").style.marginTop = "-400px";

  }

  render() {

    return (
      <div className="App">
      <div role="navigation" id="navbar-cell" className="navbar-cell">
        <div className="initial-logo-space"></div>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="instagram-logo-cell" tabIndex="0">instagram logo</div>
        </a>
        <div className="logo-space"></div>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="facebook-logo-cell" tabIndex="0">facebook logo</div>
        </a>
        <div className="logo-space"></div>
        <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="twitter-logo-cell" tabIndex="0">twitter logo</div>
        </a>
        <div className="logo-space"></div>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="pinterest-logo-cell" tabIndex="0">pinterest logo</div>
        </a>
        <div className="bar-menu-space"></div>
        <div className="bar-menu-container" onKeyPress={this.w3_open} onClick={this.w3_open}  tabIndex="0">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div id="my-sidebar" className="my-sidebar">
        <button onClick={this.w3_close} className="w3-button">X</button>
          <div className="menu-items">
            <Link to='/' tabIndex="-1">
              <button id="w3-bar-item"
                className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); }}
                >Home</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item"
                className="w3-bar-item"
                onClick={ () => window.scrollTo(0, 855) }
              >About Me</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item"
                className="w3-bar-item"
                onClick={ () => window.scrollTo(0, 2650) }
              >Galleria</button>
            </Link>
            <Link to='./bookonline' tabIndex="-1">
              <button id="w3-bar-item"
                className="w3-bar-item"
                onClick={ (event) => {
                  this.w3_close();
                 }}
              >Book Online</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item"
                className="w3-bar-item"
                onClick={ () => window.scrollTo(0, 5320) }
               >Contact Us</button>
            </Link>
          </div>
      </div>
      <div id="navbar-desktop" className="navbar-desktop">
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ (event) => { this.w3_close();  window.scrollTo(0, 0);}}
            >Home</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ () => window.scrollTo(0, 855) }
          >About Me</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ () => window.scrollTo(0, 1920) }
          >Galleria</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ () => window.scrollTo(0, 3164) }
          >Contact Us</button>
        </Link>
        <div className="topnav-right">
          <Link to='./bookonline' tabIndex="-1">
            <button className="item">Book Online</button>
          </Link>
        </div>
      </div>
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
            sessions={ this.state.sessions }
            />
        ) }/>
          <Route path='/bookingform' render={ ()=>(
            <BookingForm
              sessions={ this.state.sessions }
              onRefresh={ this.refreshPage }
            />
          ) }/>
          <Route path='/gallery' render={()=>(
          <Galleria/>
        ) }/>
        </div>
      </div>
    );
  }
}

export default App;
