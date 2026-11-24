"use server";

import Image from "next/image";
import gess_white from '@/public/gess_white.png';
import './style.css'

export default async function Footer() {
  return (
    <footer className="flex flex-col items-center w-full bg-laranja-escuro text-white">
      <div className="p-8! max-w-300! w-full flex justify-between">
        <Image width={200} height={40} src={gess_white} alt='' className="brightness-200 h-10 w-35"/>
        <p className="flex gap-2 items-center font-semibold">
          <span>SIGA-NOS EM</span>
          <span className="instagram"></span>
          <span>@gess.ifrn</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 py-6! pb-10! linha-top">
        <a href="https://www.instagram.com/gess.ifrn/" target="_blank" className="cursor-pointer py-6! px-10! bg-amarelo-escuro rounded-2xl w-fit! text-[20px] font-semibold">Clique e saiba mais sobre nós</a>
        <span className="text-bege font-light">© 2026 GESS. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}