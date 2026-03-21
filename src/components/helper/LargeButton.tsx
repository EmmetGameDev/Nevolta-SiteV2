interface LargeButtonProps {
    text: string;
    href: string;
}

function LargeButton(props: LargeButtonProps){
    return (
        <a className="emptyLink" href={props.href}>
          <button className="getYoursBtn">
            <div className="getYoursBtnText">
              {props.text}
            </div>
          </button>
        </a>
    )
}

export default LargeButton;