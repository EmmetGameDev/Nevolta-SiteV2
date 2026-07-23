import { NavLink } from 'react-router';

interface FooterNavLinkProps {
    text: string;
    href: string;
    newTab?: boolean;
}

function FooterNavLink({text, href, newTab}: FooterNavLinkProps) {
    return (
        <li className="footerItem">
            <NavLink to={href} className="underline-anim" target={newTab ? "_blank" : undefined}>
                {text}
            </NavLink>
        </li>
    )
}

export default FooterNavLink;