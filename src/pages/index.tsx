import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenKind | Global issues, collaboratively solved</title>
        <meta
          name="description"
          content="We build effective solutions to global issues through collaboration"
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-slate-900">
        <div className="z-10 flex w-4/5 flex-col items-center justify-center space-y-8 text-center lg:w-2/3">
          <h1 className="font-heading text-5xl font-bold text-neutral-50 lg:text-7xl">
            Ξ OpenKind
          </h1>
          <h2 className="w-4/5 text-base text-neutral-300 lg:w-2/5 lg:text-lg">
            We build effective solutions to global issues through collaboration
          </h2>

          <div className="flex space-x-2">
            <Link href={"/contributors"} passHref legacyBehavior>
              <a className="flex h-11 w-32 items-center justify-center  rounded-lg border border-neutral-500 bg-slate-900 bg-opacity-30 text-base font-normal text-neutral-300 backdrop-blur-xl hover:bg-slate-800 lg:w-44 lg:text-lg">
                Contributors
              </a>
            </Link>
            <Link
              href={"https://github.com/openkindhq"}
              passHref
              legacyBehavior
            >
              <a className="bg-neutral-2 flex h-11 w-32  items-center justify-center rounded-lg border border-neutral-500 bg-neutral-200 text-base  text-neutral-800  hover:bg-neutral-300 lg:w-44 lg:text-lg">
                Initiatives
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
