"use server";

import Diretorias from "@/components/Diretorias/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";

export default async function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Diretorias />
      Abc
    </main>
  );
}
