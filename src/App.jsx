// komponenty React
import Navbar from './components/Navbar.tsx';
import GridCard from './components/helper/GridCard.tsx';
import ConsoleScroller from './components/ConsoleScroller.tsx';
import LandingPageFrontSplit from './components/LandingPageFrontSplit.tsx';
import DualColumnContentRow from './components/DualColumnContentRow.tsx';
import FeaturesList from './components/helper/FeaturesList.tsx';
import FullWidthPhotoRow from './components/helper/FullWidthPhotoRow.tsx';
import SiteFooter from './components/SiteFooter.tsx';
import ScrollToTop from './components/helper/ScrollToTop.tsx';
import DualColumnTextRow from './components/DualColumnTextRow.tsx';
import FeatureGrid from './components/helper/FeatureGrid.tsx';
import LargeButton from './components/helper/LargeButton.tsx';

// import obrazka jako obiekt React
import { PhotoCapabilities, PhotoPCBQuarter, PhotoQuarter, PhotoConsoleFrontVert, PhotoVertESP32, PhotoSky } from './assets/photos/index.js';

import './scripts/scripts.js';
import './index.css';


function App() {
  return (
      <div className='container-fluid m-0 p-0'>
        <ScrollToTop/>
        <Navbar/>
        <div className="container text-center">
          <LandingPageFrontSplit title="Watch the full build process of the all new " modelName="Nevolta V!" videoSrc="https://www.youtube.com/embed/PUARhIlPBy8?controls=0&modestbranding=1&rel=0" />
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
              description="Buy plug and play or DIY kits for the new Nevolta V."
              imgSrc={PhotoQuarter}
              btnHref="kits.html"
            />
          </div>
          <ConsoleScroller/>
          <DualColumnContentRow
            photoAltText="Console"
            photoSrc={PhotoConsoleFrontVert}
            heading_line1="Where the old"
            heading_line2="meets the new"
            description_line1="The Model V brings retro gaming to life in a fresh new way. It emulates your favorite old-school systems while wrapped in a smooth form made for today."
            description_line2="Experience the best of both worlds with the Nevolta V."
            extraComponent={FeaturesList()}
            ifLeftPhoto={true}
          />
          <DualColumnContentRow
            photoAltText="ESP32"
            photoSrc={PhotoVertESP32}
            heading_line1="The ESP32-S3"
            heading_line2="beating heart"
            description_line1="Powered by the featherlight ESP32-S3 chip, the Model V  packs big performance into a tiny package. Enjoy lightning-fast emulation, without sacrificing battery. Retro never felt so effortless."
            description_line2="The Nevolta V is ~10 000 times more powerful than the original Game Boy, and ~500 times stronger than the SNES*."
            extraComponent={FeatureGrid()}
            ifLeftPhoto={false}
            pushMobilePhoto={true}
          />
          <FullWidthPhotoRow photoSrc={PhotoSky} photoAltText="Sky" />
          <DualColumnTextRow
            Headingline1="No distractions,"
            Headingline2="just nostalgia."
            Paragraph="Escape the constant buzz of modern life and dive into your favorite retro games. With the Model V, it’s just you and the classics. No notifications, no reminders. Pure, uninterrupted fun."
            OtherElement={LargeButton({ text: "Get Yours", href: "/kits" }) }
          />
        </div>
        <SiteFooter/>
      </div>
  )
}

export default App;
