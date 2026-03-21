interface GridCardProps {
    header: string;
    description: string;
    imgSrc: string;
    btnHref: string;
}

function GridCard(props: GridCardProps) {
    return(
        <div className="col-sm">
          <div className="card blur-bg mainCard">
            <img src={props.imgSrc} className="card-img-top mainCardImage" alt={props.header}/>
            <div className="card-body">
              <h5 className="card-title text-font-alt">{props.header}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.btnHref} className="cstmButton">Learn more</a>
            </div>
          </div>
        </div>
    )
}

export default GridCard;