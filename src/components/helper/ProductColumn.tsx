interface ProductColumnProps {
    title: string;
    price: number;
    previousPrice: number;
    imageSrc: string;
    productLink: string;
    isWorkInProgress: boolean;
}

function ProductColumn({ title, price, previousPrice, imageSrc, productLink, isWorkInProgress }: ProductColumnProps){
    if(isWorkInProgress){
        return (
            <div className="col-md-6 productsCol">
                <div className="card blur-bg productsCard">
                    <img src={imageSrc} className="card-img-top productsCardImage" alt="Specs"/>
                    <div className="card-body">
                    <h5 className="card-title text-font-alt"> Work in progress!</h5>
                    <p className="card-text">More <span className="text-font-alt">Nevolta</span> consoles in the working!</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="col-md-6 productsCol">
                <div className="card blur-bg productsCard">
                    <img src={imageSrc} className="card-img-top productsCardImage" alt={title}/>
                    <div className="card-body productsCardBody">
                    <h5 className="card-title text-font-alt">{title}</h5>
                    <p className="card-text">From <span className="pricePoint"> ${price.toFixed(2)} </span> <span className="previousPrice">${previousPrice.toFixed(2)}</span></p>
                    <a href={productLink} className="cstmButton">Buy Now</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductColumn;