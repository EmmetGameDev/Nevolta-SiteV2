interface NavLinkProps {
    text: string;
    href: string;
    iconSrc: string;
}

function NavLink(props: NavLinkProps) {
    return (
        <a className="nav-link active underline-anim" aria-current="page" href={props.href}>
            {props.text} <img className="nav-icon" alt={props.text.charAt(0)} width="16px" height="16px" src={props.iconSrc}/>
        </a>
    )
}

export default NavLink;