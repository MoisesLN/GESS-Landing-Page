"use server";

import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";

export default async function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <Hero />
      Abc
    </main>
  );
}
