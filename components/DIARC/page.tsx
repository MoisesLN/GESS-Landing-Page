"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png';
import diarc from '@/public/diretorias/logos/DIARC.png';
import blitz1 from '@/public/diretorias/diarc/blitz_musical.png';
import blitz2 from '@/public/diretorias/diarc/blitz_musical2.png';
import cultura from '@/public/diretorias/diarc/cultura_em_evidencia.png';
import cultura_cordel from '@/public/diretorias/diarc/cultura_em_evidencia_cordel.png';
import cultura_palestra from '@/public/diretorias/diarc/cultura_em_evidencia_palestra.png';
import diadasmaes from '@/public/diretorias/diarc/dias_das_maes.png';
import diretoria from '@/public/diretorias/diarc/diretoria.png';
import cartazes from '@/public/diretorias/diarc/exposicao_cartazes.png';
import coelhart from '@/public/diretorias/diarc/coelhart.png';
import rainbow from '@/public/diretorias/diarc/sol.png';

export default async function DIARC() {
  return (
    <>
      <section className="h-115 lg:h-170 flex justify-center bg-vermelho" id="diarc">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 lg:left-110">
            <h1 className="text-3xl lg:text-8xl font-bold lg:text-center">DIARC</h1>
            {/* Computador */}
            <h2 className="hidden lg:block text-[32px] leading-8 text-center">Diretoria de <br/> Arte e Cultura</h2>
            {/* Mobile */}
            <h2 className="flex lg:hidden text-xl lg:text-[32px] leading-8 text-center">Diretoria de Arte e Cultura</h2>
          </div>
          <p className="text-md lg:text-[28px] absolute left-[32px] right-[32px] top-40 lg:left-205 lg:top-5/9 lg:right-0 lg:w-190">Responsável por promover e valorizar a arte e a cultura dentro do campus. Tem como atribuições o planejamento e a organização de eventos culturais. O objetivo da DIARC é proporcionar momentos de lazer e entretenimento aos alunos, promovendo a diversidade cultural.</p>

          {/* Imagens */}
          <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -bottom-5 lg:w-85 lg:-top-1/16 lg:left-0 rounded-2xl bg-white shadow-2xl">
            <Image src={diarc} alt="" className="aspect-square size-25 lg:size-75 rounded-xl" />
          </div>
          <Image src={diretoria} alt="" className="aspect-70/40 lg:aspect-75/35 absolute right-[32px] -top-5 lg:-top-1/16 lg:right-0 rounded-2xl shadow-2xl w-50 lg:w-200" />
          <Image src={cartazes} alt="" className="aspect-70/40 lg:aspect-75/40 absolute -bottom-5 lg:-bottom-15 lg:left-0 rounded-2xl shadow-2xl w-50 lg:w-180" />
        </div>
      </section>

      <div className="h-20 lg:h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-vermelho">Projetos da DIARC</h1>
          {/* Cards */}
          <div className="flex gap-8 flex-wrap">
            {/* Primeiro Card */}
            <div className="card bg-vermelho-escuro w-full pb-20! lg:p-16! relative mb-16!">
              <h1>Nossa Cultura em Evidência</h1>
              <p className="lg:max-w-4/6">Semana dedicada à exposição da cultura do Seridó, contando com palestras apresentadas por especialistas, oficinas de cordéis, recitais, apresentação de curtas e exposição de artes. O projeto teve como objetivo valorizar a nossa cultura e costumes, evidenciando o seu papel.</p>
              <Image src={cultura_palestra} alt="" className="absolute -bottom-10 right-70 lg:right-40 lg:bottom-30 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da esquerda */}
              <Image src={cultura_cordel} alt="" className="absolute right-52 -bottom-10 lg:-right-5 lg:bottom-30 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da direita */}
              <Image src={cultura} alt="" className="absolute right-5 -bottom-10 lg:-right-5 lg:-bottom-15 aspect-4/2 w-45 lg:w-85 z-2" /> {/* Imagem de baixo*/}
              <Image src={rainbow} alt="" className=" hidden lg:block absolute lg:right-22 lg:bottom-15 aspect-square w-45 lg:w-30 z-3" /> {/* Imagem central*/}
            </div>
            {/* Segundo Card */}
            <div className="card bg-rosa-medio relative lg:w-[calc(50%-16px)] pb-20! lg:h-72 lg:p-15! lg:pl-40! text-black">
              <h1>Blitz musical</h1>
              <p>Momentos de descontração durante os intervalos, nos quais os alunos podem aproveitar da apresentação de músicas pelos alunos e servidores, tornando o ambiente mais agradável.</p>
              <Image src={blitz2} alt="" className="absolute -bottom-15 left-5 lg:-left-5 lg:-top-10 aspect-20/19 h-28 w-28 lg:h-auto lg:w-40" /> {/* Imagem de cima */}
              <Image src={blitz1} alt="" className="absolute -bottom-15 left-35 lg:-left-5 lg:top-30 aspect-70/41 lg:aspect-20/25 h-28 w-50 lg:h-auto lg:w-40" /> {/* Imagem de baixo */}
            </div>
            {/* Terceiro Card */}
            <div className="card bg-rosa-escuro relative lg:w-[calc(50%-16px)] mt-20! pb-20! lg:mt-0! lg:p-13! lg:pl-40! text-black">
              <h1>Outros projetos</h1>
              <p className="flex flex-col">
                <span><b>Coelhart:</b> projeto de páscoa realizado no campus.</span>
                <br />
                <span><b>Dia das Mães:</b> exposição de mensagens de carinho na janela do grêmio estudantil.</span>
              </p>
              <Image src={coelhart} alt="" className="absolute -bottom-15 left-5 lg:-left-5 lg:-top-10 aspect-20/19 h-28 w-28 lg:h-auto lg:w-40" /> {/* Imagem de cima */}
              <Image src={diadasmaes} alt="" className="absolute -bottom-15 left-35 lg:-left-5 lg:top-30 aspect-70/41 lg:aspect-20/25 h-28 w-50 lg:h-auto lg:w-40" /> {/* Imagem de baixo */}

            </div>
          </div>
        </div>
      </section>
      <div className="h-35 lg:h-50" />

    </>
  )
}