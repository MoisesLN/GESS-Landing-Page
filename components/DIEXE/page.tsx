"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png'
import banner from '@/public/diretorias/diexe/banner.png'
import diretoria from '@/public/diretorias/diexe/diretoria.png'
import presidente from '@/public/diretorias/diexe/presidente.png'

export default async function DIEXE() {
  return (
    <section className="h-115 lg:h-170 flex justify-center bg-laranja-gremio" id="diexe">
      <div className='flex flex-col gap-3 justify-center flex-1 relative text-black'>
        {/* Texto */}
        <div className="title absolute top-20 lg:left-110">
          <h1 className="text-3xl lg:text-8xl font-bold lg:text-center">DIEXE</h1>
          {/* Computador */}
          <h2 className="hidden lg:block text-[32px] leading-8 text-center">Secretaria <br /> Geral</h2>
          {/* Mobile */}
          <h2 className="flex lg:hidden text-xl lg:text-[32px] leading-8 text-center">Secretaria Geral</h2>
        </div>
        <p className="text-md lg:text-[28px] absolute left-[32px] right-[32px] top-40 lg:left-205 lg:top-5/9 lg:right-0 lg:w-190">Responsável por administrar as informações e  documentações do grêmio, bem como auxiliar no planejamento e organização das atividades e eventos. Além disso, desempenha papel fundamental para dar suporte da presidência, mas isso não exclui seu compromisso com as demais diretorias.</p>

        {/* Imagens */}
        <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -bottom-5 lg:w-85 lg:-top-1/16 lg:left-0 rounded-2xl bg-black shadow-2xl">
          <Image src={diexe1} alt="" className="aspect-square size-26 lg:size-75 rounded-xl" />
        </div>
        <Image src={banner} alt="" className="aspect-70/40 lg:aspect-75/35 absolute right-[32px] -top-5 lg:-top-1/16 lg:right-0 rounded-2xl shadow-2xl w-50 lg:w-200" />
        <Image src={diretoria} alt="" className="aspect-70/40 lg:aspect-75/40 absolute -bottom-5 lg:-bottom-15 lg:left-0 rounded-2xl shadow-2xl w-50 lg:w-180" />
      </div>
    </section>
  )
}