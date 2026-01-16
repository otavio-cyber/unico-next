import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* About */}
          <div>
            <h3 className="text-[var(--gold)] text-xl font-bold mb-4">Único Restaurantes</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Transformando refeitórios em experiências gastronômicas corporativas.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[var(--burgundy)] rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[var(--burgundy)] rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[var(--burgundy)] rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--gold)] text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#mission" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                Sobre
              </Link>
              <Link href="#proposito" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                Propósito
              </Link>
              <Link href="#estrutura" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                Estrutura
              </Link>
              <Link href="#operacao" className="text-white/80 hover:text-[var(--gold)] transition-colors">
                Operação
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--gold)] text-xl font-bold mb-4">Contato</h3>
            <p className="text-white/80 mb-2">comercial@unicorestaurantes.com.br</p>
            <p className="text-white/80">(16) 99757-0031</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center">
          <p className="text-white/60 text-sm">© 2025 Único Restaurantes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
