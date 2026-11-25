"use server";

import Image from "next/image";
import diaes from '@/public/diretorias/logos/DIAES.png';

export default async function DIAES() {
  return (
    <>
      <section className="h-125 lg:h-150 flex justify-center bg-rosa" id="diel">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white max-w-400!'>
          {/* Texto */}
          <div className="text lg:max-w-1/2! lg:left-180 relative flex flex-col gap-8">
            <div className="title">
              <h1 className="text-3xl lg:text-8xl font-bold">DIAES</h1>
              <h2 className="text-xl lg:text-[32px]">Diretoria de Assistência Estudantil</h2>
            </div>
            <p className="text-md lg:text-[28px] w-full">Responsável por prestar apoio aos alunos, assegurando a proteção de seus direitos e o cumprimento de seus deveres. Essa diretoria está envolvida em todas as questões relacionadas aos estudantes, visando proporcionar um ambiente favorável ao desenvolvimento acadêmico e pessoal dos mesmos.</p>
          </div>
          {/* Imagens */}
          <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -top-10 lg:w-160 lg:top-auto lg:left-0 rounded-2xl bg-white shadow-2xl">
            <Image src={diaes} alt="" className="aspect-square size-25 lg:size-145 rounded-xl" />
          </div>
        </div>
      </section>
      <div className="h-20 lg:h-50 invisible" aria-hidden />
    </>
  )
}