import Navbar from "../Navbar";
import SiteFooter from "../SiteFooter";
import DualComponentRow from "../DualComponentRow.tsx";
import PageTopperPhoto from "../helper/PageTopperPhoto.tsx";
import PageTopperHeading from "../helper/PageTopperHeading.tsx";
import Accordion from "../helper/Accordion.tsx";

import ScrollToTop from "../helper/ScrollToTop.tsx";
import { PhotoWhiteHoldPlant2 } from "../../assets/photos/index.js";
import { Envelope } from "../../assets/icons/index.js";

const contact_info = (
    <div className="col-md contactSpacer">
        <div className="contactTextLine">
            <img className="iconContact" src={Envelope} alt="mail"/>
            <h3 className="contactTextEl">E-Mail:</h3>
            <a className="linkMail" href="mailto:nevolta.systems@gmail.com">nevolta.systems@gmail.com</a>
        </div>
    </div>
)

function ContactPage(){
    return (
        <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
            <ScrollToTop/>
            <Navbar/>
            <PageTopperPhoto photoSrc={PhotoWhiteHoldPlant2} />
            <div className="container text-center flex-grow-1">
                <PageTopperHeading title="Contact Us"/>
                <DualComponentRow component1={contact_info} component2={Accordion({ title: "FAQ", content: "Sample FAQ content" })}/>
            </div>
            <SiteFooter/>
            <script src="js/specsScript.js"></script>
        </div>
    )
}

export default ContactPage;