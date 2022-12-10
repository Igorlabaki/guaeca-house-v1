import React, { useState } from "react";
import LayoutComponent from "../components/layout";
import { IImage, imagesList } from "../mock/imageList";
import useModalsContext from "../hook/useModalsContext";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { ModalComponent } from "../components/utils/modal";
import { ImageComponent } from "../components/utils/image";

export default function Galeria() {
  const [image, setImage] = useState<IImage>();
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageBgList, setImageBgList] = useState<IImage[]>(imagesList);
  const { handleCloseImageModal, handleOpenImageModal, imageModalIsOpen } =
    useModalsContext();
  return (
    <LayoutComponent>
      <div className="w-full h-screen">
        <div className="w-[80%] m-auto flex gap-10 mt-[10rem]  ">
          {imageBgList.map((item: IImage, i: number) => {
            return (
              <div key={item.id} onClick={() => setImageIndex(() => i)}>
                <ImageComponent
                  alt={item.alt}
                  src={item.src}
                  h={"h-[250px]"}
                  w={"w-[400px]"}
                  imageClassname={"rounded-lg cursor-pointer"}
                  containerClassname={
                    "shadow-lg hover:scale-105 transition-all duration-500"
                  }
                  onclik={() => handleOpenImageModal && handleOpenImageModal()}
                />
              </div>
            );
          })}
        </div>
        {imageModalIsOpen && imageIndex >= 0 && (
          <ModalComponent
            onClose={() => handleCloseImageModal && handleCloseImageModal()}
            styleExternal="bg-gray-bg/70"
          >
            <div>
              <div className="flex justify-center items-center gap-10">
                {imageIndex > 0 && (
                  <SlArrowLeft
                    size={50}
                    className="text-white hover:text-amber-400 cursor-pointer"
                    onClick={() => setImageIndex((prev) => prev - 1)}
                  />
                )}
                <ImageComponent
                  alt={imageBgList[imageIndex]?.alt}
                  src={imageBgList[imageIndex]?.src}
                  h={"h-[600px]"}
                  w={"w-[1000px]"}
                  imageClassname={"rounded-[10px]"}
                />
                {imageIndex + 1 < imageBgList.length && (
                  <SlArrowRight
                    size={50}
                    className="text-white hover:text-amber-400 cursor-pointer"
                    onClick={() => {
                      setImageIndex((prev) => prev + 1);
                    }}
                  />
                )}
              </div>
              <p className="text-lg text-center font-brandon-gro font-bold text-green-primary mt-4">
                {imageBgList[imageIndex]?.area}
              </p>
            </div>
          </ModalComponent>
        )}
      </div>
    </LayoutComponent>
  );
}
