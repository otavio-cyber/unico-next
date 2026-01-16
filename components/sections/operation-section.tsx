import Image from "next/image"

const operationCards = [
  {
    title: "Seleção Cuidadosa",
    description:
      "Cuidamos muito das contratações, avaliando perfis de atendimento, moradia próxima ao trabalho e perfis comportamentais aderentes.",
  },
  {
    title: "Treinamento Contínuo",
    description:
      "Possuímos uma plataforma física em cada restaurante com os QLH (Quadros de Liderança Horizontal) juntamente com as rotinas do DDA (Diálogo Diário de Alinhamento), que geram avaliação e treinamento constante das equipes.",
  },
  {
    title: "Liderança Horizontal",
    description:
      "Metodologia que gera compromisso, responsabilidade e reconhecimento em cada um dos nossos colaboradores por meio das plataformas QLH e DDA.",
  },
]

export function OperationSection() {
  return (
    <section id="operacao" className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--burgundy-dark)] mb-2 md:mb-3 text-center">Nossa Operação</h2>
        <p className="text-base text-[var(--gray)] mb-10 md:mb-14 text-center">Pessoas no centro da nossa operação</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden order-first lg:order-none">
            <Image src="/producao.jpg" alt="Nossa operação" fill className="object-cover" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5 md:gap-6">
            {operationCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-5 md:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border-l-4 border-[var(--gold)]"
              >
                <h3 className="text-lg md:text-xl text-[#c84a00] font-bold mb-2">{card.title}</h3>
                <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
