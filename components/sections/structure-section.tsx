const structureCards = [
  { title: "Comercial", description: "Consultores especializados em soluções corporativas.", color: "gold" },
  {
    title: "Operacional",
    description: "Gerentes, supervisores, chefs de cozinha e equipes responsáveis pela execução.",
    color: "wine",
  },
  {
    title: "Arquitetura",
    description: "Arquitetos especializados em projetos de cozinhas industriais e restaurantes.",
    color: "gold",
  },
  { title: "Jurídico", description: "Suporte para formatação e gestão de contratos.", color: "wine" },
  {
    title: "Financeiro",
    description: "Contabilidade e fiscal juntos para garantir segurança financeira da operação.",
    color: "wine",
  },
  { title: "RH", description: "Estrutura dedicada ao cuidado com as pessoas.", color: "gold" },
  { title: "Suprimentos", description: "Escolha dos melhores produtos e fornecedores.", color: "gold" },
  { title: "PCP", description: "Nutricionistas que criam cardápios e produtos.", color: "wine" },
  { title: "Logística", description: "Operação logística própria.", color: "wine" },
  {
    title: "Gestão de Pessoas",
    description: "Profissionais comprometidos no desenvolvimento, retenção e crescimento dos nossos talentos.",
    color: "gold",
  },
  { title: "Segurança Alimentar", description: "Auditorias internas em todas as unidades.", color: "wine" },
  { title: "Segurança do Trabalho", description: "Garantia e cuidado com nossos processos.", color: "gold" },
  { title: "Marketing", description: "Padronização da comunicação, campanhas e consolidação da marca.", color: "gold" },
  { title: "Relacionamento", description: "Monitoramento da satisfação dos clientes.", color: "wine" },
]

export function StructureSection() {
  return (
    <section id="estrutura" className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--burgundy-dark)] mb-10 md:mb-14 text-center">Nossa Estrutura</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {structureCards.map((card) => (
            <div
              key={card.title}
              className={`p-6 md:p-7 min-h-[140px] md:min-h-[160px] rounded-[28px_0_28px_0] flex flex-col justify-center transition-transform duration-300 hover:translate-y-[-5px] ${
                card.color === "gold" ? "bg-[var(--gold)] text-white" : "bg-[var(--burgundy-dark)] text-white"
              }`}
            >
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed opacity-95">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
