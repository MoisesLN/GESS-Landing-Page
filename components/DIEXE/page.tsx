"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png'

export default async function DIEXE() {
  return (
    <section className="h-150 flex justify-center bg-laranja-gremio" id="diexe">
      <div className='flex flex-col gap-3 justify-center flex-1 relative text-black'>
        {/* Texto */}
        <div className="title absolute top-20 left-115">
          <h1 className="text-8xl font-bold">DIEXE</h1>
          <h2 className="text-[32px] leading-8 text-center">Secretaria <br /> Geral</h2>
        </div>
        <p className="text-[20px] absolute top-3/5 right-0 w-150">Responsável por administrar as informações e  documentações do grêmio, bem como auxiliar no planejamento e organização das atividades e eventos. Além disso, desempenha papel fundamental para dar suporte da presidência, mas isso não exclui seu compromisso com as demais diretorias.</p>

        {/* Imagens */}
        <Image src={diexe1} alt="" className="aspect-square w-75 border-24 border-black absolute -top-1/10 left-0 rounded-2xl" />
        <Image src={diexe1} alt="" className="aspect-75/40 w-150 absolute -top-1/16 right-0 rounded-2xl" />
        <Image src={diexe1} alt="" className="aspect-75/40 w-150 absolute -bottom-15 left-0 rounded-2xl" />
      </div>
    </section>
  )
}