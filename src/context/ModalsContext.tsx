import React, { createContext, useState } from "react";
import { IMoodalsContextRepository } from "../context/repositories/IModalsContextRepository";

export const ModalsContext = createContext({} as IMoodalsContextRepository);

export function ModalsProvider({ children }: any) {
  // Images Modal
  const [imageModalIsOpen, setImageModalIsOpen] = useState<boolean>(false);

  function handleOpenImageModal() {
    setImageModalIsOpen(() => true);
  }
  function handleCloseImageModal() {
    setImageModalIsOpen(() => false);
  }
  //
  return (
    <ModalsContext.Provider
      value={{
        imageModalIsOpen,
        handleOpenImageModal,
        handleCloseImageModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
