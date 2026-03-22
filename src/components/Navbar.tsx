import NavLinkHelper from './helper/NavLink.tsx';
import { Products, Home, AboutUs, Envelope } from '../assets/icons/index.js';
import { NevoltaTextLogo } from '../assets/svgs/index.js';
import { NavLink } from 'react-router';
import '../index.css';
function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg" id="MainNav">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" id="NavLogoText">
              <img src={NevoltaTextLogo} alt="Logo" width="100%" height="50px" className="d-inline-block align-text-center"/>
            </NavLink>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="NavBurgerMenu">
              <span className="navbar-toggler-icon" id="NavBurgerIcon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLinkHelper href="/" text="Home" iconSrc={Home} />
                <NavLinkHelper href="/products" text="Products" iconSrc={Products} />
                <NavLinkHelper href="/about" text="About us" iconSrc={AboutUs} />
                <NavLinkHelper href="/contact" text="Contact" iconSrc={Envelope} />
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;