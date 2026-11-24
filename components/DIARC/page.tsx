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
      <section className="h-150 flex justify-center bg-vermelho" id="diarc">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 left-115">
            <h1 className="text-8xl font-bold">DIARC</h1>
            <h2 className="text-[32px] leading-8 text-center">Diretoria de <br/> Arte e Cultura</h2>
          </div>
          <p className="text-[20px] absolute top-3/5 right-0 w-150">Responsável por promover e valorizar a arte e a cultura dentro do campus. Tem como atribuições o planejamento e a organização de eventos culturais. O objetivo da DIARC é proporcionar momentos de lazer e entretenimento aos alunos, promovendo a diversidade cultural.</p>

          {/* Imagens */}
          <Image src={diarc} alt="" className="aspect-square w-75 border-24 border-white absolute -top-1/10 left-0 rounded-2xl" />
          <Image src={diretoria} alt="" className="aspect-75/40 w-150 absolute -top-1/16 right-0 rounded-2xl" />
          <Image src={cartazes} alt="" className="aspect-75/40 w-150 absolute -bottom-15 left-0 rounded-2xl" />
        </div>
      </section>

      <div className="h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-vermelho">Projetos da DIARC</h1>
          {/* Cards */}
          <div className="flex gap-8 flex-wrap">
            {/* Primeiro Card */}
            <div className="card bg-vermelho-escuro w-full p-16! relative mb-16! text-white">
              <h1>Nossa Cultura em Evidência</h1>
              <p className="max-w-4/6">Semana dedicada à exposição da cultura do Seridó, contando com palestras apresentadas por especialistas, oficinas de cordéis, recitais, apresentação de curtas e exposição de artes. O projeto teve como objetivo valorizar a nossa cultura e costumes, evidenciando o seu papel.</p>
              <Image src={cultura_palestra} alt="" className="absolute right-40 bottom-25 aspect-20/27.5 w-40" /> {/* Imagem da esquerda */}
              <Image src={cultura_cordel} alt="" className="absolute -right-5 bottom-25 aspect-20/27.5 w-40" /> {/* Imagem da direita */}
              <Image src={cultura} alt="" className="absolute -right-5 -bottom-20 aspect-4/2 w-85 z-2" /> {/* Imagem de baixo*/}
              <Image src={rainbow} alt="" className="absolute right-22 bottom-10 aspect-square w-30 z-3" /> {/* Imagem central*/}
            </div>
            {/* Segundo Card */}
            <div className="card bg-rosa-medio relative w-[calc(50%-16px)] pl-40! text-black">
              <h1>Blitz musical</h1>
              <p>Momentos de descontração durante os intervalos, nos quais os alunos podem aproveitar da apresentação de músicas pelos alunos e servidores, tornando o ambiente mais agradável.</p>
              <Image src={blitz2} alt="" className="absolute -left-5 -top-5 aspect-20/19 w-40" /> {/* Imagem de cima */}
              <Image src={blitz1} alt="" className="absolute -left-5 top-35 aspect-20/25 w-40" /> {/* Imagem de baixo */}
            </div>
            {/* Terceiro Card */}
            <div className="card bg-rosa-escuro relative w-[calc(50%-16px)] pl-40! text-black">
              <h1>Blitz musical</h1>
              <p>Momentos de descontração durante os intervalos, nos quais os alunos podem aproveitar da apresentação de músicas pelos alunos e servidores, tornando o ambiente mais agradável.</p>
              <Image src={coelhart} alt="" className="absolute -left-5 -top-5 aspect-20/19 w-40" /> {/* Imagem de cima */}
              <Image src={diadasmaes} alt="" className="absolute -left-5 top-35 aspect-20/25 w-40" /> {/* Imagem de baixo */}
            </div>
          </div>
        </div>
      </section>
      <div className="h-50" />

    </>
  )
}