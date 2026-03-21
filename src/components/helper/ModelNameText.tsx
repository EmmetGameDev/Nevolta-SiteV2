interface ModelNameTextProps {
    modelName: string;
}

function ModelNameText(props: ModelNameTextProps) {
    return (
        <span className="text-font-alt modelName">{props.modelName}</span>
    )
}

export default ModelNameText;