"use server";

import DIAES from "@/components/DIAES/page";
import DIARC from "@/components/DIARC/page";
import DICOM from "@/components/DICOM/page";
import DIDH from "@/components/DIDH/page";
import DIEL from "@/components/DIEL/page";
import DIEXE from "@/components/DIEXE/page";
import DIMAS from "@/components/DIMAS/page";
import Diretorias from "@/components/Diretorias/page";
import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import Movimento from "@/components/Movimento/page";

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
      <DIMAS />
      <DIEL />
      <DIAES />
      <DICOM />
      <Movimento />
    </main>
  );
}
