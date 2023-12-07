import React from 'react';
import ispsc_logo from './../assets/logo.png'
import Clock from './Clock';

function Navigation() {
    return (
        <div>
        <header className="masthead">
          <div className="header-masthead">
            <div className="row">
              <div className="col-8">
                <div className="logo">
                  <div className="image-logo">
                    <img src={ispsc_logo} className="logo" alt="ISPSC Logo" />
                  </div>
                  <div className="text-logo">
                    <div id="agency-heading">Republic of the Philippines</div>
                    <div id="agency-name">Ilocos Sur Polytechnic State College</div>
                    <div id="agency-tagline">Tagudin Campus | Tagudin, Ilocos Sur</div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div id="pst-container">
                  <div>Philippine Standard Time:</div>
                  <div id="pst-time">
                    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}><Clock></Clock></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div id="hamburger" className="hamburger-menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className="nav-link">
              <li><a href="index.html">Home</a></li>
              <li>About ISPSC
                <ul className="sub-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="mission-and-vision.html">Mission & Vision</a></li>
                  <li><a href="hymn.html">Hymn</a></li>
                </ul>
              </li>
              <li><a href="course-offered.html">What We Offer</a></li>
              <li>Be an ISPSCian
                <ul className="sub-menu">
                  <li><a href="admission.html">Admission Requirements</a></li>
                  <li><a href="procedure-for-enrollment.html">Procedure for Enrollment</a></li>
                </ul>
              </li>
              <li><a href="contacts.html">Contacts</a></li>
            </ul>
          </nav>
        </header>
        </div>
      );
    
}

export default Navigation;