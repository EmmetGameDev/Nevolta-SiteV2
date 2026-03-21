interface FullWidthPhotoRowProps {
    photoSrc: string;
    photoAltText: string;
}

function FullWidthPhotoRow({photoSrc, photoAltText}: FullWidthPhotoRowProps){
    return(
        <div className="row contentRow">
            <div className="photoColumn photoHorizontal scrollImageShow">
                <img className="photoColumnImg" src={photoSrc} alt={photoAltText}/>
            </div>
        </div>
    )
}

export default FullWidthPhotoRow;