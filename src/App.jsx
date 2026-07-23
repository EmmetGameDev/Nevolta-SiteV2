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
import { PhotoCapabilities, N32_PCB, N32_HeldBlack, N32_WhiteVert, N32_32Vert, N32_SkyShot } from './assets/photos/index.js';

import './scripts/scripts.js';
import './index.css';

function App() {
  return (
      <div className='container-fluid m-0 p-0 d-flex flex-column min-vh-100'>
        <ScrollToTop/>
        <Navbar/>
        <div className="container text-center flex-grow-1">
          <LandingPageFrontSplit title="Watch the full build process of the all new " modelName="Nevolta32!" videoSrc="https://www.youtube-nocookie.com/embed/sddctJ3Ue2Y?controls=0&modestbranding=1&rel=0" />
          <div className="row">
            <GridCard
              header="Specifications"
              description="See the hardware specs of the Nevolta32."
              imgSrc={N32_PCB}
              btnHref="/nevolta32/specs"
            />
            <GridCard
              header="Capabilities"
              description="Learn what is possible with the Nevolta32."
              imgSrc={PhotoCapabilities}
              btnHref="/nevolta32/capabilities"
            />
            <GridCard
              header="Blog"
              description="Read the latest news about our projects."
              imgSrc={N32_HeldBlack}
              btnHref="/blog"
            />
          </div>
          <ConsoleScroller/>
          <DualColumnContentRow
            photoAltText="Console"
            photoSrc={N32_WhiteVert}
            heading_line1="Where the old"
            heading_line2="meets the new"
            description_line1="The Nevolta32 brings retro gaming to life in a fresh and new way. It emulates your favorite old-school systems while wrapped in a smooth form made for today."
            description_line2="Experience the best of both worlds with the Nevolta32."
            extraComponent={FeaturesList()}
            ifLeftPhoto={true}
          />
          <DualColumnContentRow
            photoAltText="ESP32"
            photoSrc={N32_32Vert}
            heading_line1="The ESP32-S3"
            heading_line2="beating heart"
            description_line1="Powered by the featherlight ESP32-S3 chip, the Nevolta32  packs big performance into a tiny package. Enjoy lightning-fast emulation, without sacrificing battery. Retro never felt so effortless."
            description_line2="The Nevolta32 is ~500 times more powerful than the original Game Boy, and ~150 times stronger than the SNES. (simplified)"
            extraComponent={FeatureGrid()}
            ifLeftPhoto={false}
            pushMobilePhoto={true}
          />
          <FullWidthPhotoRow photoSrc={N32_SkyShot} photoAltText="Sky" />
          <DualColumnTextRow
            Headingline1="No distractions,"
            Headingline2="just nostalgia."
            Paragraph="Escape the constant buzz of modern life and dive into your favorite retro games. With the Nevolta32, it’s just you and the classics. No notifications, no reminders. Pure, uninterrupted fun."
            OtherElement={LargeButton({ text: "Get Yours", href: "https://shop.nevoltasystems.com/products/nevolta32-console" }) }
          />
        </div>
        <SiteFooter/>
      </div>
  )
}

export default App;
