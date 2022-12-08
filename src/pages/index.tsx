import { IImageBg, imagesBg } from "../mock/imageBgList";
import LayoutComponent from "../components/layout";
import { ButtonComponent } from "../components/utils/button";
import { useState } from "react";

export default function Home() {
  const [imageBgList, setImageBgList] = useState<IImageBg[]>(imagesBg);

  function handleChangeImageBg() {}

  return (
    <LayoutComponent>
      <ButtonComponent
        className="bg-green-primary h-[80px] w-[300px] rounded-[20px] opacity-50 
            hover:opacity-100 hover:shadow-lg"
        titleClassname="tracking-[.25em] font-thin  text-[20px] text-white font-futura-pt"
        title="RESERVAR"
      />
      {/* {imageModalIsOpen && (
        <ModalComponent
          onClose={() => handleCloseImageModal && handleCloseImageModal()}
        >
          <ImageComponent
            alt={imageBgList[0].alt}
            src={imageBgList[0].src}
            h={"h-[600px]"}
            w={"w-[900px]"}
            imageClassname={"rounded-[10px]"}
          />
        </ModalComponent>
      )} */}
    </LayoutComponent>
  );
}
