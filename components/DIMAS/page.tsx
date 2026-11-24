"use server";

import Image from "next/image";
import diexe1 from '@/public/diexe1.png';

export default async function DIMAS() {
  return (
    <>
      <section className="h-150 flex justify-center bg-verde-claro" id="dimas">
        <div className='flex flex-col gap-3 justify-center flex-1 relative text-white'>
          {/* Texto */}
          <div className="title absolute top-20 left-115">
            <h1 className="text-8xl font-bold">DIMAS</h1>
            <h2 className="text-[32px] leading-8 text-center">Diretoria de <br />Meio Ambiente<br /> e Saúde</h2>
          </div>
          <p className="text-[20px] absolute top-3/5 right-0 w-175">Responsável por promover a conscientização sobre questões relacionadas à saúde e ao meio ambiente. Além disso, essa diretoria mantém relações com entidades de saúde e meio ambiente, buscando parcerias e recursos para a implementação de ações nesses âmbitos.</p>

          {/* Imagens */}
          <Image src={diexe1} alt="" className="aspect-square w-75 border-24 border-white absolute -top-1/10 left-0 rounded-2xl" />
          <Image src={diexe1} alt="" className="aspect-75/40 w-175 absolute -top-1/16 right-0 rounded-2xl" />
          <Image src={diexe1} alt="" className="aspect-75/40 w-175 absolute -bottom-25 left-0 rounded-2xl" />
        </div>
      </section>

      <div className="h-50 invisible" aria-hidden />

      {/* Projetos */}
      <section className="flex justify-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-verde-escuro">Projetos da DIMAS</h1>
          {/* Card */}
          <div className="card bg-verde-musgo w-full p-16! relative mb-16! text-white min-h-125">
            <div className="text ml-75! flex flex-col gap-2">
              <h1>Doação de Sangue</h1>
              <p>
                Idealizado e desenvolvido pela DIMAS (Diretoria de Meio Ambiente e Saúde), o projeto buscou conscientizar a comunidade acadêmica sobre a importância da doação de sangue e incentivar a sua prática regular. <br />
                A iniciativa contou com uma palestra informativa e mobilizações de estudantes e colaboradores do IFRN até o Hemocentro de Caicó. Ao todo, foram realizadas 23 doações de sangue e quase 100 pessoas foram conscientizadas. Além de incentivar novos doadores, o projeto promoveu o retorno de participantes ao Hemocentro, estimulando a continuidade das doações. A iniciativa reforçou o compromisso da DIMAS com a promoção da saúde, a solidariedade e o bem-estar coletivo.
              </p>
            </div>
            <Image src={diexe1} alt="" className="absolute -left-5 top-0 aspect-20/27.5 w-40" /> {/* Imagem da esquerda */}
            <Image src={diexe1} alt="" className="absolute left-40 top-0 aspect-20/27.5 w-40" /> {/* Imagem da direita */}
            <Image src={diexe1} alt="" className="absolute -left-5 top-57 aspect-4/2 w-85 z-2" /> {/* Imagem do centro*/}
            <Image src={diexe1} alt="" className="absolute -left-5 top-102 aspect-4/2 w-85 z-2" /> {/* Imagem de baixo*/}
          </div>
        </div>
      </section>
      <div className="h-50 invisible"  aria-hidden/>

    </>
  )
}