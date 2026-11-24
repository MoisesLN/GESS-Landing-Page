"use server";

import Image from "next/image";
import diaes from '@/public/diretorias/logos/DIAES.png';

export default async function DIAES() {
  return (
    <>
      <section className="h-150 flex justify-end bg-rosa" id="diaes">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white max-w-1/2!'>
          {/* Texto */}
          <div className="title">
            <h1 className="text-8xl font-bold">DIAES</h1>
            <h2 className="text-[32px] leading-8 ">Diretoria de Assistência Estudantil</h2>
          </div>
          <p className="text-[20px]">Responsável por prestar apoio aos alunos, assegurando a proteção de seus direitos e o cumprimento de seus deveres. Essa diretoria está envolvida em todas as questões relacionadas aos estudantes, visando proporcionar um ambiente favorável ao desenvolvimento acadêmico e pessoal dos mesmos.</p>

          {/* Imagens */}
          <Image src={diaes} alt="" className="aspect-square min-w-100 w-4/5 max-w-150 border-24 border-white absolute top-[calc(50%-50px)] left-[-110%] -translate-y-1/2 translate-x-1/2 rounded-2xl shadow-[10px_10px_30px_0px_rgba(0,0,0,25)]" />
        </div>
      </section>
      <div className="h-50 invisible" aria-hidden />
    </>
  )
}