interface FeatureGridPointerProps {
    iconSrc: string;
    text: string;
    textHover: string;
    bonusClass: string;
}

function FeatureGridPointer({ iconSrc, text, textHover, bonusClass }: FeatureGridPointerProps){
    return (
        <div className={`featureGridPointer ${bonusClass}`}>
            <div className="defPointerContent">
                <img src={iconSrc} alt="" className="featureGridPointerIcon"/>
                <p className="featureGridPointerText text-font-alt">{text}</p>
            </div>
            <div className="hoverPointerContent">
                <p>{textHover}</p>
            </div>
        </div>
    )
}

export default FeatureGridPointer;