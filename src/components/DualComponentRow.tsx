import { JSX } from "react";

interface DualComponentRowProps {
    component1: JSX.Element;
    component2: JSX.Element;
}

function DualComponentRow({ component1, component2 }: DualComponentRowProps){
    return (
        <div className="row contentRow">
            <div className="col-md">
                {component1}
            </div>
            <div className="col-md">
                {component2}
            </div>
        </div>
    )
}

export default DualComponentRow;