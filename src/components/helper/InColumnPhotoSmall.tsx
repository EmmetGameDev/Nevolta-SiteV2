interface InColumnPhotoSmallProps {
    photoSrc: string;
    paragraphText: string;
    paragraphElement: object | null;
}

function InColumnPhotoSmall({ photoSrc, paragraphText, paragraphElement }: InColumnPhotoSmallProps) {
    let content;

    if (paragraphElement) {
        content = paragraphElement;
    } else {
        content = <p className="blogText scrollTextShowUp">{paragraphText}</p>;
    }

    return (
        <>
            <div className="squarePhotoHolder">
                <img className="blogSquarePhoto scrollImageShow" src={photoSrc} alt="photoSmall"/>
            </div>
            {content}
        </>
    )
}

export default InColumnPhotoSmall;