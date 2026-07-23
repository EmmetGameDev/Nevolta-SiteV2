interface LargeButtonProps {
    text: string;
    href: string;
}

function LargeButton({text, href}: LargeButtonProps){
    return (
        <a className="emptyLink" href={href} target="_blank" rel="noopener noreferrer">
          <button className="getYoursBtn">
            <div className="getYoursBtnText">
              {text}
            </div>
          </button>
        </a>
    )
}

export default LargeButton;