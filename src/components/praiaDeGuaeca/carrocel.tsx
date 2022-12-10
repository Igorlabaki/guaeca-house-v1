import React from "react";
import { imagesList } from "../../mock/imagePraiaList";
import { ImageComponent } from "../utils/image";

export function CarrocelComponent() {
  return (
    <div className="bg-gray-300 overflow-hidden m-auto flex gap-10 rounded-md shadow-lg">
      <ImageComponent
        alt={imagesList[0].alt}
        src={imagesList[0].src}
        h={"h-[400px]"}
        w={"w-full"}
      />
    </div>
  );
}
