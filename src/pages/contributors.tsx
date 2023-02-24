import { Avatar, AvatarFallback, AvatarImage, Button, Popover, PopoverContent, PopoverTrigger } from "@openkind/components";
import Head from "next/head";
import Link from "next/link";

interface IAvatarPopover{
  name: string,
  username: string,
  link: string,
  avatar: string,
  initial: string,
  social: string
}

function AvatarPopover({name, username, link, avatar, initial, social}: IAvatarPopover){
  return <Popover>
    <PopoverTrigger>
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatar} alt={`@${username}`}/>
        <AvatarFallback>{initial}</AvatarFallback>
      </Avatar>
    </PopoverTrigger>
    <PopoverContent className="w-64 h-24 p-4 bg-slate-800 flex items-center space-x-6 border-0">
    <Avatar className="h-12 w-12">
        <AvatarImage src={avatar} alt={`@${username}`}/>
        <AvatarFallback>{initial}</AvatarFallback>
      </Avatar>
      <div>
      <span className="flex space-x-2 items-center">
      <strong className="text-neutral-50 font-bold">{name}</strong>
        <p className="text-neutral-400 text-xs">@{username}</p>
      </span>
        

      <Link href={link} passHref legacyBehavior>
      <Button variant={"link"} className="h-0 p-0 text-neutral-300">{social}</Button>
      </Link> 
      </div>

        
    </PopoverContent>
  </Popover>
}

function ContributorGrid({children}: {children: React.ReactNode}){
  return <div className="border-[0.25px] border-neutral-800 rounded-md flex space-x-2 space-y-2 p-4 lg:w-4/5">{children}</div>
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
      <main
        className="h-screen px-6 py-12 lg:py-24 lg:px-24 bg-slate-900"
      >
        <section>
            <h1 className="font-heading font-semibold text-3xl text-neutral-50 mb-4">Team</h1>
            <ContributorGrid>
               <AvatarPopover name="shiv" username="shhivv" avatar="https://github.com/shhivv.png" initial="S" link="https://github.com/shhivv" social="GitHub"/>
            </ContributorGrid>
        </section>
      </main>
    </>
  );
}
