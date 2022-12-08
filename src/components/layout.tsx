import { ReactNode } from "react";
import HeaderComponent from "./header";

interface LayoutComponentProps {
  children: ReactNode;
}
export default function LayoutComponent({ children }: LayoutComponentProps) {
  return (
    <div className="flex w-full h-screen relative">
      <HeaderComponent />
      {children}
    </div>
  );
}
