import { useState, useEffect } from "react";

import { Console } from "../scripts/consoleOfferingData.ts";
import { Star } from "../assets/icons/index.js";

interface KitPageTopperProps{
    cons: Console
}

function KitPageTopper({ cons }: KitPageTopperProps){
    const [price, setPrice] = useState(cons.price);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
        assembly: "assembled", // default
        ...cons.customOptions.reduce((acc, opt) => {
        acc[opt.name] = opt.options[0].optionId; // first option of each group
        return acc;
        }, {} as Record<string, string>),
    });

    useEffect(() => {
        if (selectedOptions.assembly === "diyKit") {
            setPrice(cons.price - cons.diyKitPriceDrop);
        } else {
            setPrice(cons.price);
        }
    }, [selectedOptions.assembly, cons.price]);

    return (
        <div className="row kitRow">
            <div className="col-md-6 kitCol">
                <div
            id="carouselExample"
            className="carousel slide itemCar"
            data-bs-ride="carousel"
            >
            {/* INDICATORS */}
            <div className="carousel-indicators">
                {cons.photoSources.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                />
                ))}
            </div>

            {/* IMAGES */}
            <div className="carousel-inner">
                {cons.photoSources.map((photo, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                    <img
                    src={photo}
                    className="d-block w-100"
                    alt={`slide-${index}`}
                    />
                </div>
                ))}
            </div>

            {/* CONTROLS */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            <div className="col-md-6 kitCol kitColR">
                <h1 className="prodName">{cons.name}</h1>
                <div className="stars">
                    <img src={Star} className="starIcon" alt="star"/>
                    <img src={Star} className="starIcon" alt="star"/>
                    <img src={Star} className="starIcon" alt="star"/>
                    <img src={Star} className="starIcon" alt="star"/>
                    <img src={Star} className="starIcon" alt="star"/>
                    <p className="starText"><b>5.0</b></p>
                    <p className="starText">(4 reviews)</p>
                </div>
                <div className="optButtons">
                    <button
                        className={`button-opt ${selectedOptions["assembly"] === "assembled" ? "optActive" : ""}`}
                        onClick={() =>
                        setSelectedOptions(prev => ({ ...prev, assembly: "assembled" }))
                        }
                    >
                        Assembled
                    </button>
                    <button
                        className={`button-opt ${selectedOptions["assembly"] === "diyKit" ? "optActive" : ""}`}
                        onClick={() =>
                        setSelectedOptions(prev => ({ ...prev, assembly: "diyKit" }))
                        }
                    >
                        DIY Kit + Parts
                    </button>
                </div>
                <div className="flexColRow">
                    {cons.customOptions.map((custOption, index) => (
                        <div className="rowColCstm" key={index}>
                            <h1 className="smallHeading">{custOption.name}</h1>
                            <div className="optButtons2">
                                {custOption.options.map((opt, indexOfOpt) => (
                                    <button
                                        key={indexOfOpt}
                                        className={`button-opt2 ${
                                            selectedOptions[custOption.name] === opt.optionId ? "optActive2" : ""
                                        }`}
                                        onClick={() =>
                                            setSelectedOptions(prev => ({
                                            ...prev,
                                            [custOption.name]: opt.optionId
                                            }))
                                        }
                                        >
                                        {opt.optionName}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            
            <h1 className="kitPrice">${price.toFixed(2)} <span className="oldPrice">${cons.previousPrice.toFixed(2)}</span></h1>
            <a className="emptyLink" href="https://allegrolokalnie.pl/oferta/konsola-przenosna-nevolta-do-gier-retro-personalizowana-na-zamowienie" target="_blank">
                <button className="buyNowBtn">
                <div className="getYoursBtnText">
                    Buy Now
                </div>
            </button>
            </a>
            </div>
        </div>
    )
}

export default KitPageTopper;