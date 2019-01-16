import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function refreshPage(){
    window.location.reload();
}

class BookOnline extends Component {

  render() {

    return (
      <div className="bookonline-container">
        <div className="fade-in one">
          <div className="page-title">Book Online</div>
          <div className="line-title"></div>
        </div>
        <div className="fade-in two">
          <div className="go-back-field">
            <Link to="./">
              <div className="go-back">arrow back</div>
            </Link>
            <div className="go-back-text">Back</div>
          </div>
        </div>
        <div className="fade-in three">
        <div className="set-appointment">Book the Session you are looking for Now</div>
        <div className="show-session">
          <div className="show-session-item" onClick={ (event) => { refreshPage(); this.goToAnchorCero() }}></div>
          <div className="show-session-text">Click to Show All Sessions</div>
        </div>
        <div className="bookonline-field">
          {this.props.sessions.map((session) => (
            <Link key={session.id} to="./bookingform" tabIndex="-1">
            <button className="bookonline-session" tabIndex="-1"
              onClick={ (event) => { this.props.onBookingSession(session); }}>
            <div className="bookonline" tabIndex="-1">
              <div className={session.class}/>
              <div className="session-info">
                <div className="session-title">{session.title}</div>
                <div className="time-info">{session.info}</div>
                <div className="price-info">Qty: {session.qty}</div>
                <div className="price-info">Price: ${session.price}</div>
                <div className="line"></div>
                <div className="session-description">
                  {session.description}
                </div>
                <div className="book-now" tabIndex="0">
                  <div className="book-now-text">Book Now</div>
                </div>
              </div>
              <div className="long-line"></div>
            </div>
            </button>
            </Link>
          ))}
        </div>
        <div className="footer-line"></div>
        </div>
      </div>
    )
  }

}


export default BookOnline
