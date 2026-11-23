"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png'
import './style.css';

export default async function DIDH() {
  return (
    <section className="h-150 flex justify-center mt-450" id="didh">
      <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
        {/* Texto */}
        <div className="title absolute top-20 left-115">
          <h1 className="text-8xl font-bold">DIDH</h1>
          <h2 className="text-[32px] leading-8 text-center">Diretoria de <br /> Direitos Humanos</h2>
        </div>
        <p className="text-[20px] absolute top-3/5 right-0 w-175">Responsável por garantir que os direitos dos alunos sejam respeitados em sua plenitude. Essa diretoria promove a  conscientização sobre temáticas relacionadas aos direitos humanos, visando a formação de uma comunidade escolar engajada, promovendo a igualdade, justiça e respeito mútuo.</p>

        {/* Imagens */}
        <Image src={diexe1} alt="" className="aspect-square w-75 border-24 border-white absolute -top-1/10 left-0 rounded-2xl" />
        <Image src={diexe1} alt="" className="aspect-75/40 w-175 absolute -top-1/16 right-0 rounded-2xl" />
        <Image src={diexe1} alt="" className="aspect-75/40 w-175 absolute -bottom-25 left-0 rounded-2xl" />
      </div>
    </section>
  )
}