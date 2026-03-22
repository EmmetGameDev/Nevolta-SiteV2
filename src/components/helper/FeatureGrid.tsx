import FeatureGridPointer from "./FeatureGridPointer";
import { Powerful, OpenSource, Customizable, Battery } from '../../assets/icons/index.js';

function FeatureGrid(){
    return (
        <div className="featureGrid">
            <FeatureGridPointer iconSrc={Powerful} text="Powerful" textHover="Dual-core, 240MHz processor." bonusClass="gridBoxScroll1" />
            <FeatureGridPointer iconSrc={OpenSource} text="Open Source" textHover="Open source firmware." bonusClass="gridBoxScroll2" />
            <FeatureGridPointer iconSrc={Customizable} text="Customizable" textHover="Highly customizable interface." bonusClass="gridBoxScroll3" />
            <FeatureGridPointer iconSrc={Battery} text="Efficient" textHover="Days of battery life" bonusClass="gridBoxScroll4" />
        </div>
    )
}
export default FeatureGrid;