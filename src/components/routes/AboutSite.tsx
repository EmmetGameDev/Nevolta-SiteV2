import Navbar from "../Navbar";
import SiteFooter from "../SiteFooter";
import DualColumnContentRow from "../DualColumnContentRow.js";
import PageTopperPhoto from "../helper/PageTopperPhoto.tsx";
import PageTopperHeading from "../helper/PageTopperHeading.tsx";

import { PhotoGrid, PhotoMe, PhotoPlant } from "../../assets/photos/index.js";
import './AboutSite.css';
import ScrollToTop from "../helper/ScrollToTop.tsx";

const text_split1 =
    (
        <div className="col-md blogSmallText">
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
    <div className="col-md order-1 order-md-2 blogSmallText">
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

const text_split3 = (
    <div className="col-md blogSmallText">
      <h1 className="aboutUsHeading"><span className="text-font-alt"> This Website </span></h1>
      <p className="blogTextBlock">
        The first iteration of this website was written in raw HTML, CSS, and JS. No quirks, or any other tools.
      </p>
      <p className="blogTextBlock">
        The only reason you are looking at it in a (I hope) working state, is because of my good friend <b>Mikołaj</b>.
      </p>
      <p className="blogTextBlock">
        He was the guy to rewrite this website in React take it out of the stone age in terms of programming.
      </p>
      <p className="blogTextBlock">
        Huge thanks to <b>Mikołaj</b> for taking on this task, and becoming part of the Nevolta Systems history! 
      </p>
      <p className="blogTextBlock">

      </p>
    </div>
)


function AboutSite(){
  return (
    <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
      <ScrollToTop/>
      <Navbar/>
      <PageTopperPhoto photoSrc={PhotoPlant} />
      <div className="container text-center flex-grow-1">
        <PageTopperHeading title="About Nevolta Systems"/>
        <DualColumnContentRow photoAltText="siteStory" photoSrc={PhotoGrid} heading_line1="" heading_line2="" description_line1="" description_line2="" extraComponent={text_split1} pushMobilePhoto={true}/>
        <DualColumnContentRow photoAltText="thisisme!" photoSrc={PhotoMe}  heading_line1="" heading_line2="" description_line1="" description_line2="" ifLeftPhoto={true} extraComponent={text_split2} pushMobilePhoto={false}/>
        <DualColumnContentRow photoAltText="console_grid" photoSrc={PhotoGrid} heading_line1="" heading_line2="" description_line1="" description_line2="" extraComponent={text_split3} pushMobilePhoto={true}/>
      </div>
      <SiteFooter/>
      <script src="js/specsScript.js"></script>
    </div>
  )
}

export default AboutSite;