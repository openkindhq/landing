import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Red_Hat_Display, Poppins } from "@next/font/google";

const rhd = Red_Hat_Display({ subsets: ["latin"], variable: "--font-rhd" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rhd.variable} ${poppins.variable} font-main`}>
      <Component {...pageProps} />
    </main>
  );
}
