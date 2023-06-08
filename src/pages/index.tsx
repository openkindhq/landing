import Link from "@/components/Link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenKind | Impactful solutions, powered by collaborative development</title>
        <meta
          name="description"
          content="We build effective solutions to global issues through collaboration"
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="h-full space-y-6 bg-background">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="w-4/5 space-y-4">
            <h1 className="font-heading text-xl text-neutral-400 lg:text-3xl">
              Ξ OpenKind
            </h1>
            <div className="flex font-heading">
              <div className="w-screen text-3xl font-black uppercase text-neutral-200 lg:text-7xl">
                <h1 className="flex justify-start">Impactful solutions,</h1>
                <div className="flex justify-end">
                  <span>
                    powered by collaborative development
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-4 py-8 lg:text-xl">
              <Link href="#c" label="Learn more" samePage />
              <Link href="/contributors" label="Contributors" />
            </div>
          </div>
        </div>

        <div className="flex justify-center" id="c">
          <div className="flex w-4/5 flex-col py-24 lg:w-2/3">
            <section className="text-base text-text">
              By leveraging modern-day technologies and the power of
              collaborative development, we develop solutions to global issues
              that actually need attention.
              <div className="my-4 flex w-4/5 flex-col space-y-3 border-l-4 border-neutral-500 px-8 py-4">
                <q>
                  The original idea of the web was that it should be a
                  collaborative space where you can communicate through sharing
                  information.{" "}
                </q>
                <label className="ml-4 font-bold">
                  {" "}
                  - Tim Berners-Lee, creator of the World Wide Web
                </label>
              </div>
              From simple HTML web pages to AI technology that can generate
              videos from text, the history of computing has evolved a lot, only
              increasing the untapped potential in creating global impact.
              <div className="py-4">
                <Link
                  href="https://discord.gg/R4wJ2TDshg"
                  label="Stay updated"
                />
              </div>
            </section>
            <div>
              <h1 className="py-8 text-2xl font-bold text-text">Initiatives</h1>
              <div className="space-y-8">
                <section className="space-y-2 py-0 px-8">
                  <h1 className="font-heading text-xl text-neutral-300">
                    HealthDeck
                  </h1>
                  <h2 className="text-base text-neutral-400">
                    Dashboard for general health metrics and information
                  </h2>
                  <p className="text-sm text-neutral-400">
                    Your dashboard for general health metrics and information.
                    Find the latest COVID-19 statistics, information on any
                    disease or condition and discover doctors near you all at
                    one place.
                  </p>
                  <div className="flex space-x-2">
                    <Link
                      href="https://healthdeck.openkind.org"
                      label="Visit"
                    />
                    <Link
                      href="https://github.com/openkindhq/healthdeck"
                      label="GitHub"
                    />
                  </div>
                </section>
                <section className="flex space-x-2 py-0 px-8 text-neutral-400">
                  <p>Have an idea that belongs here?</p>
                  <Link
                    href="https://discord.gg/R4wJ2TDshg"
                    label="Contribute"
                  />
                </section>
              </div>
            </div>
            <div className="py-8">
              <h1 className="text-2xl font-bold text-text">Get involved</h1>
              <div className="space-y-8 p-8 text-neutral-400">
                <div className="space-y-2">
                  <p>
                    All our code is open source on GitHub and is mainly built on
                    modern web technologies.
                    <br />
                    Contribute code by improving current features or adding new
                    features
                  </p>

                  <Link
                    href="https://github.com/openkindhq/"
                    label="Contribute code"
                  />
                </div>

                <div className="space-y-2">
                  <p>
                    We hope to make our Initiatives accessible around the globe
                  </p>

                  <Link
                    href="https://github.com/openkindhq/"
                    label="Help translate"
                  />
                </div>

                <div className="space-y-2">
                  <p>Think you could help us in any other way?</p>

                  <Link
                    href="https://discord.gg/R4wJ2TDshg"
                    label="Contribute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
