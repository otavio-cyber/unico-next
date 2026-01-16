"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contato" className="py-16 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl text-[var(--burgundy)] mb-4 text-center">Entre em Contato</h2>
        <p className="text-base md:text-lg text-[var(--gray)] text-center mb-10 md:mb-12 max-w-[600px] mx-auto">
          Vamos conversar sobre como podemos transformar a experiência de alimentação na sua empresa
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-[var(--gold)] text-5xl mb-4">✓</div>
                <p className="text-xl text-[var(--burgundy)] font-semibold">Obrigado pelo contato!</p>
                <p className="text-[var(--gray)] mt-2">Retornaremos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-[var(--dark)]">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-[var(--dark)]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 font-medium text-[var(--dark)]">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-[var(--dark)]">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-[var(--dark)]">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--burgundy)] focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--burgundy)] text-white py-3 md:py-4 rounded-lg text-lg font-semibold hover:bg-[#6B1E1E] hover:translate-y-[-2px] transition-all duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-[var(--light-gray)] rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-[var(--dark)] font-bold mb-4">Contatos</h3>
            <p className="text-[var(--gray)] mb-6 md:mb-8">
              Escolha o canal que preferir para falar com a Único Restaurantes.
            </p>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--burgundy)] text-white p-3 rounded-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">E-mail</p>
                  <a href="mailto:comercial@unicorestaurante.com.br" className="text-[var(--burgundy)] hover:underline">
                    comercial@unicorestaurante.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--burgundy)] text-white p-3 rounded-lg">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/5516997570031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--burgundy)] hover:underline"
                  >
                    Clique para conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--burgundy)] text-white p-3 rounded-lg">
                  <Linkedin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">LinkedIn</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--burgundy)] hover:underline"
                  >
                    Acesse nosso LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--burgundy)] text-white p-3 rounded-lg">
                  <Instagram size={22} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--dark)] mb-1">Instagram</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--burgundy)] hover:underline"
                  >
                    @unicorestaurante
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
