interface ModelNameTextProps {
    modelName: string;
}

function ModelNameText({modelName}: ModelNameTextProps) {
    return (
        <span className="text-font-alt modelName">{modelName}</span>
    )
}

export default ModelNameText;