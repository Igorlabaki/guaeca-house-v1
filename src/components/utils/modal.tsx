export interface PropsNewModal {
  onClose: () => void;
  children: any;
  styleExternal?: string;
  styleInternal?: string;
}

export function ModalComponent({
  onClose,
  children,
  styleExternal,
  styleInternal,
}: PropsNewModal) {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "external") {
      onClose();
    }
  };

  return (
    <div
      aria-hidden="true"
      id={"external"}
      onClick={(e) => handleOutsideClick(e)}
      className={`${
        styleExternal ? styleExternal : "bg-black/40"
      } flex flex-wrap w-full h-full justify-center items-center fixed top-0 right-0 z-50`}
    >
      <div id="internal_modal" className={`${styleInternal}`}>
        {children}
      </div>
    </div>
  );
}
