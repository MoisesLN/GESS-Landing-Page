"use server";

import Image from "next/image";
import DIAES from '@/public/diretorias/logos/DIAES.png';
import DIARC from '@/public/diretorias/logos/DIARC.png';
import DICOM from '@/public/diretorias/logos/DICOM.png';
import DIDH from '@/public/diretorias/logos/DIDH.png';
import DIEL from '@/public/diretorias/logos/DIEL.png';
import DIMAS from '@/public/diretorias/logos/DIMAS.png';
import flor from '@/public/flor.png';

import './style.css';

export default async function Diretorias() {
  return (
    <section className="h-85 lg:h-150 flex justify-center bg-bege relative" id="diretorias">
      {/* Flor */}
      <Image src={flor} alt="" className="absolute -top-35 -right-30 w-70 lg:-top-80 lg:-right-50 aspect-square lg:w-150" />

      {/* Seção */}
      <div className='flex flex-col gap-10 justify-center flex-1'>
        <div className='flex flex-col gap-2'>
          <h1 className="text-laranja-escuro font-bold text-3xl lg:text-5xl">Diretorias do GESS</h1>
          <span className='text-black text-md lg:text-2xl'>Acesse todas as diretorias da Gestão clicando para ver mais informações.</span>
        </div>
        <div className="images flex overflow-x-auto lg:overflow-x-hidden justify-between *:aspect-square">
          <a href="#diaes"><Image src={DIAES} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
          <a href="#diarc"><Image src={DIARC} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
          <a href="#dicom"><Image src={DICOM} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
          <a href="#didh"><Image src={DIDH} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
          <a href="#diel"><Image src={DIEL} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
          <a href="#dimas"><Image src={DIMAS} alt="" className="size-28 lg:size-62.5 rounded-2xl"/></a>
        </div>
      </div>
    </section>
  )
}