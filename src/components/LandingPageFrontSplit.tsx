import ModelNameText from "./helper/ModelNameText.tsx";
import LargeButton from "./helper/LargeButton.tsx";

interface landingPageFrontSplitProps {
    title: string;
    description: string;
    modelName: string;
    videoSrc: string;
}

function LandingPageFrontSplit(props: landingPageFrontSplitProps){
    return(
        <>
            {/*<video autoPlay muted loop preload="auto" id="myVideo">
            <source src="/public/BannerVid_Compressed.mp4" type="video/mp4"/>
            </video>*/}
            <div className="col-md">
                <div className="splitVertCenterer">
                    <iframe title="YouTube video player" className="ytIframe" allow="autoplay; encrypted-media" src={props.videoSrc}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="splitVertCenterer">
                    <h3 className="allNewText">{props.title}<ModelNameText modelName={props.modelName} /></h3>
                    <LargeButton text="Get Yours" href="kits.html" />
                </div>
            </div>
        </>
    )
}

export default LandingPageFrontSplit;