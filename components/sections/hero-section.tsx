import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative mt-[73px] min-h-[90vh] flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/Unico30.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(30,0,0,0.55)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="max-w-[550px]">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-4 md:mb-6 leading-tight">
            Único Restaurante
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gold-bright)] font-semibold mb-3 md:mb-4">
            Transformamos Refeitórios em Restaurantes
          </p>
          <p className="text-base md:text-xl text-white/95 mb-6 md:mb-8 leading-relaxed">
            Oferecemos solução inovadora de alimentação corporativa, com qualidade, variedade, liberdade de escolha,
            atendimento excelente e ambiente acolhedor.
          </p>
          <Link
            href="#contato"
            className="inline-block bg-[var(--gold-bright)] text-[var(--dark)] px-8 py-4 text-lg font-semibold rounded-full hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(255,165,0,0.3)] transition-all duration-300"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  )
}
