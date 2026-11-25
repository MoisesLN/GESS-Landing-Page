"use server";
import Image from "next/image"
import gess_white from '@/public/gess_white.png';

export default async function Header() {
  return (
    // Deixar sticky
    <>
      <header className='py-6 bg-laranja-escuro flex justify-center'>
        <div className='max-w-400 flex items-center text-bege flex-1 justify-center lg:justify-between'>
          <a href="#sobre-nos"><Image width={200} height={40} src={gess_white} alt='' className="brightness-200 h-10 w-35"/></a>
          <div className="hidden gap-10 lg:flex">
            <a href="#sobre-nos" className="ml-auto!">Quem somos nós?</a>
            <a href="#redes">Nossas redes</a>
            <a href="#diretorias">Diretorias</a>
            <a href="#didh">Projetos e ações</a>
            <a href="#movimento">Movimento</a>
          </div>
        </div>
      </header>
      <nav className="flex h-8 items-center justify-evenly bg-bege lg:hidden *:text-laranja-gremio *:text-sm">
        <a href="#redes">Redes</a>
        <a href="#diretorias">Diretorias</a>
        <a href="#didh">Projetos</a>
        <a href="#movimento">Movimento</a>
      </nav>
    </>
  )
}