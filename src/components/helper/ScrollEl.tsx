interface ScrollElProps {
    name: string;
}

function ScrollEl({name}: ScrollElProps) {
    return (
        <div className="scrollBox">
            <h3>
                {name}
            </h3>
        </div>
    )
}

export default ScrollEl;