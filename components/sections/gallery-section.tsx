"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

const galleries = {
  variedade: {
    title: "Variedade e liberdade de escolha",
    description: "Diversidade de opções para respeitar gostos, rotinas e escolhas.",
    folder: "1VariedadeLiberdade",
    total: 102,
    suffix: "galeria_pasta1.jpg",
    thumb: "/1VariedadeLiberdade/001galeria_pasta1.jpg",
  },
  atendimento: {
    title: "Atendimento excelente",
    description: "Times preparados, próximos e atentos à experiência do cliente.",
    folder: "2AtendimentoExcelente",
    total: 41,
    suffix: "galeria_pasta2.jpg",
    thumb: "/2AtendimentoExcelente/001galeria_pasta2.jpg",
  },
  ambiente: {
    title: "Ambiente acolhedor",
    description: "Espaços pensados para conforto, pausa e convivência.",
    folder: "3AmbienteAcolhedor",
    total: 31,
    suffix: "galeria_pasta3.jpg",
    thumb: "/3AmbienteAcolhedor/001galeria_pasta3.jpg",
  },
  lanchonete: {
    title: "Lanchonete",
    description: "Praticidade e rapidez para todos os momentos do dia.",
    folder: "4Lanchonete",
    total: 13,
    suffix: "galeria_pasta4.jpg",
    thumb: "/4Lanchonete/001galeria_pasta4.jpg",
  },
}

type GalleryKey = keyof typeof galleries

function generateGalleryImages(folder: string, total: number, suffix: string) {
  return Array.from({ length: total }, (_, i) => {
    const numero = String(i + 1).padStart(3, "0")
    return `/${folder}/${numero}${suffix}`
  })
}

export function GallerySection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentGallery, setCurrentGallery] = useState<GalleryKey | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (key: GalleryKey) => {
    setCurrentGallery(key)
    setCurrentIndex(0)
    setModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setModalOpen(false)
    setCurrentGallery(null)
  }, [])

  const nextImage = useCallback(() => {
    if (!currentGallery) return
    const gallery = galleries[currentGallery]
    setCurrentIndex((prev) => (prev + 1) % gallery.total)
  }, [currentGallery])

  const prevImage = useCallback(() => {
    if (!currentGallery) return
    const gallery = galleries[currentGallery]
    setCurrentIndex((prev) => (prev - 1 + gallery.total) % gallery.total)
  }, [currentGallery])

  const currentImages = currentGallery
    ? generateGalleryImages(
        galleries[currentGallery].folder,
        galleries[currentGallery].total,
        galleries[currentGallery].suffix,
      )
    : []

  return (
    <>
      <section id="galeria" className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[var(--burgundy)] mb-10 md:mb-12 text-center">Galeria de Imagens</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {(Object.keys(galleries) as GalleryKey[]).map((key) => {
              const gallery = galleries[key]
              return (
                <div
                  key={key}
                  onClick={() => openGallery(key)}
                  className="bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:translate-y-[-5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="relative h-[180px] md:h-[200px]">
                    <Image
                      src={gallery.thumb || "/placeholder.svg"}
                      alt={gallery.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-md">
                      <Camera size={18} />
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl text-[var(--burgundy)] mb-2">{gallery.title}</h3>
                    <p className="text-sm md:text-base text-[var(--gray)] leading-relaxed">{gallery.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && currentGallery && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[var(--gold)] transition-colors z-10"
            aria-label="Fechar galeria"
          >
            <X size={36} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-lg hover:bg-black/70 transition-colors z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-lg hover:bg-black/70 transition-colors z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImages[currentIndex] || "/placeholder.svg"}
              alt={`${galleries[currentGallery].title} - Imagem ${currentIndex + 1}`}
              width={1100}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {galleries[currentGallery].total}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
