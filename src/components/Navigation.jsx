import  { useState } from 'react';
import ispsc_logo from './../assets/logo.png'
import Clock from './Clock';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleNav = () => {
    setIsNavToggled((prevIsNavToggled) => !prevIsNavToggled);
  };

    return (
        <>
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
          <div id="hamburger" className={`hamburger-menu ${isNavToggled ? 'active' : ''}`} onClick={toggleNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-link ${isNavToggled ? 'navbar-toggled' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          </nav>
        </header>
        </>
        
      );
    
}

export default Navigation;