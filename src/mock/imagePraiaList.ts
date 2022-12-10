import {v4 as uuid} from "uuid"

export interface IImagePraia{
    id: string
    alt: string
    src: string
    name: string
    area: string
}

const imagesList : IImagePraia[] = [
    {
        id: uuid(),
        area:   "Lounge",
        name:   "praia-01",
        alt:    "praia-image-1",
        src:    "/images/praia.jpg",
    },
    {
        id: uuid(),
        area: "Frente",
        name: "praia-1",
        alt:  "praia-image-1",
        src:  "/images/praia.jpg",
    },
    {
        id: uuid(),
        name: "praia-1",    
        area: "Piscina",
        alt:  "praia-image-1",
        src:  "/images/praia.jpg",
    },
]

export {imagesList}