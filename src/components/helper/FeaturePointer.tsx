interface FeaturePointerProps {
    text: string;
    iconSrc: string;
}

function FeaturePointer({ text, iconSrc }: FeaturePointerProps) {
    return (
        <p className="columnText textPointer scrollTextShowLeft">
            - {text} <img src={iconSrc} className="smallIcon" alt="icon"/>
        </p>
    )
}

export default FeaturePointer;