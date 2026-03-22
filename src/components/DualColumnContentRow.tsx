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
    pushMobilePhoto: boolean;
}

function pushClassRender({pushMobilePhotoToTop}: {pushMobilePhotoToTop?: boolean}){
    if(pushMobilePhotoToTop === true){
        return "order-2 order-md-1";
    }else{
        return "";
    }
}

function reverse_pushClassRender({pushMobilePhotoToTop}: {pushMobilePhotoToTop?: boolean}){
    if(pushMobilePhotoToTop === true){
        return "order-1 order-md-2";
    }else{
        return "";
    }
}

function extraComponentRender({component}: {component: JSX.Element}){
    if(component){
        return component;
    }else{
        return <></>;
    }
}

function dualColumnContentRow({ photoAltText, photoSrc, heading_line1, heading_line2, description_line1, description_line2, extraComponent, ifLeftPhoto, pushMobilePhoto }: DualColumnContentRowProps) {
    if(ifLeftPhoto === true){
        return (
            <div className="row contentRow">
                <VertPhotoColumn altText={photoAltText} imgSrc={photoSrc} extraDivClassName="" />
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
                <VertPhotoColumn altText={photoAltText} imgSrc={photoSrc} extraDivClassName={reverse_pushClassRender({pushMobilePhotoToTop: pushMobilePhoto})} />
                <div className={`col-md ${pushClassRender({pushMobilePhotoToTop: pushMobilePhoto})}`}>
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
            </div>
        )
    }
}

export default dualColumnContentRow;