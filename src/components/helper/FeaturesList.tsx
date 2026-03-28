import { Tap, Twotone, Ergonomic, Buttons, Dpad } from '../../assets/icons/index.js';
import FeaturePointer from "./FeaturePointer.js";

function FeaturesList() {
    return (
        <div className="textPointerHolder">
            <FeaturePointer text="Smooth, matte finish" iconSrc={Tap} />
            <FeaturePointer text="Black or white shell" iconSrc={Twotone} />
            <FeaturePointer text="Ergonomic design" iconSrc={Ergonomic} />
            <FeaturePointer text="Quiet, tactile buttons" iconSrc={Buttons} />
            <FeaturePointer text="Responsive DPad" iconSrc={Dpad} />
        </div>
    )
}

export default FeaturesList;