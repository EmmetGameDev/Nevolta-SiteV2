import Navbar from "../../Navbar";
import PageTopperPhoto from "../../helper/PageTopperPhoto";
import PageTopperHeading from "../../helper/PageTopperHeading";
import ScrollToTop from "../../helper/ScrollToTop";
import ConsoleIconScroller from "../../ConsoleIconScroller";
import DualColumnContentRow from "../../DualColumnContentRow";

import { PhotoNES, PhotoVertESP32 } from "../../../assets/photos";
import SiteFooter from "../../SiteFooter";

const text_split1 = (
    <>
        <p className="blogTextBlock">The <span className="text-font-alt">Nevolta V</span> uses a customized version of 
          open-source firmware for emulation, called <code className="codeBlock">retro-go</code>. You can learn more about it, on its Github page linked <a href="https://github.com/ducalex/retro-go" target="_blank" className="customLink">here</a></p>
          <p className="blogTextBlock">
            The device is capable of emulating:
            <ul className="consolesListCap dashed">
              <li className="scrollTextShowRight">- Game Boy</li>
              <li className="scrollTextShowRight">- Game Boy Color</li>
              <li className="scrollTextShowRight">- NES</li>
              <li className="scrollTextShowRight">- SNES</li>
              <li className="scrollTextShowRight">- Game & Watch</li>
              <li className="scrollTextShowRight">- SG-1000</li>
              <li className="scrollTextShowRight">- Sega Master System</li>
              <li className="scrollTextShowRight">- Sega Genesis</li>
              <li className="scrollTextShowRight">- Sega Game Gear</li>
              <li className="scrollTextShowRight">- Colecovision</li>
              <li className="scrollTextShowRight">- PC Engine</li>
              <li className="scrollTextShowRight">- Atari Lynx</li>
              <li className="scrollTextShowRight">- DOOM</li>
            </ul>
          </p>
          <p className="blogTextBlock">
            With the SNES being the heaviest console, using up the most recources during emulation.
          </p>
          
          <div className="clearfix">
            <div className="bigCodeHolder col-md-3">
              <code className="codeBlockLarge scrollTextShowUp">
                {`microSD
|
-> roms
    |
    -> gb
    -> gbc
    -> ...`}
              </code>
                </div>
                <p className="blogTextBlock">
                The games are stored on a microSD card, with the console-specific 
                roms in the folder structure shown on the side.
                </p>
                <p className="blogTextBlock">
                Names for all the necessary folder are specified in the firmware, 
                in every console tab of the launcher UI.
                </p>
                <p className="blogTextBlock">
                The sky is the limit! When it comes to storage, the microSD card is responsible for 
                the ammount of games you can have available at once. On the <a href="/Nevolta-SiteV2/model-v/specs" className="customLink">32GB microSD card we recommend</a> you can store up to 15 000 games!
                </p>
            </div>
    </>
)

function CapabilitiesPage(){
    return (
        <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
            <ScrollToTop/>
            <Navbar/>
            <PageTopperPhoto photoSrc={PhotoNES} />
            <div className="container text-center flex-grow-1">
                <PageTopperHeading title="Model V Capabilities"/>
                <ConsoleIconScroller/>
                <DualColumnContentRow photoAltText="esp32" photoSrc={PhotoVertESP32} heading_line1="" heading_line2="" description_line1="" description_line2="" extraComponent={text_split1} pushMobilePhoto={true}/>
            </div>
            <SiteFooter/>
            <script src="js/specsScript.js"></script>
        </div>
    )
}

export default CapabilitiesPage;