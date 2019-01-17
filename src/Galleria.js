import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import './App.css';

class Galleria extends Component {

  render() {
    const images = [
     {
       original: 'http://localhost:3000/static/media/newborn.b5d1945a.jpg',
       thumbnail: 'http://localhost:3000/static/media/newborn.b5d1945a.jpg'
     },
     {
       original: 'http://localhost:3000/static/media/couple.cd5b1408.jpg',
       thumbnail: 'http://localhost:3000/static/media/couple.cd5b1408.jpg'
     },
     {
       original: 'http://localhost:3000/static/media/babies1.57a212ed.jpg',
       thumbnail: 'http://localhost:3000/static/media/babies1.57a212ed.jpg'
     },
     {
       original: 'http://localhost:3000/static/media/pregnancy.e67eef7a.jpg',
       thumbnail: 'http://localhost:3000/static/media/pregnancy.e67eef7a.jpg'
     },
     {
       original: 'http://localhost:3000/static/media/wedding-one.9b218025.jpg',
       thumbnail: 'http://localhost:3000/static/media/wedding-one.9b218025.jpg'
     },
     {
       original: 'http://localhost:3000/static/media/model.f90f2fda.jpg',
       thumbnail: 'http://localhost:3000/static/media/model.f90f2fda.jpg'
     }
   ]
    return (
      <div className="bookonline-container">
        <div className="fade-in one">
          <div className="page-title">Galleria</div>
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
        <ImageGallery items={images} />
        </div>
        <div className="footer-line"></div>
      </div>
    )
  }
}

export default Galleria
