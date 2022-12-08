import { ReactNode } from "react";
import { FooterComponent } from "./footer";
import HeaderComponent from "./header";

interface LayoutComponentProps {
  children: ReactNode;
}
export default function LayoutComponent({ children }: LayoutComponentProps) {
  return (
    <div
      className="h-screen relative  flex justify-center items-center h-screnn w-full bg-house-01 bg-no-repeat bg-cover 
    bg-center background-clip:border-box cursor-pointer"
    >
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
