import { useState } from 'react'
import aboutUs_white from '../src/assets/icons/aboutUs_white';
import aboutUs from '../src/assets/icons/aboutUs';
import accordionOpen from '../src/assets/icons/buttons';
import contact_white from '../src/assets/icons/contact_white';
import dpad from '../src/assets/icons/dpad';
import envelope from '../src/assets/icons/envelope';
import home_white from '../src/assets/icons/home_white';
import home from '../src/assets/icons/home';
import joystick from '../src/assets/icons/joystick';
import products_white from '../src/assets/icons/products_white';
import products from '../src/assets/icons/products';
import rounded from '../src/assets/icons/rounded';
import star2 from '../src/assets/icons/star2';
import tap from '../src/assets/icons/tap';
import twotone from '../src/assets/icons/twotone';
//import obrazka jako obiekt React
import NevoltaTextLogo from './assets/NevoltaTextLogo.svg';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid m-0'>
    <nav className="navbar sticky-top navbar-expand-lg" id="MainNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="NavLogoText">
            {/* Uzycie obiektu obrazu w nawiasach kedzierzawych */}
            <img src={NevoltaTextLogo} alt="Logo" width="100%" height="50px" className="d-inline-block align-text-center"/>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="NavBurgerMenu">
            <span className="navbar-toggler-icon" id="NavBurgerIcon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active underline-anim" aria-current="page" href="#">Home <img className="nav-icon" alt="H" width="16px" height="16px" src={home}/></a>
              <a className="nav-link underline-anim" href="products.html">Products <img className="nav-icon" alt="P" width="16px" height="16px" src={products}/></a>
              <a className="nav-link underline-anim" href="about.html">About us <img className="nav-icon" alt="A" width="16px" height="16px" src={aboutUs}/></a>
              <a className="nav-link underline-anim" href="contact.html">Contact <img className="nav-icon" alt="C" width="16px" height="16px" src={aboutUs}/></a>
            </div>
          </div>
        </div>
    </nav>
    <div className="container text-center">
      <div className="row">
        <video autoPlay muted loop preload="auto" id="myVideo">
          <source src="img/Footage.mp4" type="video/mp4"/>
        </video>
        <h1 className="text-alt-heading"><span className="txt-rotate" data-period="1000" data-rotate='["13 consoles.", "15000 games.", "1 system.", "1 ESP32."]'></span></h1>
        <h3 className="allNewText">The all new<span className="text-font-alt modelName"> Nevolta V</span></h3>
        <a className="emptyLink" href="kits.html">
          <button className="getYoursBtn">
            <div className="getYoursBtnText">
              Get Yours
            </div>
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card blur-bg mainCard">
            <img src="img/photos/P1050514.JPG" className="card-img-top mainCardImage" alt="Specs"/>
            <div className="card-body">
              <h5 className="card-title text-font-alt">Specifications</h5>
              <p className="card-text">See the hardware specs of <span className="text-font-alt"> Nevolta V</span></p>
              <a href="specs.html" className="cstmButton">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card blur-bg mainCard">
            <img src="img/Capabilities.png" className="card-img-top mainCardImage" alt="Capabilities"/>
            <div className="card-body">
              <h5 className="card-title text-font-alt">Capabilities</h5>
              <p className="card-text">Learn what is possible with <span className="text-font-alt">Nevolta V</span></p>
              <a href="capabilities.html" className="cstmButton">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card blur-bg mainCard">
            <img src="img/photos/P1050486.JPG" className="card-img-top mainCardImage kitsImg" alt="Kits"/>
            <div className="card-body">
              <h5 className="card-title text-font-alt">Kits</h5>
              <p className="card-text">Buy <i>plug and play</i>, DIY, and bundled kits.</p>
              <a href="kits.html" className="cstmButton">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapScrollingText">
          <div className="scrollTrack">
            <div className="scrollBox">
              <h3>
                Game Boy
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Game Boy Color
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Nintendo
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Super Nintendo
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Lynx
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Coleco vision
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                PC Engine
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                DOOM
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                SG-1000
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Sega Master System
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Sega Genesis
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Game Gear
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Game Boy
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Game Boy Color
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Nintendo
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Super Nintendo
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Lynx
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Coleco vision
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                PC Engine
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                DOOM
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                SG-1000
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Sega Master System
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Sega Genesis
              </h3>
            </div>
            <div className="scrollBox">
              <h3>
                Game Gear
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row contentRow">
        <div className="col-md">
          <div className="photoColumn">
            <img className="photoColumnImg" src="img/photos/P1050484_rot.JPG" alt="Console"/>
          </div>
        </div>
        <div className="col-md">
          <div className="contentColumn">
            <h1 className="text-font-alt columnHeading">
              Where the old <br/>
              meets the new
            </h1>
            <p className="columnText">
              The<span className="text-font-alt"> Model V </span> brings retro gaming to life in a fresh new way. It emulates your favorite old-school systems while wrapped in a smooth form made for today.
            </p>
            <div className="textPointerHolder">
              <p className="columnText textPointer textPointerFirst">
                - Smooth, matte finish <img src={tap} className="smallIcon" alt="finish"/>
              </p>
              <p className="columnText textPointer">
                - Black or white shell <img src={twotone} className="smallIcon" alt="twotone"/>
              </p>
              <p className="columnText textPointer">
                - Rounded corners <img src={rounded} className="smallIcon" alt="corners"/>
              </p>
              <p className="columnText textPointer">
                - Quiet, tactile buttons <img src={buttons} className="smallIcon" alt="button"/>
              </p>
              <p className="columnText textPointer">
                - Responsive DPad <img src={dpad} className="smallIcon" alt="button"/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row contentRow">
        
      </div>
      <div className="row contentRow">
        <div className="col-md order-2 order-md-1">
          <div className="contentColumn">
            <h1 className="text-font-alt columnHeadingR">
              The ESP32-S3 <br/>
              beating heart
            </h1>
            <p className="columnTextR">
              Powered by the featherlight ESP32-S3 chip, the <span className="text-font-alt"> Model V </span> packs big performance into a tiny package. Enjoy lightning-fast emulation, without sacrificing battery. Retro never felt so effortless.
            </p>
            <div className="chartHolder">
              <div id="chart" className="chart"></div>
            </div>
            <p className="columnTextR">
                The Nevolta V is ~10 000 times more powerful than the original Game Boy, and ~500 times stronger than the SNES*.
            </p>
            <p className="columnTextR smallAstrix">
                * simplified data
            </p>
          </div>
        </div>
        <div className="col-md order-1 order-md-2">
          <div className="photoColumn">
            <img className="photoColumnImg" src="img/photos/P1050498.JPG" alt="Console"/>
          </div>
        </div>
      </div>
      <div className="row contentRow">
        <div className="photoColumn photoHorizontal">
            <img className="photoColumnImg" src="img/photos/P1050500.JPG" alt="Console"/>
        </div>
      </div>
      <div className="row contentRow">
        <div className="col-md">
          <div className="contentColumn">
            <h1 className="text-font-alt columnHeading headingPhotoHorizontal photoBottomPage">
              No distractions, <br/>
              just nostalgia.
            </h1>
            <p className="columnText">
              Escape the constant buzz of modern life and dive into your favorite retro games. With the <span className="text-font-alt"> Model V</span>, it’s just you and the classNameics. No notifications, no reminders. Pure, uninterrupted fun.
            </p>
          </div>
        </div>
        <div className="col-md">
          <div className="contentColumn">
            <a className="emptyLink" href="kits.html">
              <button className="getYoursBtn btnBottomPage">
                <div className="getYoursBtnText">
                  Get yours
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="siteFooter">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 footerCol">
            <img className="footerLogo" src="img/NevoltaTextLogo.svg" alt="Logo" width="100%" height="50px"/>
            <p className="textCopyright">© 2025, Tomasz Gerka</p>
          </div>
          <div className="col-md-4">
            <ul className="footerLinksList">
              <li className="footerItem">
                <a className="underline-anim" href="about.html">About us</a>
              </li>
              <li className="footerItem">
                <a className="underline-anim" href="contact.html">Contact us</a>
              </li>
              <li className="footerItem">
                <a className="underline-anim" href="products.html">Our products</a>
              </li>
              <li className="footerItem">
                <a className="underline-anim" href="#">Home page</a>
              </li>
            </ul>
          </div>
        </div>  
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="js/scripts.js"></script>
    </div>
  )
}

export default App
