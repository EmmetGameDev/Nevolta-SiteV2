import Navbar from "../Navbar.tsx";
import SiteFooter from "../SiteFooter.tsx";
import DualColumnContentRow from "../DualColumnContentRow.js";
import PageTopperPhoto from "../helper/PageTopperPhoto.tsx";
import PageTopperHeading from "../helper/PageTopperHeading.tsx";

import { PhotoGrid, PhotoMe, PhotoPlant } from "../../assets/photos/index.js";
import './AboutSite.css';
import ScrollToTop from "../helper/ScrollToTop.tsx";

function CookieSite(){
  return (
    <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
      <ScrollToTop/>
      <Navbar/>
      <div className="container text-center flex-grow-1">
        <PageTopperHeading title="Cookies"/>
        <p className="blogTextBlock">
          Last updated: 24.06.2024
        </p>
        <br/>
        <p className="blogTextBlock">
          This website uses Vercel Web Analytics to measure overall website traffic. Vercel Web Analytics does not use cookies and provides anonymous, aggregated usage statistics.
        </p>
        <p className="blogTextBlock">
          This website does not use cookies for advertising or visitor tracking.
        </p>
        <p className="blogTextBlock">
          Embedded YouTube videos may set cookies or use similar technologies when you choose to play a video. These cookies are controlled by YouTube and Google and may be used to provide video playback, security, and related functionality.
        </p>
        <p className="blogTextBlock">
          You can manage or delete cookies through your browser settings. For more information about how Google uses data, please refer to Google’s Privacy Policy.
        </p>
        <br/>
      </div>
      <SiteFooter/>
      <script src="js/specsScript.js"></script>
    </div>
  )
}

export default CookieSite;