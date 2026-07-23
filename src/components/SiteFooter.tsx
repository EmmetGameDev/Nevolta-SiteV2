import { NevoltaTextLogo } from "../assets/svgs";
import FooterNavLink from "./helper/FooterNavLink";

function SiteFooter(){
    return (
      <div className="siteFooter">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 footerCol">
              <img className="footerLogo" src={NevoltaTextLogo} alt="Logo" width="100%" height="50px"/>
              <p className="textCopyright">© 2026, Tomasz Gerka</p>
            </div>
            <div className="col-md-3 footerCol">
              <ul className="footerLinksList">
                <FooterNavLink text="About us" href="/about" newTab={false} />
                <FooterNavLink text="Our store" href="https://shop.nevoltasystems.com/" newTab={true} />
                <FooterNavLink text="Our blog" href="/blog" newTab={false} />
                <FooterNavLink text="Home page" href="/" newTab={false} />
              </ul>
            </div>
            <div className="col-md-3 footerCol">
              <ul className="footerLinksList">
                <FooterNavLink text="Privacy policy" href="/privacy" newTab={false} />
                <FooterNavLink text="Cookie policy" href="/cookies" newTab={false} />
                <FooterNavLink text="Contact us" href="/contact" newTab={false} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SiteFooter;