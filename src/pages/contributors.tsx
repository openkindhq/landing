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

interface IAvatarPopover {
  name: string;
  username: string;
  link: string;
  avatar: string;
  initial: string;
  social: string;
}

function AvatarPopover({
  name,
  username,
  link,
  avatar,
  initial,
  social,
}: IAvatarPopover) {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={`@${username}`} />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex h-24 w-64 items-center space-x-6 border-0 bg-slate-800 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={`@${username}`} />
          <AvatarFallback>{initial}</AvatarFallback>
        </Avatar>
        <div>
          <span className="flex items-center space-x-2">
            <strong className="font-bold text-neutral-50">{name}</strong>
            <p className="text-xs text-neutral-400">@{username}</p>
          </span>

          <Link href={link} passHref legacyBehavior>
            <Button variant={"link"} className="h-0 p-0 text-neutral-300">
              {social}
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ContributorGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex space-x-2 space-y-2 rounded-md border-[0.25px] border-neutral-800 p-4 lg:w-4/5">
      {children}
    </div>
  );
}

export default function Contributors() {
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
      <main className="h-screen bg-slate-900 px-6 py-12 lg:py-24 lg:px-24">
        <section>
          <h1 className="mb-4 font-heading text-3xl font-semibold text-neutral-50">
            Team
          </h1>
          <ContributorGrid>
            <AvatarPopover
              name="shiv"
              username="shhivv"
              avatar="https://us-east-1.tixte.net/uploads/i.shivs.me/avatar.jpg"  
              initial="S"
              link="https://github.com/shhivv"
              social="GitHub"
            />
          </ContributorGrid>
        </section>
      </main>
    </>
  );
}
