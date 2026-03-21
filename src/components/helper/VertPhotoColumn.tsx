interface DualColumnContentRowProps {
    altText: string;
    imgSrc: string;
}

function VertPhotoColumn({ altText, imgSrc }: DualColumnContentRowProps){
    return (
        <div className="col-md">
            <div className="photoColumn scrollImageShow">
                <img className="photoColumnImg" src={imgSrc} alt={altText}/>
            </div>
        </div>
    )
}

export default VertPhotoColumn;