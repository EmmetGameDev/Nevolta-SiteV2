import { NevoltaTextLogo } from "../assets/svgs";

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
                <li className="footerItem">
                  <a className="underline-anim" href="about.html">About us</a>
                </li>
                <li className="footerItem">
                  <a className="underline-anim" href="contact.html">Contact us</a>
                </li>
                <li className="footerItem">
                  <a className="underline-anim" href="products.html">Our products</a>
                </li>
                <li className="footerItem">
                  <a className="underline-anim" href="#">Home page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SiteFooter;