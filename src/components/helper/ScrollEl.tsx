interface ScrollElProps {
    name: string;
}

function ScrollEl(props: ScrollElProps) {
    return (
        <div className="scrollBox">
            <h3>
                {props.name}
            </h3>
        </div>
    )
}

export default ScrollEl;