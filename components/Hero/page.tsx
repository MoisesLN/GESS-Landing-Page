"use server";

import './style.css';

export default async function Hero() {
  return (
    <section className="h-150 flex justify-center bg-marrom/40" id="sobre-nos">
      <div className='max-w-400 flex flex-col gap-4 justify-center flex-1 px-4 '>
        <h1 className='text-bege text-5xl font-bold'>Quem somos nós?</h1>
        <p className='text-white text-2xl max-w-150'>
          O <b>Grêmio Estudantil Seridó Sertão (GESS)</b> atua no Instituto Federal do Rio Grande do Norte através das diretorias de <b>arte e cultura, comunicação, esporte, direitos humanos, meio ambiente e assistência estudantil.</b> O grêmio representa os alunos da instituição por meio de projetos e ações que visam aumentar a inclusão no ambiente acadêmico.
        </p>
      </div>
    </section>
  )
}