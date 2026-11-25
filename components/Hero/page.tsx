"use server";

import './style.css';

export default async function Hero() {
  return (
    <section className="h-150 flex justify-center bg-marrom/40" id="sobre-nos">
      <div className='flex flex-col gap-4 flex-1 p-[32px] justify-end lg:justify-center'>
        <h1 className='text-bege font-bold text-center text-3xl lg:text-start lg:text-5xl'>Quem somos nós?</h1>
        <p className='text-white max-w-150 text-center text-md lg:text-start lg:text-2xl '>
          O <b>Grêmio Estudantil Seridó Sertão (GESS)</b> atua no Instituto Federal do Rio Grande do Norte através das diretorias de <b>arte e cultura, comunicação, esporte, direitos humanos, meio ambiente e assistência estudantil.</b> O grêmio representa os alunos da instituição por meio de projetos e ações que visam aumentar a inclusão no ambiente acadêmico.
        </p>
      </div>
    </section>
  )
}