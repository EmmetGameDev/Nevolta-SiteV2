import Navbar from "../Navbar.tsx";
import SiteFooter from "../SiteFooter.tsx";
import DualColumnContentRow from "../DualColumnContentRow.js";
import PageTopperPhoto from "../helper/PageTopperPhoto.tsx";
import PageTopperHeading from "../helper/PageTopperHeading.tsx";

import { PhotoGrid, PhotoMe, PhotoPlant } from "../../assets/photos/index.js";
import './AboutSite.css';
import ScrollToTop from "../helper/ScrollToTop.tsx";

function PrivacySite(){
  return (
    <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
      <ScrollToTop/>
      <Navbar/>
      <div className="container text-center flex-grow-1">
        <PageTopperHeading title="Privacy Policy"/>
        <p className="blogTextBlock">
          Last updated: 24.06.2024
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Who I am
        </p>
        <p className="blogTextBlock">
          This website is operated by Tomasz Gerka.
        </p>
        <p className="blogTextBlock">
          If you have questions about this policy, you can contact me at: nevolta.systems@gmail.com.
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Information Collected
        </p>
        <p className="blogTextBlock">
          This website does not require user accounts and does not intentionally collect personal information from visitors.
        </p>
        <p className="blogTextBlock">
          The web server may automatically process technical information necessary to deliver the website, such as IP addresses, browser type, and request details.
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Analytics
        </p>
        <p className="blogTextBlock">
          This website uses Vercel Web Analytics to understand overall website traffic and improve content.
        </p>
        <p className="blogTextBlock">
          Vercel Web Analytics does not use cookies, collects anonymous and aggregated usage statistics, does not identify individual visitors, and does not track users across different websites.
        </p>
        <p className="blogTextBlock">
          Analytics information may include pages visited, referring websites, browser type, device type, country or region, and the date and time of visits.
        </p>
        <p className="blogTextBlock">
          This information is used only for aggregated statistics and website improvement.
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Third-Party Services
        </p>
        <p className="blogTextBlock">
          This website is hosted by Vercel. Hosting providers may process technical information necessary to deliver the website and maintain security.
        </p>
        <p className="blogTextBlock">
          This website may embed videos hosted by YouTube using YouTube’s privacy-enhanced mode. When a video is loaded or played, YouTube may process technical information such as your IP address, browser information, and device information.
        </p>
        <p className="blogTextBlock">
          YouTube may set cookies or use similar technologies when you choose to the videos. For more information about how YouTube and Google process personal data, please refer to <a href="https://policies.google.com/privacy" target="_blank" className="customLink">Google’s Privacy Policy</a>.
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Your Rights
        </p>
        <p className="blogTextBlock">
          If you are located in the European Economic Area (EEA), you may have rights under applicable data protection laws, including the right to request information about personal data processed about you.
        </p>
        <br/>
        <p className="blogTextBlock text-font-alt">
          Changes
        </p>
        <p className="blogTextBlock">
          This Privacy Policy may be updated from time to time. Any changes will be published on this page.
        </p>
        <br/>
      </div>
      <SiteFooter/>
      <script src="js/specsScript.js"></script>
    </div>
  )
}

export default PrivacySite;