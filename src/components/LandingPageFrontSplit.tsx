import ModelNameText from "./helper/ModelNameText.tsx";
import LargeButton from "./helper/LargeButton.tsx";

interface landingPageFrontSplitProps {
    title: string;
    description: string;
    modelName: string;
    videoSrc: string;
}

function LandingPageFrontSplit({title, description, modelName, videoSrc}: landingPageFrontSplitProps) {
    return(
        <div className="row">
            {/*<video autoPlay muted loop preload="auto" id="myVideo">
            <source src="/public/BannerVid_Compressed.mp4" type="video/mp4"/>
            </video>*/}
            <div className="col-md">
                <div className="splitVertCenterer">
                    <iframe title="YouTube video player" className="ytIframe" allow="autoplay; encrypted-media" src={videoSrc}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="splitVertCenterer">
                    <h3 className="allNewText">{title}<ModelNameText modelName={modelName} /></h3>
                    <LargeButton text="Get Yours" href="/model-v" />
                </div>
            </div>
        </div>
    )
}

export default LandingPageFrontSplit;