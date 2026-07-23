import { Earphones, Twotone, Draw, Buttons, SpaceInvader } from '../../assets/icons/index.js';
import FeaturePointer from "./FeaturePointer.js";

function FeaturesList() {
    return (
        <div className="textPointerHolder">
            <FeaturePointer text="13 Retro emulators" iconSrc={SpaceInvader} />
            <FeaturePointer text="Headphone Jack and Speaker" iconSrc={Earphones} />
            <FeaturePointer text="Multiple color options" iconSrc={Twotone} />
            <FeaturePointer text="Quiet, tactile buttons" iconSrc={Buttons} />
            <FeaturePointer text="YOUR custom engraving" iconSrc={Draw} />
        </div>
    )
}

export default FeaturesList;