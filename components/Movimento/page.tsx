"use server";

import Image from "next/image";
import movimento1 from '@/public/movimento/movimento1.png';
import movimento2 from '@/public/movimento/movimento2.png';
import movimento3 from '@/public/movimento/movimento3.png';
import movimento4 from '@/public/movimento/movimento4.png';
import movimento5 from '@/public/movimento/movimento5.png';
import oficinaCartazes1 from '@/public/movimento/oficina_cartazes1.png';
import oficinaCartazes2 from '@/public/movimento/oficina_cartazes2.png';
import palestra from '@/public/movimento/palestra.png';
import bandeira from '@/public/movimento/bandeira.png';

export default async function Movimento() {
  return (
    <>
      <section className="min-h-225 flex justify-center bg-vermelho-vivo" id="movimento">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 left-0">
            <h1 className="text-5xl font-bold">MOVIMENTO ESTUDANTIL E</h1>
            <h1 className="text-7xl font-bold">ATUAÇÃO POLÍTICA</h1>
          </div>
          <p className="text-[24px] absolute bottom-20 right-0 w-150">O GESS apresentou importante atuação no período eleitoral de 2026, tanto digitalmente, por meio de postagens, quanto presencialmente, a partir da organização de oficinas de cartazes para movimentações, diálogo com os estudantes e movimentos pacíficos.</p>

          {/* Imagens */}
          <Image src={movimento1} alt="" className="aspect-75/40 w-150 absolute -top-1/16 right-0 rounded-2xl" /> {/* Imagem de cima */}
          <Image src={movimento2} alt="" className="aspect-75/40 w-150 absolute -bottom-15 left-0 rounded-2xl" />  {/* Imagem de baixo */}
          <Image src={bandeira} alt="" className="aspect-16/21 w-40 absolute top-60 left-0 rounded-2xl" />
          <Image src={oficinaCartazes2} alt="" className="aspect-34/22 w-90 absolute top-75 left-1/8 rounded-2xl" />
          <Image src={movimento5} alt="" className="aspect-17/22 w-40 absolute top-60 left-3/8 rounded-2xl" />
          <Image src={palestra} alt="" className="aspect-20/27 w-50 absolute top-70 left-4/8 rounded-2xl" />
          <Image src={oficinaCartazes1} alt="" className="aspect-17/22 w-40 absolute top-80 left-13/20 rounded-2xl" />
          <Image src={movimento4} alt="" className="aspect-16/26 w-40 absolute top-75 left-19/25 rounded-2xl" />
          <Image src={movimento3} alt="" className="aspect-23/27.5 w-50 absolute top-90 left-7/8 rounded-2xl" />
        </div>
      </section>
      <div className="h-50 invisible" aria-hidden />
    </>
  )
}