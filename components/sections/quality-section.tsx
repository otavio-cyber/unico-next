import Image from "next/image"

const qualityCards = [
  {
    title: "Manual de Boas Práticas de Alimentação",
    description:
      "Manual de Boas práticas elaborado com cuidado e simplicidade para que toda a equipe compreenda e aplique as regras de conduta. POPs seguem o mesmo método, sendo simples, objetivos e de fácil aplicação.",
  },
  {
    title: "Treinamento de Qualidade",
    description:
      "Rotinas de Treinamento envolvendo as lideranças semanalmente por plataforma virtual e aplicação via quadro de liderança horizontal e DDA (Dialogo Diário de Alinhamento) para as equipes de fabricação.",
  },
  {
    title: "CheckList / Auditoria",
    description:
      "Aplicação mensal de checklist que aponta uma nota para cada restaurante e que é inserida nos relatório de resultado mensal. Tudo para exigir e consolidar o compromisso com a qualidade.",
  },
]

export function QualitySection() {
  return (
    <section id="qualidade" className="py-16 md:py-20 px-4 md:px-8 bg-[var(--light-gray)]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--burgundy-dark)] mb-2 md:mb-3 text-center">Qualidade</h2>
        <p className="text-base text-[var(--gray)] mb-10 md:mb-14 text-center">
          Check list com nota por restaurante para garantir qualidade
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full max-w-[400px] mx-auto lg:max-w-none aspect-square rounded-xl overflow-hidden order-first lg:order-none">
            <Image src="/qualidade.png" alt="Qualidade" fill className="object-contain" />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5 md:gap-6">
            {qualityCards.map((card) => (
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
