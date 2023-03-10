import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Current from "@/components/sections/Current";
import News from "@/components/sections/News";
import Goto from "@/components/sections/Goto";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <Current />
        <News />
        <Goto />
      </main>
    </>
  );
}
