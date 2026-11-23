"use server";

import Image from "next/image";
import DIAES from '@/public/DIAES.png';
import flor from '@/public/flor.png'

export default async function Diretorias() {
  return (
    <section className="h-150 flex justify-center bg-bege relative" id="diretorias">
      {/* Flor */}
      <Image src={flor} alt="" className="absolute -top-80 -right-50 aspect-square w-150" />

      {/* Seção */}
      <div className='flex flex-col gap-10 justify-center flex-1'>
        <div className='flex flex-col gap-2'>
          <h1 className="text-laranja-escuro text-5xl font-bold">Diretorias do GESS</h1>
          <span className='text-black text-[20px]'>Acesse todas as diretorias da Gestão clicando para ver mais informações.</span>
        </div>
        <div className="images flex gap-5 *:aspect-square">
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
          <a href="#"><Image src={DIAES} alt="" className="h-62.5"/></a>
        </div>
      </div>
    </section>
  )
}