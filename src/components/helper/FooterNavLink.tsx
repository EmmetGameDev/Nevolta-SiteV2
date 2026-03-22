import { NavLink } from 'react-router';

interface FooterNavLinkProps {
    text: string;
    href: string;
}

function FooterNavLink({text, href}: FooterNavLinkProps) {
    return (
        <li className="footerItem">
            <NavLink to={href} className="underline-anim">
                {text}
            </NavLink>
        </li>
    )
}

export default FooterNavLink;