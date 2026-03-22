import { NevoltaTextLogo } from "../assets/svgs";
import FooterNavLink from "./helper/FooterNavLink";

function SiteFooter(){
    return (
      <div className="siteFooter">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 footerCol">
              <img className="footerLogo" src={NevoltaTextLogo} alt="Logo" width="100%" height="50px"/>
              <p className="textCopyright">© 2026, Tomasz Gerka</p>
            </div>
            <div className="col-md-4">
              <ul className="footerLinksList">
                <FooterNavLink text="About us" href="/about" />
                <FooterNavLink text="Contact us" href="/contact" />
                <FooterNavLink text="Our products" href="/products" />
                <FooterNavLink text="Home page" href="/" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SiteFooter;