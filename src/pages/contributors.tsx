import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@openkind/components";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IUser {
  login: string;
  html_url: string;
  avatar_url: string;
  initial: string;
  social: string;
}

function AvatarPopover({
  login,
  html_url,
  avatar_url,
  initial,
  social,
}: IUser) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar_url} alt={`@${login}`} />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex h-24 w-64 items-center space-x-6 border-0 bg-slate-800 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar_url} alt={`@${login}`} />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
        <div>
          <span className="flex items-center space-x-2">
            <strong className="font-bold text-neutral-50">@{login}</strong>
          </span>

          <Link href={html_url} passHref legacyBehavior>
            <Button variant={"link"} className="h-0 p-0 text-neutral-300">
              {social}
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ContributorGrid({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <h1 className="font-heading text-2xl font-medium text-neutral-300">
        {title}
      </h1>
      <div className="flex space-x-2 space-y-2 rounded-md border-[0.25px] border-neutral-800 p-4 lg:w-4/5">
        {children}
      </div>
    </div>
  );
}

export default function Contributors() {
  let [contributors, setContributors] = useState<{[name: string]: IUser[]}>({
    healthDeck: [],
  });

  async function getContributors(repo: string){
    return fetch(`https://api.github.com/repos/openkindhq/${repo}/contributors`)
      .then((resp) => resp.json())
      .then((data: IUser[]) => {
        return data.map((i) => {
          return {
            login: i.login,
            html_url: i.html_url,
            avatar_url: i.avatar_url,
            initial: i.login[0].toLocaleUpperCase(),
            social: "GitHub",
          };
        });
      });
  }
  useEffect(() => {
    (async () => {
      setContributors({
        healthDeck: await getContributors("healthdeck"),
      });
    })();
  });
  return (
    <>
      <Head>
        <title>Contributors | OpenKind</title>
        <meta
          name="description"
          content="Global issues, collaboratively solved."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="h-screen space-y-6 bg-slate-900 px-6 py-12 lg:py-24 lg:px-24">
        <ContributorGrid title="Team">
          <AvatarPopover
            login="shhivv"
            avatar_url="https://github.com/shhivv.png"
            initial="S"
            html_url="https://github.com/shhivv"
            social="GitHub"
          />
        </ContributorGrid>
        <ContributorGrid title="HealthDeck">
          {contributors.healthDeck.map((i) => (
            <AvatarPopover
              key={i.login}
              login={i.login}
              avatar_url={i.avatar_url}
              initial={i.initial}
              social={i.social}
              html_url={i.html_url}
            />
          ))}
        </ContributorGrid>
      </main>
    </>
  );
}
