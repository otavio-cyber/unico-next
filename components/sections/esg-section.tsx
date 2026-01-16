import Image from "next/image"

export function ESGSection() {
  return (
    <section id="esg" className="py-16 md:py-20 px-4 md:px-8 bg-[var(--light-gray)]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header with logos */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 md:mb-10">
          <div className="h-[100px] md:h-[150px] relative w-[200px] md:w-[280px]">
            <Image src="/ESG001.png" alt="Único ESG Restaurante Corporativo" fill className="object-contain" />
          </div>
          <div className="h-[100px] md:h-[150px] relative w-[200px] md:w-[280px]">
            <Image src="/ESG002.png" alt="Selo ESG" fill className="object-contain" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 space-y-4 md:space-y-5">
          <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">
            Na <strong className="text-[var(--dark)]">UNICO</strong>, ESG não é discurso — é método de operação. Ao
            transformar refeitórios em restaurantes corporativos, assumimos um compromisso permanente com o{" "}
            <strong className="text-[var(--dark)]">meio ambiente (E)</strong>,{" "}
            <strong className="text-[var(--dark)]">impacto social (S)</strong> e{" "}
            <strong className="text-[var(--dark)]">governança (G)</strong>, garantindo{" "}
            <strong className="text-[var(--dark)]">qualidade percebida</strong>,{" "}
            <strong className="text-[var(--dark)]">segurança dos alimentos</strong> e{" "}
            <strong className="text-[var(--dark)]">eficiência por refeição</strong>.
          </p>

          <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">
            <strong className="text-[var(--dark)]">Ambiental (E):</strong> reduzimos impactos com foco em{" "}
            <strong className="text-[var(--dark)]">combate ao desperdício</strong>,{" "}
            <strong className="text-[var(--dark)]">gestão e destinação correta de resíduos</strong> (recicláveis,
            orgânicos e óleo) e <strong className="text-[var(--dark)]">uso eficiente de água e energia</strong>.
            Acompanhamos indicadores como{" "}
            <strong className="text-[var(--dark)]">gramas de desperdício por refeição</strong>, volume de resíduos e
            melhorias contínuas em processos e equipamentos.
          </p>

          <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">
            <strong className="text-[var(--dark)]">Social (S):</strong> partimos do{" "}
            <strong className="text-[var(--dark)]">Food Safety</strong> inegociável e ampliamos para o bem-estar do
            colaborador, com <strong className="text-[var(--dark)]">cardápios inclusivos</strong>, informação clara e
            incentivo à escolha consciente. Investimos no{" "}
            <strong className="text-[var(--dark)]">desenvolvimento do time</strong>, com capacitação e oportunidades, e
            atuamos com foco em SST, ergonomia e prevenção de acidentes. Quando viável, apoiamos ações locais por meio
            de <strong className="text-[var(--dark)]">parcerias e doações responsáveis</strong>, com critérios
            sanitários e governança.
          </p>

          <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">
            <strong className="text-[var(--dark)]">Governança (G):</strong> operamos com{" "}
            <strong className="text-[var(--dark)]">transparência, controles e responsabilidade</strong>, com auditorias,
            padrões operacionais, compliance em compras, gestão de fornecedores e{" "}
            <strong className="text-[var(--dark)]">reporte de indicadores ao cliente</strong>, sustentando relações de
            longo prazo baseadas em <strong className="text-[var(--dark)]">SLA, previsibilidade e integridade</strong>,
            com decisões orientadas a dados.
          </p>

          <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">
            Em síntese, o ESG da <strong className="text-[var(--dark)]">UNICO</strong> combina{" "}
            <strong className="text-[var(--dark)]">eficiência operacional</strong>,{" "}
            <strong className="text-[var(--dark)]">segurança</strong> e{" "}
            <strong className="text-[var(--dark)]">responsabilidade</strong>, gerando resultados consistentes para
            clientes, colaboradores e comunidade.
          </p>
        </div>
      </div>
    </section>
  )
}
