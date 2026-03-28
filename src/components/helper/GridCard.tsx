interface GridCardProps {
    header: string;
    description: string;
    imgSrc: string;
    btnHref: string;
}

function GridCard({header, description, imgSrc, btnHref}: GridCardProps) {
    return(
        <div className="col-sm">
          <div className="card blur-bg mainCard">
            <img src={imgSrc} className="card-img-top mainCardImage" alt={header}/>
            <div className="card-body">
              <h5 className="card-title text-font-alt">{header}</h5>
              <p className="card-text">{description}</p>
              <a href={btnHref} className="cstmButton">Learn more</a>
            </div>
          </div>
        </div>
    )
}

export default GridCard;