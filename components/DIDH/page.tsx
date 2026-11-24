"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png';
import rainbow from '@/public/rainbow.png';
import './style.css';

export default async function DIDH() {
  return (
    <>
      <section className="h-150 flex justify-center" id="didh">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 left-115">
            <h1 className="text-8xl font-bold">DIDH</h1>
            <h2 className="text-[32px] leading-8 text-center">Diretoria de <br /> Direitos Humanos</h2>
          </div>
          <p className="text-[20px] absolute top-3/5 right-0 w-150">Responsável por garantir que os direitos dos alunos sejam respeitados em sua plenitude. Essa diretoria promove a  conscientização sobre temáticas relacionadas aos direitos humanos, visando a formação de uma comunidade escolar engajada, promovendo a igualdade, justiça e respeito mútuo.</p>

          {/* Imagens */}
          <Image src={diexe1} alt="" className="aspect-square w-75 border-24 border-white absolute -top-1/10 left-0 rounded-2xl" />
          <Image src={diexe1} alt="" className="aspect-75/40 w-150 absolute -top-1/16 right-0 rounded-2xl" />
          <Image src={diexe1} alt="" className="aspect-75/40 w-150 absolute -bottom-15 left-0 rounded-2xl" />
        </div>
      </section>

      <div className="h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-black">Projetos da DIDH</h1>
          {/* Cards */}
          <div className="flex gap-8 flex-wrap">
            {/* Primeiro Card */}
            <div className="card bg-verde w-full p-16! relative mb-16!">
              <h1>Mural Afetivo</h1>
              <p className="max-w-4/6">Espaço construído a partir de oficinas de cartazes, onde os estudantes compartilham ideias, vivências e mensagens sobre diversidade, respeito e acolhimento. Depois, os cartazes ganham espaço nos corredores da escola.</p>
              <Image src={diexe1} alt="" className="absolute right-40 bottom-25 aspect-20/27.5 w-40" /> {/* Imagem da esquerda */}
              <Image src={diexe1} alt="" className="absolute -right-5 bottom-25 aspect-20/27.5 w-40" /> {/* Imagem da direita */}
              <Image src={diexe1} alt="" className="absolute -right-5 -bottom-20 aspect-4/2 w-85 z-2" /> {/* Imagem de baixo*/}
              <Image src={rainbow} alt="" className="absolute right-22 bottom-10 aspect-square w-30 z-3" /> {/* Imagem central*/}
            </div>
            {/* Segundo Card */}
            <div className="card bg-vermelho relative w-[calc(50%-16px)] pl-40!">
              <h1>Rodas de Conversa</h1>
              <p>Momentos de encontro entre estudantes, com o intuito de aproximar suas vivências, compartilhar histórias e experiências. Um espaço de diálogo, escuta e acolhimento, onde todos têm espaço para falar e ser ouvidos.</p>
              <Image src={diexe1} alt="" className="absolute -left-5 -top-5 aspect-20/19 w-40" /> {/* Imagem de cima */}
              <Image src={diexe1} alt="" className="absolute -left-5 top-35 aspect-20/25 w-40" /> {/* Imagem de baixo */}

            </div>
            {/* Terceiro Card */}
            <div className="card bg-roxo relative w-[calc(50%-16px)]">
              <h1>Outros projetos</h1>
              <p className="flex flex-col">
                <span><b>Histórias que Conectam:</b> arrecadação e doação de livros infantis para a APAE e juvenis para o campus de Jucurutu.</span>
                <span><b>Blitz Poética Arco-íris:</b> leva música, poemas e pequenas leituras para o cotidiano da escola.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-50" />

    </>
  )
}