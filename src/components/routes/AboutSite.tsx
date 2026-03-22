import Navbar from "../Navbar";
import SiteFooter from "../SiteFooter";
import DualColumnContentRow from "../DualColumnContentRow.js";

import { PhotoGrid, PhotoMe, PhotoPlant } from "../../assets/photos/index.js";
import './AboutSite.css';
import ScrollToTop from "../helper/ScrollToTop.tsx";

const text_split1 =
    (
        <div className="col-md">
          <p className="blogTextBlock">
            Our mission is to create game consoles that invoke feelings lost in time,
            but in a modern fashion.
          </p>
          <p className="blogTextBlock">
            We deeply believe, that the uniqueness, passion and joy that retro games bring is truly
            something exclusive to those old-fashioned titles.
          </p>
          <p className="blogTextBlock">
            That feeling, unobtainable anywhere else, paired with modern innovation
            and technology, creates a medium of joy, remaining accessible to many.
          </p>
          <p className="blogTextBlock">
            This brings us to today, where the passion for gaming and design have come together to create
            what you now know as<span className="text-font-alt"> Nevolta Systems</span>
          </p>
        </div>
    )
const text_split2 = (
    <div className="col-md order-1 order-md-2">
          <h1 className="aboutUsHeading"><span className="text-font-alt"> Meet the team! </span></h1>
          <p className="blogTextBlock">
            Nevolta started with me, Tom - who one day had an itch to play some old pokemon games!
          </p>
          <p className="blogTextBlock">
            I am (as you can tell) a retro-game enthusiast. This coupled with my passion for electronics
            and design made me crave making a perfect retro emulation device, which is why we are here!
          </p>
          <p className="blogTextBlock">
            I am currently the only person on the team, except...
          </p>
          <p className="blogTextBlock">
            <b>YOU! You are part of the team!</b>
          </p>
          <p className="blogTextBlock">
            The fact, that you show enough of an interest towards Nevolta to read this, means the world
            to me. Thank you for all of the support, and welcome to the team!
          </p>
          <p className="blogTextBlock">

          </p>
        </div>
)
const text_under_image = (
    <p>Nevolta Founder, Tomasz Gerka</p>
)


function AboutSite(){
    return (
        <div className="container-fluid m-0 p-0">
          <ScrollToTop/>
          <Navbar/>
        <div className="container-fluid">
        <div className="mainPhotoDiv mainPhotoAboutDiv" style={{
            backgroundImage: `url(${PhotoPlant})`
        }}></div>
        </div>
        <div className="container text-center">
            <div className="row blogRow">
                <div className="col-lg-12">
                <h1 className="blogHeading text-font-alt"><b>About us</b></h1>
                </div>
            </div>
        <DualColumnContentRow photoAltText="console_grid" photoSrc={PhotoGrid} heading_line1="" heading_line2="" description_line1="" description_line2="" extraComponent={text_split1}/>
        <DualColumnContentRow photoAltText="thisisme!" photoSrc={PhotoMe}  heading_line1="" heading_line2="" description_line1="" description_line2="" ifLeftPhoto={true} extraComponent={text_split2}/>
        <DualColumnContentRow photoAltText="" photoSrc={""} heading_line1="" heading_line2="" description_line1="" description_line2="" extraComponent={text_under_image}/>
        </div>
        <SiteFooter/>

    <script src="js/specsScript.js"></script>
        </div>
    )
}

export default AboutSite;