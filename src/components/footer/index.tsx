import React from "react";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FaAirbnb } from "react-icons/fa";
import { AnchorComponent } from "../utils/anchor";

export function FooterComponent() {
  return (
    <div className="bg-transparent h-10 w-full absolute bottom-4 flex justify-end gap-x-4 items-center px-10">
      <AnchorComponent
        href=""
        icon={<FaAirbnb className="text-white text-2xl" />}
      />
      <AnchorComponent
        href=""
        icon={<BsInstagram className="text-white text-2xl" />}
      />
      <AnchorComponent
        href=""
        icon={<BsFacebook className="text-white text-2xl" />}
      />
      <AnchorComponent
        href=""
        icon={<BsWhatsapp className="text-white text-2xl" />}
      />
    </div>
  );
}
