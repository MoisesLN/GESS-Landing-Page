"use server";
import Image from "next/image"
import gess_white from '@/public/gess_white.png';

export default async function Header() {
  return (
    <header className='py-6 bg-laranja-escuro flex justify-center'>
      <div className='max-w-400 flex justify-center items-center gap-10 text-bege flex-1'>
        <a href="#"><Image width={200} height={40} src={gess_white} alt='' className="brightness-200 h-10 w-35"/></a>
        <a href="#" className="ml-auto">Quem somos nós?</a>
        <a href="#">Nossas redes</a>
        <a href="#">Diretorias</a>
        <a href="#">Projetos e ações</a>
      </div>
    </header>
  )
}