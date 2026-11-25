"use server";

import Image from "next/image";
import diel from '@/public/diretorias/logos/DIEL.png';

export default async function DIEL() {
  return (
    <>
      <section className="h-125 lg:h-150 flex justify-center bg-ciano" id="diel">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white max-w-400!'>
          {/* Texto */}
          <div className="text lg:max-w-1/2! relative flex flex-col gap-8">
            <div className="title">
              <h1 className="text-3xl lg:text-8xl font-bold">DIEL</h1>
              <h2 className="text-xl lg:text-[32px]">Diretoria de Esporte e Lazer</h2>
            </div>
            <p className="text-md lg:text-[28px] w-full">Responsável por promover as práticas esportivas entre os discentes do campus, incentivando hábitos de interação saudáveis. Essa diretoria está associada ao incentivo da prática de esporte, colaboração e organização de eventos voltados para o lazer, diretamente relacionados aos estudantes e ao setor esportivo escolar. </p>
          </div>
          {/* Imagens */}
          <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -top-10 lg:w-160 lg:top-auto lg:right-0 rounded-2xl bg-white shadow-2xl">
            <Image src={diel} alt="" className="aspect-square size-25 lg:size-145 rounded-xl" />
          </div>
        </div>
      </section>
      <div className="h-20 lg:h-50 invisible" aria-hidden />
    </>
  )
}