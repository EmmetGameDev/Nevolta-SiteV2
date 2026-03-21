import { JSX } from "react";
import VertPhotoColumn from "./helper/VertPhotoColumn";

interface DualColumnContentRowProps {
    photoAltText: string;
    photoSrc: string;
    heading_line1: string;
    heading_line2: string;
    description_line1: string;
    description_line2: string;
    extraComponent: JSX.Element;
    ifLeftPhoto?: boolean;
}

function extraComponentRender({component}: {component: JSX.Element}){
    if(component){
        return component;
    }else{
        return <></>;
    }
}

function dualColumnContentRow({ photoAltText, photoSrc, heading_line1, heading_line2, description_line1, description_line2, extraComponent, ifLeftPhoto }: DualColumnContentRowProps) {
    if(ifLeftPhoto === true){
        return (
            <div className="row contentRow">
                <VertPhotoColumn altText={photoAltText} imgSrc={photoSrc} />
                <div className="col-md">
                    <div className="contentColumn">
                    <h1 className="text-font-alt columnHeading">
                        {heading_line1}
                        <br />
                        {heading_line2}
                    </h1>
                    <p className="columnText">
                        {description_line1}
                    </p>
                    <p className="columnText">
                        {description_line2}
                    </p>
                    </div>
                    {extraComponentRender({component: extraComponent})}
                </div>
            </div>
        )
    }else{
        return (
            <div className="row contentRow">
                <div className="col-md">
                    <div className="contentColumn">
                    <h1 className="text-font-alt columnHeading float-right">
                        {heading_line1}
                        <br />
                        {heading_line2}
                    </h1>
                    <p className="columnText float-right">
                        {description_line1}
                    </p>
                    <p className="columnText float-right">
                        {description_line2}
                    </p>
                    </div>
                    {extraComponentRender({component: extraComponent})}
                </div>
                <VertPhotoColumn altText={photoAltText} imgSrc={photoSrc} />
            </div>
        )
    }
}

export default dualColumnContentRow;