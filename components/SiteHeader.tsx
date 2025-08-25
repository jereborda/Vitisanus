"use client"

import { useState, useEffect } from "react"

export default function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Cierra el menú al navegar por anclas
    useEffect(() => {
        const onClick = (e: Event) => {
            const a = e.target as HTMLAnchorElement
            if (a?.tagName === "A") setMobileMenuOpen(false)
        }
        document.addEventListener("click", onClick)
        return () => document.removeEventListener("click", onClick)
    }, [])

    return (
        <header className="sticky top-0 z-50 bg-[#2a1036] shadow-sm border-b border-gray-100">
            {/* ↑ si tu home usa otro color (p.ej. #2a1036), cámbialo aquí: bg-[#2a1036] */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="/logovitusanus.png"
                        alt="Logo de la empresa"
                        className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="/#que-es"
                        className="text-vitisanus-text hover:text-vitisanus-purple transition-colors duration-300 font-medium relative group"
                    >
                        ¿Qué es?
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vitisanus-purple transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="/#quienes-somos"
                        className="text-vitisanus-text hover:text-vitisanus-purple transition-colors duration-300 font-medium relative group"
                    >
                        Quiénes somos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vitisanus-purple transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="/recetas"
                        className="text-vitisanus-text hover:text-vitisanus-purple transition-colors duration-300 font-medium relative group"
                    >
                        Recetas
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vitisanus-purple transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="/#conseguir"
                        className="text-vitisanus-text hover:text-vitisanus-purple transition-colors duration-300 font-medium relative group"
                    >
                        Conseguir
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vitisanus-purple transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="/partner"
                        className="text-vitisanus-text hover:text-vitisanus-purple transition-colors duration-300 font-medium relative group"
                    >
                        Ser Partner
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vitisanus-purple transition-all duration-300 group-hover:w-full" />
                    </a>
                </nav>

                {/* Botón móvil */}
                <button
                    className="md:hidden p-2 text-vitisanus-text hover:text-vitisanus-purple transition-colors"
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Nav móvil */}
            <div
                className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                {/* Si tu home usa color sólido (p.ej. #2a1036), cámbialo también aquí y en los hover */}
                <nav className="container mx-auto px-4 py-4 space-y-3">
                    <a href="/#que-es" className="block text-vitisanus-text hover:text-vitisanus-purple font-medium py-2 hover:bg-vitisanus-cream rounded-lg px-3">
                        ¿Qué es?
                    </a>
                    <a href="/#quienes-somos" className="block text-vitisanus-text hover:text-vitisanus-purple font-medium py-2 hover:bg-vitisanus-cream rounded-lg px-3">
                        Quiénes somos
                    </a>
                    <a href="/recetas" className="block text-vitisanus-text hover:text-vitisanus-purple font-medium py-2 hover:bg-vitisanus-cream rounded-lg px-3">
                        Recetas
                    </a>
                    <a href="/#conseguir" className="block text-vitisanus-text hover:text-vitisanus-purple font-medium py-2 hover:bg-vitisanus-cream rounded-lg px-3">
                        Conseguir
                    </a>
                    <a href="/partner" className="block text-vitisanus-text hover:text-vitisanus-purple font-medium py-2 hover:bg-vitisanus-cream rounded-lg px-3">
                        Partner
                    </a>
                </nav>
            </div>
        </header>
    )
}