import { NavLink } from 'react-router';

interface NavLinkProps {
    text: string;
    href: string;
    iconSrc: string;
}

function NavLinkHelper({text, href, iconSrc}: NavLinkProps) {
    return (
        <NavLink to={href} className="nav-link active underline-anim" aria-current="page">
            {text} <img className="nav-icon" alt={text.charAt(0)} width="16px" height="16px" src={iconSrc}/>
        </NavLink>
    )
}

export default NavLinkHelper;