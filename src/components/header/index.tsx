import { ImageComponent } from "../utils/image";
import { NavigationComponent } from "./navigationItem";

export default function HeaderComponent() {
  return (
    <div
      className="w-[100%] px-[45px] h-[130px] flex justify-between items-center gap-[80px] absolute top-0
    bg-gradient-to-b from-white-header to-transparent z-10"
    >
      <div className="z-20">
        <ImageComponent
          h="h-[135px]"
          w="w-[285px]"
          alt="Guaeca House Logo"
          src="/images/logo-guaecahouse.png"
        />
      </div>
      <div className="flex justify-start items-center gap-[25px] font-brandon-gro text-[18px] z-20">
        <NavigationComponent href="/" title="HOME" />
        <NavigationComponent href="/sobreCasa" title="SOBRE A CASA" />
        <NavigationComponent href="/galeria" title="GALERIA" />
        <NavigationComponent href="/#" title="HISTORIA DE GUAECA" />
        <NavigationComponent href="/#" title="AVALIACOES" />
        <NavigationComponent href="/#" title="CONTATO" />
        <NavigationComponent href="/#" title="OUTRAS LOCACOES" />
      </div>
    </div>
  );
}
