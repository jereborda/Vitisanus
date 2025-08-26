"use client"

import { useState, useEffect } from "react"
import { RECIPES } from "@/app/recetas/recipes"
import NewsletterForm from "@/components/NewsletterForm"

export default function VitisanusLanding() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 4)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 4) % 4)

  // Smooth scroll para anchors
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.hash.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => link.addEventListener("click", handleAnchorClick))
    return () => anchorLinks.forEach((link) => link.removeEventListener("click", handleAnchorClick))
  }, [])

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqData = [
    {
      question: "¿Cómo se usa la Harina de Uva en las recetas?",
      answer:
        "Recomendamos sustituir entre el 10% y 20% de la harina tradicional por Harina de Uva Vitisanus. Para un pan de 500g de harina común, usá entre 50g y 100g de harina de uva. Comenzá con cantidades menores para familiarizarte con el sabor y color.",
    },
    {
      question: "¿Qué color le da a las masas?",
      answer:
        "La Harina de Uva aporta un hermoso color morado natural que varía desde un tono lavanda suave hasta un morado más intenso, dependiendo de la cantidad utilizada. Este color se mantiene durante la cocción, creando preparaciones visualmente únicas y atractivas.",
    },
    {
      question: "¿Cómo se conserva la harina de uva?",
      answer:
        "Conservá la Harina de Uva Vitisanus en un recipiente hermético, en lugar fresco y seco, alejado de la luz directa. Bajo estas condiciones, mantiene sus propiedades por hasta 12 meses. Una vez abierto el envase, consumir preferentemente dentro de los 6 meses.",
    },
    {
      question: "¿Es apta para celíacos?",
      answer:
        "La uva naturalmente no contiene gluten, sin embargo, recomendamos verificar la certificación específica del producto y consultar con un profesional de la salud antes de incluirla en dietas libres de gluten, especialmente en casos de celiaquía severa.",
    },
    {
      question: "¿De dónde proviene la uva utilizada?",
      answer:
        "Nuestra Harina de Uva Vitisanus se produce exclusivamente con orujo de uvas mendocinas de Finca Dinamia. Utilizamos variedades cuidadosamente seleccionadas de nuestros viñedos, garantizando la máxima calidad y trazabilidad del producto desde el origen.",
    },
    {
      question: "¿Qué beneficios nutricionales aporta?",
      answer:
        "La Harina de Uva es rica en antioxidantes naturales (polifenoles), fibra dietética y minerales. Estos compuestos pueden contribuir a la protección celular contra el daño oxidativo y apoyar una digestión saludable, además de aportar un valor nutricional único a tus preparaciones.",
    },
  ]

  const carouselSlides = [
    {
      title: "¿Qué es la harina de uva?",
      description: "Descubrí este ingrediente único obtenido del orujo de uva mendocina",
      buttonText: "Más info",
      buttonAction: "#que-es",
      backgroundImage: "/orujoDeUva.jpeg",
    },
    {
      title: "Quiénes somos",
      description: "Conocé la historia de Finca Dinamia y nuestra producción sustentable",
      buttonText: "Más info",
      buttonAction: "#quienes-somos",
      backgroundImage: "/quieneSomos.png",
    },
    {
      title: "Beneficios",
      description: "Antioxidantes naturales, fibra y color único para tus preparaciones",
      buttonText: "Ver beneficios",
      buttonAction: "#beneficios",
      backgroundImage: "/Beneficios.jpg",
    },
    {
      title: "Uva Malbec",
      description: "El origen y la variedad que hace única nuestra harina de uva",
      buttonText: "Saber más",
      buttonAction: "#quienes-somos",
      backgroundImage: "/malbec.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* HERO / CARRUSEL */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto text-white">
                  <h2 className="font-chunk text-3xl md:text-5xl mb-4">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">{slide.description}</p>
                  {slide.buttonAction.startsWith("#") ? (
                    <a href={slide.buttonAction} className="btn-effect-3">
                      {slide.buttonText}
                    </a>
                  ) : (
                    <a href={slide.buttonAction} target="_blank" rel="noreferrer" className="btn-effect-3">
                      {slide.buttonText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Previo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Puntos */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Faja productora */}
      <section className="bg-vitisanus-cream py-4 w-full text-center">
        <div className="container mx-auto px-4">
          <p className="text-vitisanus-purple font-medium">
            Producido por <span className="text-vitisanus-purple font-semibold">Finca Dinamia</span>
          </p>
        </div>
      </section>

      {/* ¿Qué es la harina de uva? */}
      <section id="que-es" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-6">¿Qué es la Harina de Uva?</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-vitisanus-purple">
              <p className="leading-relaxed">
                La <strong>Harina de Uva Vitisanus</strong> se elabora a partir del{" "}
                <strong>orujo de uva</strong>, transformado mediante{" "}
                <strong>secado</strong> y <strong>molienda</strong> en una harina{" "}
                <strong>nutritiva</strong>, rica en <strong>antioxidantes</strong> y{" "}
                <strong>fibra</strong>. Aporta un característico{" "}
                <strong>color morado</strong> y un <strong>sabor suave</strong> para{" "}
                <strong>panificados</strong>, <strong>smoothies</strong> y{" "}
                <strong>salsas</strong>.
              </p>
            </div>
          </div>

          {/* Infografía del proceso */}
          <div className="mb-16">
            <h3 className="font-chunk text-2xl text-vitisanus-purple text-center mb-8">
              Del Viñedo a tu Mesa
            </h3>

            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Paso 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-vitisanus-light-purple rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.5 15a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m-4 3.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m0 -7.5v6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-vitisanus-purple mb-1">Viñedo</h4>
                <p className="text-sm text-vitisanus-purple">Orujo de uva seleccionado</p>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-vitisanus-light-purple rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  </svg>
                </div>
                <h4 className="font-semibold text-vitisanus-purple mb-1">Molienda</h4>
                <p className="text-sm text-vitisanus-purple">Proceso controlado de secado y molido</p>
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-vitisanus-light-purple rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,4V3C18,2.45 17.55,2 17,2H7C6.45,2 6,2.45 6,3V4H4C3.45,4 3,4.45 3,5S3.45,6 4,6H6V19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V6H20C20.55,6 21,5.55 21,5S20.55,4 20,4H18M8,6H16V19H8V6Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-vitisanus-purple mb-1">Harina</h4>
                <p className="text-sm text-vitisanus-purple">Lista para usar en tus recetas</p>
              </div>
            </div>
          </div>
          <section />
          {/* Beneficios */}
          <div className="grid md:grid-cols-2 gap-12 items-center" id="beneficios">
            <div>
              <h3 className="font-chunk text-3xl text-vitisanus-purple mb-8">Beneficios Naturales</h3>
              <div className="space-y-6">
                {[
                  ["Rico en Antioxidantes", "Alto contenido en polifenoles que protegen las células del daño oxidativo"],
                  ["Fuente de Fibra", "Contribuye a una digestión saludable y sensación de saciedad"],
                  ["Color Natural", "Aporta un hermoso tono morado natural a tus preparaciones"],
                  ["Sin Gluten*", "Apto para dietas libres de gluten (*verificar certificación)"],
                  ["Versatilidad Culinaria", "Ideal para panificados, pastas, salsas, smoothies y más"],
                ].map(([t, d], i) => (
                  <div className="flex items-start space-x-4" key={i}>
                    <div className="w-8 h-8 bg-vitisanus-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-vitisanus-purple mb-2">{t}</h4>
                      <p className="text-vitisanus-text">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-vitisanus-light-purple to-vitisanus-purple rounded-2xl p-8 text-white">
                <h4 className="font-chunk text-2xl mb-4">Ideas de Uso</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Panificados", "Panes, muffins, galletas"],
                    ["Pastas", "Fideos caseros únicos"],
                    ["Smoothies", "Batidos antioxidantes"],
                    ["Salsas", "Espesante natural"],
                  ].map(([a, b]) => (
                    <div className="bg-white/20 rounded-lg p-3" key={a}>
                      <div className="font-semibold mb-1">{a}</div>
                      <div className="text-xs opacity-90">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEGUIR – Consumidor final (reubicado acá) */}
      <section id="conseguir" className="py-16 px-4 bg-vitisanus-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="font-chunk text-3xl md:text-5xl text-vitisanus-purple mb-3">
              Conseguí Vitisanus
            </h2>
            <p className="text-vitisanus-text max-w-2xl mx-auto text-sm md:text-base">
              Llevá a tu cocina la Harina de Uva Vitisanus. Pedila por WhatsApp y te asesoramos.
            </p>
          </div>

          {/* Fuerza 2 col en mobile y 3 en md */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {/* 250 g */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center">
                <img src="/harina250.png" alt="Paquete 250 g" className="w-full h-40 md:h-56 object-contain p-2" />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h4 className="font-chunk text-lg md:text-xl text-vitisanus-purple mb-1">250 g</h4>
                <p className="text-vitisanus-text mb-3 md:mb-4 text-sm md:text-base">
                  Ideal para probar recetas y sumar antioxidantes.
                </p>
                <a
                  href="https://wa.me/+5491132736745?text=Hola%20Vitisanus%2C%20quiero%20comprar%20como%20comercio%20(mayorista)"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-effect-3 bg-green-600 hover:bg-green-700 text-white inline-flex items-center gap-2 text-sm md:text-lg px-4 py-2 md:px-8 md:py-4"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                  Comprar por WhatsApp
                </a>
              </div>
            </div>

            {/* 500 g */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center">
                <img src="/harina500g.png" alt="Paquete 500 g" className="w-full h-40 md:h-56 object-contain p-2" />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h4 className="font-chunk text-lg md:text-xl text-vitisanus-purple mb-1">500 g</h4>
                <p className="text-vitisanus-text mb-3 md:mb-4 text-sm md:text-base">
                  Para cocinar seguido y explorar más usos.
                </p>
                <a
                  href="https://wa.me/+5491132736745?text=Hola%20Vitisanus%2C%20quiero%20comprar%20como%20comercio%20(mayorista)"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-effect-3 bg-green-600 hover:bg-green-700 text-white inline-flex items-center gap-2 text-sm md:text-lg px-4 py-2 md:px-8 md:py-4"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                  Comprar por WhatsApp
                </a>
              </div>
            </div>

            {/* 1 kg */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 col-span-2 md:col-span-1 max-w-[360px] mx-auto">
              <div className="flex items-center justify-center">
                <img src="/harina1kg.png" alt="Paquete 1 kg" className="w-full h-40 md:h-56 object-contain p-2" />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h4 className="font-chunk text-lg md:text-xl text-vitisanus-purple mb-1">1 kg</h4>
                <p className="text-vitisanus-text mb-3 md:mb-4 text-sm md:text-base">
                  La opción rendidora para tu despensa.
                </p>
                <a
                  href="https://wa.me/+5491132736745?text=Hola%20Vitisanus%2C%20quiero%20comprar%20como%20comercio%20(mayorista)"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-effect-3 bg-green-600 hover:bg-green-700 text-white inline-flex items-center gap-2 text-sm md:text-lg px-4 py-2 md:px-8 md:py-4"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                  Comprar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-20 px-4 bg-vitisanus-cream">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-6">Quiénes somos</h2>
            <div className="w-24 h-1 bg-vitisanus-purple mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-vitisanus-purple">
              <p className=" leading-relaxed">
                En <strong className="text-vitisanus-purple">Finca Dinamia </strong>
                convertimos los <strong>subproductos del viñedo mendocino</strong> en
                <strong> ingredientes nutritivos</strong> y <strong>sostenibles</strong>.
                Con un <strong>enfoque boutique</strong>, garantizamos
                <strong> calidad</strong>, <strong>excelencia</strong> y
                <strong> sustentabilidad</strong>, llevando la
                <strong> tradición vitivinícola argentina</strong> a tu
                <strong> cocina</strong> con productos <strong>únicos</strong>.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-20 h-20 bg-vitisanus-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292" />
                  </svg>
                </div>
                <h3 className="font-chunk text-2xl text-vitisanus-purple mb-4">Mendoza, Argentina</h3>
                <p className="text-vitisanus-purple mb-6">
                  Desde el corazón vitivinícola de Argentina, con más de una década de experiencia en producción
                  sustentable.
                </p>
                <a href="/quienesSomoVitisanus.pdf" target="_blank" rel="noreferrer" className="btn-secondary inline-block">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recetas destacadas */}
      <section id="recetas" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-6">Recetas destacadas</h2>
            <div className="w-24 h-1 bg-vitisanus-purple mx-auto mb-8" />
            <p className="text-lg text-vitisanus-purple max-w-2xl mx-auto">
              Descubrí las infinitas posibilidades culinarias con Harina de Uva Vitisanus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {RECIPES.filter((r) => r.featured).slice(0, 4).map((r) => (
              <article
                key={r.slug}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-chunk text-2xl text-vitisanus-purple mb-2">{r.title}</h3>
                  <p className="hidden md:block text-vitisanus-text mb-4 leading-relaxed">
                    {r.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`/recetas#${r.slug}`} className="btn-effect-3 receta-link" aria-label={`Ver receta completa de ${r.title}`}>
                      Ver receta completa
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/recetas" className="btn-effect-3 inline-block text-xl px-5 py-4 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
              Ver todas las recetas
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-6">Preguntas frecuentes</h2>
            <div className="w-24 h-1 bg-vitisanus-purple mx-auto mb-8"></div>
            <p className="text-lg text-vitisanus-text">Resolvemos las dudas más comunes sobre la Harina de Uva Vitisanus</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-vitisanus-purple text-lg pr-4">{faq.question}</h3>
                    <svg className={`w-5 h-5 text-vitisanus-purple transform transition-transform duration-300 flex-shrink-0 ${activeAccordion === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div id={`faq-content-${index}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 py-4 bg-gray-50 text-vitisanus-text border-t border-gray-100">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Material educativo (comentado) */}
      {/*
      <section className="py-20 px-4 bg-vitisanus-cream">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-6">Material educativo</h2>
            <div className="w-24 h-1 bg-vitisanus-purple mx-auto mb-8"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-vitisanus-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 className="font-chunk text-2xl text-vitisanus-purple mb-4">Charla sobre Polvo de Uva</h3>
              <p className="text-vitisanus-text mb-6 leading-relaxed">
                Descargá nuestra presentación completa sobre las propiedades, beneficios y aplicaciones de la Harina de Uva Vitisanus.
              </p>
              <a href="/CharlaPolvodeuva.pdf" target="_blank" rel="noreferrer" className="btn-effect-3 inline-flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <span>Abrir PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Morado 
      <section className="py-20 px-4 bg-gradient-to-r from-vitisanus-purple to-vitisanus-light-purple text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-chunk text-4xl md:text-5xl mb-6">Probá Vitisanus hoy en CABA</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Descubrí el sabor único y los beneficios nutricionales de la Harina de Uva Vitisanus. Tu cocina nunca será la misma.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5492241681066?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20Harina%20de%20Uva%20Vitisanus"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-out shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 flex items-center space-x-3 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>*/}


      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-4 bg-vitisanus-cream">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-vitisanus-purple/10 p-6 sm:p-8 md:p-10 overflow-hidden">
            <div className="text-center mb-8">
              <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-vitisanus-purple/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-vitisanus-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-1-1.732M5 19a2 2 0 01-2-2V7a2 2 0 011-1.732M21 7l-9 6L3 7" />
                </svg>
              </div>
              <h2 className="font-chunk text-3xl sm:text-4xl md:text-5xl text-vitisanus-purple">¡Sumate a las Novedades!</h2>
              <p className="text-vitisanus-text mt-3 text-base sm:text-lg">Recibí recetas, tips y novedades de Vitisanus en tu correo.</p>
            </div>
            <div className="mx-auto w-full max-w-lg px-1">
              <NewsletterForm source="footer" />
              <p className="mt-4 text-xs text-center text-vitisanus-text/70">
                Prometemos cero spam. Podés desuscribirte cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}