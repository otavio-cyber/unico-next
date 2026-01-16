const missionCards = [
  {
    title: "Missão",
    content:
      "Oferecer uma solução inovadora de alimentação corporativa, com qualidade, variedade, liberdade de escolha, atendimento excelente e ambiente acolhedor.",
  },
  {
    title: "Visão",
    content:
      "Ser referência em restaurantes corporativos, reconhecida pela transformação de refeitórios em restaurantes.",
  },
  {
    title: "Valores",
    isList: true,
    items: [
      "Excelência com consistência",
      "Segurança de alimentos inegociável (Food Safety)",
      "Eficiência operacional",
      "Transparência e governança",
      "Respeito ao cliente e ao colaborador",
      "Qualidade percebida (valor por refeição)",
      "Parceria de longo prazo",
      "Sustentabilidade prática",
    ],
  },
]

export function MissionSection() {
  return (
    <section id="mission" className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--burgundy)] mb-4 text-center">Nossa História</h2>
        <p className="text-base md:text-lg text-[var(--gray)] text-center mb-10 md:mb-12 max-w-[800px] mx-auto leading-relaxed">
          A Único Restaurantes nasceu da visão de profissionais com experiência no segmento de restaurantes
          corporativos, acumulada em diversos nichos: indústrias, condomínios empresariais, escolas, hospitais, varejo e
          centrais de produção de alimentos em conjunto com profissionais de compliance e auditoria, criando a ÚNICO que
          oferece solução inovadora de alimentação corporativa com transparência e governança.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {missionCards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-6 md:p-8 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:translate-y-[-5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl text-[var(--burgundy)] mb-4">{card.title}</h3>
              {card.isList ? (
                <ul className="text-[var(--gray)] leading-relaxed space-y-2">
                  {card.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--gold)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[var(--gray)] leading-relaxed">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
