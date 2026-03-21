import ScrollEl from './helper/ScrollEl.tsx';

function ConsoleScroller() {
    return (
        <div className="row">
            <div className="wrapScrollingText">
                <div className="scrollTrack">
                <ScrollEl name="Game Boy" />
                <ScrollEl name="Game Boy Color" />
                <ScrollEl name="Nintendo" />
                <ScrollEl name="Super Nintendo" />
                <ScrollEl name="Lynx" />
                <ScrollEl name="Coleco vision" />
                <ScrollEl name="PC Engine" />
                <ScrollEl name="DOOM" />
                <ScrollEl name="SG-1000" />
                <ScrollEl name="Sega Master System" />
                <ScrollEl name="Sega Genesis" />
                <ScrollEl name="Game Gear" />
                </div>
            </div>
        </div>
    )
}

export default ConsoleScroller;