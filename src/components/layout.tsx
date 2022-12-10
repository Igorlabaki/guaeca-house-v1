import { ReactNode } from "react";
import { FooterComponent } from "./footer";
import HeaderComponent from "./header";

interface LayoutComponentProps {
  children: ReactNode;
}
export default function LayoutComponent({ children }: LayoutComponentProps) {
  return (
    <div className="h-screen w-full relative flex flex-col justify-center items-center">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
