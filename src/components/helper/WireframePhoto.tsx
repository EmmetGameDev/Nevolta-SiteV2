interface WireframePhotoProps {
    photoSrc: string;
}

function WireframePhoto({ photoSrc }: WireframePhotoProps) {
    return (
        <div className="row blogRow">
            <img className="explainPhoto" src={photoSrc} alt="wireframe"/>
        </div>
    )
}

export default WireframePhoto;