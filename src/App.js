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

  goToAnchorCero = () => {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 100);
}

  goToAnchorOne = () => {
  setTimeout(function() {
    document.getElementById('about-me').scrollIntoView({
    behavior: 'smooth'
    })
  }, 100);
}

  goToAnchorTwo = () => {
  setTimeout(function() {
    document.getElementById('galeria-section').scrollIntoView({
    behavior: 'smooth'
    });
  }, 100);
}

  goToAnchorThree = () => {
  setTimeout(function() {
    document.getElementById('contact-field').scrollIntoView({
    behavior: 'smooth'
    });
  }, 100);
}

  render() {

    /*hide and show to top button when needed*/
          window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            if ( scroll > 836 && scroll < 6099) {
              document.getElementById("to-top-img").style.height = "60px";
              document.getElementById("to-top-img").style.width = "60px";
              document.getElementById("to-top-img").style.backgroundSize = "20px";
            } else {
              document.getElementById("to-top-img").style.width = "0px";
              document.getElementById("to-top-img").style.height = "0px";
              document.getElementById("to-top-img").style.backgroundSize = "0px";
            }
        });

    return (
      <div className="App">
      <div id='to-top-ext' className="to-top-ext">
        <div id='to-top-img' className="to-top-img"
          onClick={ () => { this.goToAnchorCero()
        }}></div>
      </div>
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
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorCero();
              }}>Home</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorOne();
              }}>About Me</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorTwo();
              }}>Galleria</button>
            </Link>
            <Link to='' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorThree();
              }}>Contact Us</button>
            </Link>
            <Link to='./bookonline' tabIndex="-1">
              <button id="w3-bar-item" className="w3-bar-item"
                onClick={ (event) => { this.w3_close(); this.goToAnchorCero();
              }}>Book Online</button>
            </Link>
          </div>
      </div>
      <div id="navbar-desktop" className="navbar-desktop">
        <Link to='./' tabIndex="-1">
          <button className="item"
            onClick={ (event) => { this.w3_close(); this.goToAnchorCero();  }}
            >Home</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item" onClick={ () => this.goToAnchorOne() }>About Me</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item" onClick={ () => this.goToAnchorTwo() }>Galleria</button>
        </Link>
        <Link to='./' tabIndex="-1">
          <button className="item" onClick={ () => this.goToAnchorThree() }>Contact Us</button>
        </Link>
        <div className="topnav-right">
        <Link to='./bookonline' tabIndex="-1">
          <button className="item" onClick={ (event) => { this.goToAnchorCero(); } }>Book Online</button>
        </Link>
      </div>
      </div>
        <div id="page-content" className="content">
          <Route exact path='/' render={()=>(
            <MainPage
              images={ this.state.images }
              sessions={ this.state.sessions }
              toTop={ this.goToAnchorCero }
            />
          ) }/>
          <Route path='/bookonline' render={()=>(
          <BookOnline
            onBookingSession={ this.bookingSession }
            sessions={ this.state.sessions }
            toTop={ this.goToAnchorCero }
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
        <footer id="footer" className="footer">
        <button title='Back to top' className='scroll'
           onClick={ () => { window.scrollTo(0, 0)}} tabIndex="-1">
            <span className='arrow-up' tabIndex="0">arrow up</span>
          </button>
          <div id="divisor" className="divisor">
            <div className="back-to-top">Back to Top</div>
            <h5 className="developer">Copyright @ 2018 Solved Code Inc. All rights reserved.</h5>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
