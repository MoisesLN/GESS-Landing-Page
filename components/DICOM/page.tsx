"use server";

import Image from "next/image";
import dicom from '@/public/diretorias/logos/DICOM.png';

export default async function DICOM() {
  return (
    <>
      <section className="h-150 flex justify-center bg-laranja" id="dicom">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white max-w-400!'>
          {/* Texto */}
          <div className="text max-w-1/2! relative flex flex-col gap-3">
            <div className="title">
              <h1 className="text-8xl font-bold">DICOM</h1>
              <h2 className="text-[32px] leading-8 ">Diretoria de Comunicação e Relações Externa</h2>
            </div>
            <p className="text-[20px]">Responsável pela comunicação institucional do GESS. Possui a função de gerenciar as redes sociais, criar posts e divulgações, desenvolvendo estratégias de marketing para promover atividades do grêmio. A equipe da DICOM é composta por designers e profissionais de comunicação, garantindo comunicação eficiente e assertiva.</p>

            {/* Imagens */}
            <Image src={dicom} alt="" className="aspect-square min-w-100 border-24 border-white absolute top-[calc(50%-50px)] -right-1/2 -translate-y-1/2 translate-x-1/2 rounded-2xl w-4/5 max-w-150 shadow-[10px_10px_30px_0px_rgba(0,0,0,25)]" />
          </div>

        </div>
      </section>
      <div className="h-50 invisible" aria-hidden />
    </>
  )
}