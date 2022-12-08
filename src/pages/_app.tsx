import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalsProvider } from "../context/ModalsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalsProvider>
      <Component {...pageProps} />
    </ModalsProvider>
  );
}
