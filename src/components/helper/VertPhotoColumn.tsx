interface DualColumnContentRowProps {
    altText: string;
    imgSrc: string;
    extraDivClassName: string;
}

function VertPhotoColumn({ altText, imgSrc, extraDivClassName }: DualColumnContentRowProps){
    return (
        <div className={`col-md ${extraDivClassName}`}>
            <div className="photoColumn scrollImageShow">
                <img className="photoColumnImg" src={imgSrc} alt={altText}/>
            </div>
        </div>
    )
}

export default VertPhotoColumn;