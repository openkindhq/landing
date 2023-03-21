import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, DM_Sans } from "@next/font/google";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dm.variable} ${poppins.variable} font-main`}>
      <Component {...pageProps} />
    </main>
  );
}
