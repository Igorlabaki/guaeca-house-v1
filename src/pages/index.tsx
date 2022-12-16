import LayoutComponent from "../components/layout";
import { ButtonComponent } from "../components/utils/button";

export default function Home() {
  return (
    <LayoutComponent>
      <div
        className="h-screen relative  flex justify-center items-center h-screnn w-full bg-house-01 bg-no-repeat bg-contain 
    bg-center background-clip:border-box"
      >
        <ButtonComponent
          className="bg-green-primary h-[80px] w-[300px] rounded-[20px] opacity-50 
              hover:opacity-100 hover:shadow-lg transition-all duration-700"
          titleClassname="tracking-[.25em] font-thin  text-[20px] text-white font-futura-pt"
          title="RESERVAR"
        />
      </div>
    </LayoutComponent>
  );
}
