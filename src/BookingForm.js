import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



class BookingForm extends Component {


  render() {

    const { onRefresh } = this.props

    return (
      <div className="schedule-container">
      <div id="form-container" className="form-container">
      <div className="fade-in one">
        <div className="page-title">Confirm Book</div>
        <div className="line-title"></div>
      </div>
      <div className="fade-in three">
      <div className="calendar">
        <div className="go-back-field">
          <Link to="./bookonline">
            <div className="go-back"
              onClick={ (event) => { onRefresh(); }}
            >arrow back</div>
          </Link>
          <div className="go-back-text">Back</div>
        </div>
        <div className="set-appointment">Let's schedule your appointment</div>
        <form>
        <div className="input-form">
        <label htmlFor="name-input" className="title-form">
          <div>Tell Us About You</div>
        </label>
        <div className="input-field">
          <input
            id="name-input"
            pattern="^[a-zA-Z]{2,}$"
            required
            name="name"
            type="text"
            className="input-user"
            placeholder="First Name"></input>
        </div>
        <div className="input-field">
          <input
            id="lastname-input"
            pattern="^[a-zA-Z]{2,}$"
            required
            name="lastname"
            type="text"
            className="input-user"
            placeholder="Last Name"></input>
        </div>
        <div className="input-field">
          <input
            id="email-input"
            required
            name="email"
            type="email"
            className="input-email"
            placeholder="Email Address"></input>
        </div>
        <div className="input-field">
          <input
            id="date-input"
            required
            name="date"
            type="date"
            className="input-subject"></input>
        </div>
        <div className="input-field">
          <select
            id="message-input"
            required
            name="session"
            className="input-choice">
              <option style={{color: '#ddd'}} value="">Match the session to confirm</option>
              <option value="Newborn">Newborn Session</option>
              <option value="Studio">Studio Session</option>
              <option value="Couple">Couple Session</option>
          </select>
        </div>
           <div>
             <button className="send-button">Book it</button>
           </div>
        </div>
          <div className="input">
            {this.props.sessions.map((session) => (
              <div id="session-info" key={session.id}>
              <div className="session-title">{session.title}</div>
              <div className="time-info">{session.info}</div>
              <div className="price-info">Qty: {session.qty} photos</div>
              <div className="price-info">Price: ${session.price}</div>
              <div className="time-info"></div>
              <div className="line"></div>
              <div className="session-description">{session.description}</div>
              <div className="contact-info">
                <p>10801 Legacy Park Dr</p>
                <p>Houston. TX 77064</p>
                <p>Tel: 723-123-1212</p>
                <p>email@gmail.com</p>
              </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default BookingForm
