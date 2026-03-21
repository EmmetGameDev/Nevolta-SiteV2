import NavLink from './helper/NavLink.tsx';
import { Products, Home, AboutUs, Envelope } from '../assets/icons/index.js';
import { NevoltaTextLogo } from '../assets/svgs/index.js';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg" id="MainNav">
                <div className="container-fluid">
                  <a className="navbar-brand" href="index.html" id="NavLogoText">
                    {/* Uzycie obiektu obrazu w nawiasach kedzierzawych */}
                    <img src={NevoltaTextLogo} alt="Logo" width="100%" height="50px" className="d-inline-block align-text-center"/>
                  </a>
                  <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="NavBurgerMenu">
                    <span className="navbar-toggler-icon" id="NavBurgerIcon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <NavLink href="index.html" text="Home" iconSrc={Home} />
                      <NavLink href="products.html" text="Products" iconSrc={Products} />
                      <NavLink href="about.html" text="About us" iconSrc={AboutUs} />
                      <NavLink href="contact.html" text="Contact" iconSrc={Envelope} />
                    </div>
                  </div>
                </div>
        </nav>
    )
}

export default Navbar;