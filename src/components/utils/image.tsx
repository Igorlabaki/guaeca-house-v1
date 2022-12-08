import React from "react";
import Image from "next/legacy/image";

interface ImageComponentProps {
  w: string;
  h: string;
  src: string;
  alt: string;
  imageClassname?: string;
}

export function ImageComponent({
  w,
  h,
  src,
  alt,
  imageClassname,
}: ImageComponentProps) {
  return (
    <div className={`${w} ${h} relative`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={"cover"}
        className={`h-full w-full ${imageClassname}`}
      />
    </div>
  );
}
