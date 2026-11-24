"use server";

import Image from "next/image";
import diel from '@/public/diretorias/logos/DIEL.png';

export default async function DIEL() {
  return (
    <>
      <section className="h-150 flex justify-center bg-ciano" id="diel">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white max-w-400!'>
          {/* Texto */}
          <div className="text max-w-1/2! relative flex flex-col gap-3">
            <div className="title">
              <h1 className="text-8xl font-bold">DIEL</h1>
              <h2 className="text-[32px] leading-8 ">Diretoria de Esporte e Lazer</h2>
            </div>
            <p className="text-[20px]">Responsável por promover as práticas esportivas entre os discentes do campus, incentivando hábitos de interação saudáveis. Essa diretoria está associada ao incentivo da prática de esporte, colaboração e organização de eventos voltados para o lazer, diretamente relacionados aos estudantes e ao setor esportivo escolar. </p>

            {/* Imagens */}
            <Image src={diel} alt="" className="aspect-square min-w-100 border-24 border-white absolute top-[calc(50%-50px)] -right-1/2 -translate-y-1/2 translate-x-1/2 rounded-2xl w-4/5 max-w-150 shadow-[10px_10px_30px_0px_rgba(0,0,0,25)]" />
          </div>

        </div>
      </section>
      <div className="h-50 invisible" aria-hidden />
    </>
  )
}