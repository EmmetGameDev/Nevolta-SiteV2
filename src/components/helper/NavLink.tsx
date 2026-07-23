import { NavLink } from 'react-router';

interface NavLinkProps {
    text: string;
    href: string;
    iconSrc: string;
    newTab?: boolean;
}

function NavLinkHelper({text, href, iconSrc, newTab}: NavLinkProps) {
    return (
        <NavLink to={href} className="nav-link active underline-anim" aria-current="page" target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
            {text} <img className="nav-icon" alt={text.charAt(0)} width="16px" height="16px" src={iconSrc}/>
        </NavLink>
    )
}

export default NavLinkHelper;