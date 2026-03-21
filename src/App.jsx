import { useState } from 'react'

// komponenty React
import NavLink from './components/helper/NavLink.tsx';
import Navbar from './components/Navbar.tsx';
import GridCard from './components/helper/GridCard.tsx';
import ConsoleScroller from './components/ConsoleScroller.tsx';
import LandingPageFront from './components/LandingPageFront.tsx';
import LandingPageFrontSplit from './components/LandingPageFrontSplit.tsx';

// import obrazka jako obiekt React
import { NevoltaTextLogo } from './assets/svgs/index.js';
import { PhotoCapabilities, PhotoPCBQuarter, PhotoQuarter, PhotoConsoleFrontVert, PhotoVertESP32, PhotoSky } from './assets/photos/index.js';
import { Tap, Twotone, Rounded, Buttons, Dpad } from './assets/icons/index.js';

import "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import '../src/scripts/specsScript.js';
import '../src/scripts/scripts.js';


import './App.css';

function App() {
  return (
    <div className='container-fluid m-0 p-0'>
    <Navbar/>
    <div className="container text-center">
      <div className="row">
        <LandingPageFrontSplit title="Watch the full build process of the all new " modelName="Nevolta V!" videoSrc="https://www.youtube.com/embed/PUARhIlPBy8?controls=0&modestbranding=1&rel=0" />
      </div>
      <div className="row">
        <GridCard
          header="Specifications"
          description="See the hardware specs of the Nevolta V."
          imgSrc={PhotoPCBQuarter}
          btnHref="specs.html"
        />
        <GridCard
          header="Capabilities"
          description="Learn what is possible with the Nevolta V."
          imgSrc={PhotoCapabilities}
          btnHref="capabilities.html"
        />
        <GridCard
          header="Kits"
          description="Buy plug and play, DIY, and bundled kits."
          imgSrc={PhotoQuarter}
          btnHref="kits.html"
        />
      </div>
      <div className="row">
        <ConsoleScroller />
      </div>
      <div className="row contentRow">
        <div className="col-md">
          <div className="photoColumn">
            <img className="photoColumnImg" src={PhotoConsoleFrontVert} alt="Console"/>
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
                - Smooth, matte finish <img src={Tap} className="smallIcon" alt="finish"/>
              </p>
              <p className="columnText textPointer">
                - Black or white shell <img src={Twotone} className="smallIcon" alt="twotone"/>
              </p>
              <p className="columnText textPointer">
                - Rounded corners <img src={Rounded} className="smallIcon" alt="corners"/>
              </p>
              <p className="columnText textPointer">
                - Quiet, tactile buttons <img src={Buttons} className="smallIcon" alt="button"/>
              </p>
              <p className="columnText textPointer">
                - Responsive DPad <img src={Dpad} className="smallIcon" alt="button"/>
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
            <img className="photoColumnImg" src={PhotoVertESP32} alt="Console"/>
          </div>
        </div>
      </div>
      <div className="row contentRow">
        <div className="photoColumn photoHorizontal">
            <img className="photoColumnImg" src={PhotoSky} alt="Console"/>
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
              Escape the constant buzz of modern life and dive into your favorite retro games. With the <span className="text-font-alt"> Model V</span>, it’s just you and the classics. No notifications, no reminders. Pure, uninterrupted fun.
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
            <img className="footerLogo" src={NevoltaTextLogo} alt="Logo" width="100%" height="50px"/>
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

export default App;
