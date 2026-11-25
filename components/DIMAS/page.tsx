"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png';
import dimas from '@/public/diretorias/logos/DIMAS.png';
import card1 from '@/public/diretorias/dimas/card1.png';
import card2 from '@/public/diretorias/dimas/card2.png';
import card3 from '@/public/diretorias/dimas/card3.png';
import card4 from '@/public/diretorias/dimas/card4.png';
import doacaoSangue3 from '@/public/diretorias/dimas/doacao_sangue3.png';
import doacaoSangue4 from '@/public/diretorias/dimas/doacao_sangue4.png';


export default async function DIMAS() {
  return (
    <>
      <section className="h-115 lg:h-170 flex justify-center bg-verde-claro" id="dimas">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 lg:left-110">
            <h1 className="text-3xl lg:text-8xl font-bold lg:text-center">DIMAS</h1>
            {/* Computador */}
            <h2 className="hidden lg:block text-[32px] leading-8 text-center">Diretoria de <br />Meio Ambiente<br /> e Saúde</h2>
            {/* Mobile */}
            <h2 className="flex lg:hidden text-xl lg:text-[32px] leading-8 text-center">Diretoria de Meio Ambiente e Saúde</h2>
          </div>
          <p className="text-md lg:text-[28px] absolute left-[32px] right-[32px] top-40 lg:left-205 lg:top-5/9 lg:right-0 lg:w-190">Responsável por promover a conscientização sobre questões relacionadas à saúde e ao meio ambiente. Além disso, essa diretoria mantém relações com entidades de saúde e meio ambiente, buscando parcerias e recursos para a implementação de ações nesses âmbitos.</p>

          {/* Imagens */}
          <div className="flex items-center justify-center aspect-square absolute w-30 right-[32px] -bottom-5 lg:w-85 lg:-top-1/16 lg:left-0 rounded-2xl bg-white shadow-2xl">
            <Image src={dimas} alt="" className="aspect-square size-25 lg:size-75 rounded-xl" />
          </div>
          <Image src={doacaoSangue4} alt="" className="aspect-70/40 lg:aspect-75/35 absolute right-[32px] -top-5 lg:-top-1/16 lg:right-0 rounded-2xl shadow-2xl w-50 lg:w-200 object-[center_25%]" />
          <Image src={doacaoSangue3} alt="" className="aspect-70/40 lg:aspect-75/40 absolute -bottom-5 lg:-bottom-15 lg:left-0 rounded-2xl shadow-2xl w-50 lg:w-180 object-[center_25%]" />
        </div>
      </section>

      <div className="h-20 lg:h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-verde-escuro lg:mb-10!">Projetos da DIMAS</h1>
          {/* Card */}
          <div className="card bg-verde-musgo w-full pb-20! lg:p-16! relative mb-16!">
            <div className="lg:ml-75! flex flex-col gap-2">
              <h1>Doação de Sangue</h1>
              <p className="lg:max-w-4/6">
                Idealizado e desenvolvido pela DIMAS (Diretoria de Meio Ambiente e Saúde), o projeto buscou conscientizar a comunidade acadêmica sobre a importância da doação de sangue e incentivar a sua prática regular. <br />
                A iniciativa contou com uma palestra informativa e mobilizações de estudantes e colaboradores do IFRN até o Hemocentro de Caicó. Ao todo, foram realizadas 23 doações de sangue e quase 100 pessoas foram conscientizadas. Além de incentivar novos doadores, o projeto promoveu o retorno de participantes ao Hemocentro, estimulando a continuidade das doações. A iniciativa reforçou o compromisso da DIMAS com a promoção da saúde, a solidariedade e o bem-estar coletivo.
              </p>
            </div>
            <Image src={card1} alt="" className="absolute -bottom-10 right-70 lg:-left-5 lg:-top-10 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da esquerda */}
            <Image src={card2} alt="" className="absolute right-52 -bottom-10 lg:left-40 lg:-top-10 aspect-20/27.5 w-16 lg:w-40" /> {/* Imagem da direita */}
            <Image src={card3} alt="" className="absolute right-5 -bottom-10 lg:-left-5 lg:top-47 aspect-4/2 w-45 lg:w-85 z-2" /> {/* Imagem de baixo*/}
            <Image src={card4} alt="" className=" hidden lg:block absolute lg:-left-4 lg:top-92 aspect-square lg:aspect-auto w-45 lg:w-81 z-3" /> {/* Imagem central*/}
          </div>
        </div>
      </section>
      <div className="h-20 lg:h-50" />
    </>
  )
}