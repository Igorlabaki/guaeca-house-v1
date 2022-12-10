import {v4 as uuid} from "uuid"

export interface IImage{
    id: string
    alt: string
    src: string
    name: string
    area: string
}

const imagesList : IImage[] = [
    {
        id: uuid(),
        name:   "house-01",
        area:   "Lounge",
        alt:    "house-image-1",
        src:    "/images/house-1.png",
    },
    {
        id: uuid(),
        alt:  "house-image-1",
        src:  "/images/house-2.png",
        name: "house-1",
        area: "Frente"
    },
    {
        id: uuid(),
        alt:  "house-image-1",
        src:  "/images/house-3.png",
        name: "house-1",
        area: "Piscina"
    },
]

export {imagesList}