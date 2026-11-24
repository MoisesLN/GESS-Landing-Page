"use server";

import DIARC from "@/components/DIARC/page";
import DIDH from "@/components/DIDH/page";
import DIEXE from "@/components/DIEXE/page";
import Diretorias from "@/components/Diretorias/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";

export default async function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden overflow-y-hidden">
      <Header />
      <Hero />
      <Diretorias />
      <DIEXE />
      <div className="h-50 invisible" aria-hidden />
      <DIDH />
      <DIARC />
    </main>
  );
}
