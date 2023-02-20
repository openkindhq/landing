import Head from "next/head";
import { Red_Hat_Display, Poppins } from "@next/font/google";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

export default function Home() {
  const N = 30;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    fetch("places.geojson")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <>
      <Head>
        <title>OpenKind</title>
        <meta name="description" content="Collaborative Social Impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="bg-slate-900 flex flex-col items-center justify-center h-screen"
        id="app"
      >
        <div className="z-20  w-4/5 lg:w-2/3 text-center items-center justify-center flex flex-col space-y-8">
          <div className="text-5xl lg:text-7xl font-bold text-neutral-50 font-heading">
            Ξ OpenKind
          </div>
          <div className="text-base lg:text-lg w-4/5 lg:w-2/5 text-neutral-300">
            We build effective solutions to global issues through collaboration
          </div>

          <Link href={"https://discord.gg/R4wJ2TDshg"} passHref legacyBehavior>
            <a className="text-base lg:text-lg border border-neutral-500 hover:bg-neutral-800  backdrop-blur-xl font-normal bg-neutral-300 bg-opacity-30 rounded-lg w-32 h-11 lg:w-44 flex items-center justify-center text-neutral-300">
              Contribute
            </a>
          </Link>
        </div>
        <div className="bottom-0 fixed opacity-40">
          <Globe
            showGlobe={false}
            arcsData={arcsData}
            showAtmosphere={false}
            pointAltitude="size"
            pointColor="color"
            arcColor={"color"}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.3}
            hexPolygonColor={() => "rgba(255, 255, 255, 0.3)"}
          />
        </div>
      </main>
    </>
  );
}
