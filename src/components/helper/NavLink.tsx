interface NavLinkProps {
    text: string;
    href: string;
    iconSrc: string;
}

function NavLink({text, href, iconSrc}: NavLinkProps) {
    return (
        <a className="nav-link active underline-anim" aria-current="page" href={href}>
            {text} <img className="nav-icon" alt={text.charAt(0)} width="16px" height="16px" src={iconSrc}/>
        </a>
    )
}

export default NavLink;