import { PhotoWhiteHoldPlant, PhotoFrontClose, PhotoWhiteHeld, PhotoQuarter } from "../assets/photos/index.js";

export type optionWithId = {
    optionName: string,
    optionId: string
};

export type CustomOption = {
    name: string,
    options: optionWithId[]
};

export type Console = {
    name: string,
    thumbnail: string,
    photoSources: string[],
    customOptions: CustomOption[],
    price: number,
    previousPrice: number,
    diyKitPriceDrop: number,
    kitsPagePath: string
};

export const ModelVData: Console = {
    name: "Nevolta Model V",
    thumbnail: PhotoQuarter,
    photoSources: [PhotoWhiteHoldPlant, PhotoFrontClose, PhotoWhiteHeld],
    customOptions: [
        {
            name: "Color",
            options: [
                {
                    optionName: "White",
                    optionId: "clr_White"
                },
                {
                    optionName: "Black",
                    optionId: "clr_Black"
                }
            ]
        },
        {
            name: "Engraving",
            options: [
                {
                    optionName: "Yes (Free!)",
                    optionId: "eng_yes"
                },
                {
                    optionName: "Black",
                    optionId: "eng_no"
                }
            ]
        }
    ],
    price: 49.99,
    previousPrice: 64.99,
    diyKitPriceDrop: 5,
    kitsPagePath: "/Nevolta-SiteV2/model-v"
}