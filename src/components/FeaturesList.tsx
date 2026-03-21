import { Tap, Twotone, Rounded, Buttons, Dpad } from '../assets/icons/index.js';
import FeaturePointer from "./helper/FeaturePointer";

function FeaturesList() {
    return (
        <div className="textPointerHolder">
            <FeaturePointer text="Smooth, matte finish" iconSrc={Tap} />
            <FeaturePointer text="Black or white shell" iconSrc={Twotone} />
            <FeaturePointer text="Rounded corners" iconSrc={Rounded} />
            <FeaturePointer text="Quiet, tactile buttons" iconSrc={Buttons} />
            <FeaturePointer text="Responsive DPad" iconSrc={Dpad} />
        </div>
    )
}

export default FeaturesList;