import { JSX } from "react";

interface DualColumnTextRowProps {
    Headingline1: string;
    Headingline2: string;
    Paragraph: string;
    OtherElement: JSX.Element;
}

function DualColumnTextRow({ Headingline1, Headingline2, Paragraph, OtherElement }: DualColumnTextRowProps){
    return (
        <div className="row contentRow">
          <div className="col-md">
            <div className="contentColumn">
              <h1 className="text-font-alt columnHeading headingPhotoHorizontal photoBottomPage">
                {Headingline1} <br/>
                {Headingline2}
              </h1>
              <p className="columnText">
                {Paragraph}
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="contentColumn splitVertCenterer">
              {OtherElement}
            </div>
          </div>
        </div>
    )
}

export default DualColumnTextRow;