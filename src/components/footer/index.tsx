import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { AnchorComponent } from "../utils/anchor";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export function FooterComponent() {
  return (
    <div className="bg-transparent h-10 w-full absolute bottom-4 flex justify-end gap-x-4 items-center px-10 text-white text-2xl">
      <AnchorComponent href="" target="_blank" icon={<BsWhatsapp />} />
      <AnchorComponent
        href="https://www.instagram.com/guaecahouse/"
        target="_blank"
        icon={<BsInstagram />}
      />
      <AnchorComponent
        href="https://www.facebook.com/guaecahouse"
        target="_blank"
        icon={<RiFacebookCircleLine className="text-white text-3xl" />}
      />
      <AnchorComponent
        href="https://www.airbnb.com.br/rooms/8987247?source_impression_id=p3_1670521053_sE2K9pZG3X034z3A"
        target="_blank"
        icon={<FaAirbnb />}
      />
    </div>
  );
}
