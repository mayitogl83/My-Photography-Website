import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



class MainPage extends Component {


  w3_open = ()=> {
  document.getElementById("my-sidebar").style.width = "100%";
  document.getElementById("my-sidebar").style.display = "block";
  document.getElementById("my-sidebar").style.marginTop = "0px";

  }
  w3_close = ()=> {
      document.getElementById("my-sidebar").style.marginTop = "-400px";

  }


  render() {

    return(

      <div className="container">
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
      <div className="social-logos">
        <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="instagram-logo" tabIndex="0">instagram logo</div>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="facebook-logo" tabIndex="0">facebook logo</div>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="twitter-logo" tabIndex="0">twitter logo</div>
        </a>
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" tabIndex="-1">
          <div className="pinterest-logo" tabIndex="0">pinterest logo</div>
        </a>
      </div>

      <div className="fade-in three">
        <div className="bgimg-1">
        <div className="logo-container">
          <div className="camera-logo"></div>
        </div>
          <div className="caption-top">
            <span className="title-logo">MARIO'S STUDIO</span>
            <div className="top-line-title"></div>
            <div className="under-title-logo">photography</div>
            <div id="start-field" className="start-field">
              <Link to='./bookonline' tabIndex="-1">
                <button className="start-button">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="about-me" className="personal-info">
              <div className="personal-img"></div>
            <div className="article-one">
            <h3 className="article-title">About Me</h3>
            <div className="under-line"></div>
            <p>I'm a paragraph. Click here to add your own text and edit me.
             It’s easy. Just click “Edit Text” or double click me to add your
             own content and make changes to the font. Feel free to drag and
             drop me anywhere you like on your page. I’m a great place for you
             to tell a story and let your users know a little more about you.

​
            This is a great space to write long text about your company and
            your services. You can use this space to go into a little more
            detail about your company.



             Talk about your team and what services you provide. Tell your
             visitors the story of how you came up with the idea for your
             business and what makes you different from your competitors.
             Make your company stand out and show your visitors who you are.</p>
             <span>
               <Link to="./bookonline" tabIndex="-1">
                 <button className="book-online">book a session ></button>
               </Link>
             </span>
            </div>

      </div>
          <div className="bgimg-2">
          <div className="caption">
            <span className="next-border">"Capturing today's moments
            that will wow your heart tomorrow"</span>
          </div>
          </div>

          <div>
          <div id="galeria-section" className="article-two">
            <div id="navbar-gal" className="article-text">
              <h3 className="article-title-two">Galleria</h3>
            </div>
            <div className="galleria-container">
              <div className="row">
              {this.props.images.map((image) => (
                <div key={image.id} className="column" tabIndex="-1">
                <Link to='./gallery' tabIndex="-1">
                    <div className={image.mainclass} tabIndex="0"></div>
                </Link>
                </div>
              ))}
              </div>
            </div>
          </div>
          </div>

          <div className="bgimg-3">
          <div className="caption">
            <span className="next-border">"Get the most complete service experience with the best professional"</span>
          </div>
          </div>

          <div className="article-three">
          <div id="contact-us" className="article-text">
            <h3 className="article-title-two">CONTACT US</h3>
          </div>
          </div>

          <div>
          <div className="contact-field">
            <div className="msg-field">
            <h3 className="msg-title">Let's Talk</h3>
            <div className="under-line"></div>
            <div className="contact-info">
              <p>10801 Legacy Park St</p>
              <p>Houston. TX 77064</p>
              <p>Tel: 723-123-1212</p>
              <p>email@gmail.com</p>
            </div>
            <form id="message-form">
            <label htmlFor="name-input" className="input-form">
            <div className="input-field">
              <input
                id="name-input"
                className="input-user"
                placeholder="Name"
                required
                name="name"
                type="text"
                ></input>
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input-subject"
                placeholder="Last Name"
                required
                id="subject-input"
                name="lastname"
                ></input>
            </div>
            <div className="input-field">
              <input
                id="email-input"
                className="input-email"
                placeholder="Email"
                required
                name="email"
                type="email"
                ></input>
            </div>
            <div className="input-field">
              <textarea
                id="message-input"
                className="input-msg"
                placeholder="Message"
                required
                name="message"
                ></textarea>
            </div>
             <div>
               <div>
                 <button id="send-button" className="send-button">Send</button>
               </div>
             </div>
            </label>
            </form>
            </div>
            <div className="msg-section-img"></div>
          </div>
          </div>

          <div className="bgimg-4">
          <div className="caption">
            <span className="last-article-title">Enjoy This Journey</span>
            <div className="last-article-text">
            <p>I'm a paragraph. Click here to add
               your own text and edit me. It’s easy.
               Just click “Edit Text” or double click
               me to add your own content and make
               changes to the font. Feel free to drag
               and drop me anywhere you like on your
              page. I’m a great place for you to tell
              a story and let your users know a little
              more about you. ​ This is a great space to
              write long text about your company and your
              services.
            </p>
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default MainPage
