interface ScrollElProps {
    iconSrc: string;
}

function ScrollIconEl({iconSrc}: ScrollElProps) {
    return (
        <div className="scrollBox scrollIconBox">
            <img className="scrollIcon" src={iconSrc} alt="consoleIcon"/>
        </div>
    )
}

export default ScrollIconEl;