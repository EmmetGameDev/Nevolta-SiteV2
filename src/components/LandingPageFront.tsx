import ModelNameText from "./helper/ModelNameText.tsx";
import LargeButton from "./helper/LargeButton.tsx";

interface landingPageFrontProps {
    title: string;
    modelName: string;
    videoSrc: string;
}

function LandingPageFront(props: landingPageFrontProps){
    return(
        <>
            {/*<video autoPlay muted loop preload="auto" id="myVideo">
            <source src="/public/BannerVid_Compressed.mp4" type="video/mp4"/>
            </video>*/}
            <iframe title="YouTube video player" className="ytIframe" allow="autoplay; encrypted-media" src={props.videoSrc}/>
            <h1 className="text-alt-heading"><span className="txt-rotate" data-period="1000" data-rotate='["13 consoles.", "15000 games.", "1 system.", "1 ESP32."]'></span></h1>
            <h3 className="allNewText">{props.title}<ModelNameText modelName={props.modelName} /></h3>
            <LargeButton text="Buy Now" href="kits.html" />
        </>
    )
}

export default LandingPageFront;