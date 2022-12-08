import { LinkComponent } from "./link";
import { ImageComponent } from "../utils/image";

export default function HeaderComponent() {
  return (
    <div
      className="w-[100%] px-[45px] h-[130px] flex justify-between items-center gap-[80px] absolute
    bg-gradient-to-b from-white-header to-transparent"
    >
      <div className="z-20">
        <ImageComponent
          h="h-[135px]"
          w="w-[285px]"
          alt="Guaeca House Logo"
          src="/images/logo-guaecahouse.png"
        />
      </div>
      <div className="flex justify-start items-center gap-[25px] font-brandon-gro text-[18px] z-10">
        <LinkComponent href="/#" title="HOME" />
        <LinkComponent href="/#" title="SOBRE A CASA" />
        <LinkComponent href="/#" title="GALERIA" />
        <LinkComponent href="/#" title="HISTORIA DE GUAECA" />
        <LinkComponent href="/#" title="AVALIACOES" />
        <LinkComponent href="/#" title="CONTATO" />
        <LinkComponent href="/#" title="OUTRAS LOCACOES" />
      </div>
    </div>
  );
}
