"use server";

import Image from "next/image";
import didh from '@/public/diretorias/logos/DIDH.png';
import cartazes1 from '@/public/diretorias/didh/oficina_cartazes1.png'
import cartazes_afetivos from '@/public/diretorias/didh/cartazes_afetivos.png'
import card1 from '@/public/diretorias/didh/oficina_cartazes2.png'
import card12 from '@/public/diretorias/didh/mural_afetivo2.png'
import card13 from '@/public/diretorias/didh/mural_afetivo1.png'
import card2 from '@/public/diretorias/didh/oficina_cartazes3.png'
import card22 from '@/public/diretorias/didh/oficina_cartazes4.png'
import didhRainbow from '@/public/diretorias/didh/rainbow.png'

import rainbow from '@/public/rainbow.png';
import './style.css';

export default async function DIDH() {
  return (
    <>
      <section className="h-115 lg:h-170 flex justify-center" id="didh">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 lg:left-110">
            <h1 className="text-3xl lg:text-8xl font-bold lg:text-center">DIDH</h1>
            {/* Computador */}
            <h2 className="hidden lg:block text-[32px] leading-8 text-center">Diretoria de <br /> Direitos Humanos</h2>
            {/* Mobile */}
            <h2 className="flex lg:hidden text-xl lg:text-[32px] leading-8 text-center">Diretoria de Direitos Humanos</h2>
          </div>
          <p className="text-md lg:text-[28px] absolute left-[32px] right-[32px] top-40 lg:left-205 lg:top-5/9 lg:right-0 lg:w-190">Responsável por garantir que os direitos dos alunos sejam respeitados em sua plenitude. Essa diretoria promove a  conscientização sobre temáticas relacionadas aos direitos humanos, visando a formação de uma comunidade escolar engajada, promovendo a igualdade, justiça e respeito mútuo.</p>

          {/* Imagens */}
          <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -bottom-5 lg:w-85 lg:-top-1/16 lg:left-0 rounded-2xl bg-white shadow-2xl">
            <Image src={didh} alt="" className="aspect-square size-25 lg:size-75 rounded-xl" />
          </div>
          <Image src={cartazes1} alt="" className="aspect-70/40 lg:aspect-75/35 absolute right-[32px] -top-5 lg:-top-1/16 lg:right-0 rounded-2xl shadow-2xl w-50 lg:w-200" />
          <Image src={cartazes_afetivos} alt="" className="aspect-70/40 lg:aspect-75/40 absolute -bottom-5 lg:-bottom-15 lg:left-0 rounded-2xl shadow-2xl w-50 lg:w-180" />
        </div>
      </section>

      <div className="h-20 lg:h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-black">Projetos da DIDH</h1>
          {/* Cards */}
          <div className="flex gap-8 flex-wrap">
            {/* Primeiro Card */}
            <div className="card bg-verde w-full pb-20! lg:p-16! relative mb-16!">
              <h1>Mural Afetivo</h1>
              <p className="lg:max-w-4/6">Espaço construído a partir de oficinas de cartazes, onde os estudantes compartilham ideias, vivências e mensagens sobre diversidade, respeito e acolhimento. Depois, os cartazes ganham espaço nos corredores da escola.</p>
              <Image src={card1} alt="" className="absolute -bottom-10 right-70 lg:right-40 lg:bottom-30 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da esquerda */}
              <Image src={card12} alt="" className="absolute right-52 -bottom-10 lg:-right-5 lg:bottom-30 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da direita */}
              <Image src={card13} alt="" className="absolute right-5 -bottom-10 lg:-right-5 lg:-bottom-15 aspect-4/2 w-45 lg:w-85 z-2" /> {/* Imagem de baixo*/}
              <Image src={rainbow} alt="" className=" hidden lg:block absolute lg:right-22 lg:bottom-15 aspect-square w-45 lg:w-30 z-3" /> {/* Imagem central*/}
            </div>
            {/* Segundo Card */}
            <div className="card bg-vermelho relative lg:w-[calc(50%-16px)] pb-20! lg:h-72 lg:pl-40!">
              <h1>Rodas de Conversa</h1>
              <p>Momentos de encontro entre estudantes, com o intuito de aproximar suas vivências, compartilhar histórias e experiências. Um espaço de diálogo, escuta e acolhimento, onde todos têm espaço para falar e ser ouvidos.</p>
              <Image src={card22} alt="" className="absolute -bottom-15 left-5 lg:-left-5 lg:-top-10 aspect-20/19 h-28 w-28 lg:h-auto lg:w-40" /> {/* Imagem de cima */}
              <Image src={card2} alt="" className="absolute -bottom-15 left-35 lg:-left-5 lg:top-30 aspect-70/41 lg:aspect-20/25 h-28 w-50 lg:h-auto lg:w-40" /> {/* Imagem de baixo */}

            </div>
            {/* Terceiro Card */}
            <div className="card bg-roxo relative mt-20! lg:mt-0! lg:w-[calc(50%-16px)]">
              <h1>Outros projetos</h1>
              <p className="flex flex-col">
                <span><b>Histórias que Conectam:</b> arrecadação e doação de livros infantis para a APAE e juvenis para o campus de Jucurutu.</span>
                <span><b>Blitz Poética Arco-íris:</b> leva música, poemas e pequenas leituras para o cotidiano da escola.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20 lg:h-50" />

    </>
  )
}