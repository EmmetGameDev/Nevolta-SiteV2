import ScrollToTop from "../../helper/ScrollToTop.tsx";
import Navbar from "../../Navbar.tsx";
import SiteFooter from "../../SiteFooter.tsx";
import KitPageTopper from "../../KitsPageTopper.tsx";

import { ModelVData } from "../../../scripts/consoleOfferingData.ts";
import { PhotoLaunchSale } from "../../../assets/photos/index.js";

function KitsPage(){
    return (
        <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
            <ScrollToTop/>
            <Navbar/>
            <div className="container text-center flex-grow-1">
                <KitPageTopper cons={ModelVData}/>
                <div className="row kitRow">
                    <div className="col-md-6 contactSpacer">
                        <div className="photoHorizontal photoFullArtDiv ">
                            <img src={PhotoLaunchSale} className="photoFullArt" alt="sale"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="kitsTextBlock">
                            The <span className="text-font-alt">Nevolta V</span> is the entry-level Nevolta experience, we 
                            provide. This device is a great way of getting to know all of the fan-favourite retro game
                            titles, enabling the user to emulate on the go.<br/>
                            To check out more about what the console can do, check the <a href="/model-v/capabilities" className="customLink">Capabilities Page</a>
                        </p>
                        <p className="kitsTextBlock">
                            We have put together a powerful, and yet, a mobile device. With the ESP32S3 chip at its heart,
                            the console is capable of smooth emulation, for extended periods of time.
                            To learn more about the consoles hardware, visit the <a href="/model-v/specs" className="customLink">Specifications Page</a>
                        </p>
                    </div>
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default KitsPage;