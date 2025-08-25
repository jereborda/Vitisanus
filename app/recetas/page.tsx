"use client"

import { useMemo, useState } from "react"
import { RECIPES, type Recipe, type Categoria } from "./recipes"

function RecipeCard({ recipe }: { recipe: Recipe }) {
    const [panel, setPanel] = useState<null | "steps" | "video">(null)

    return (
        <article id={recipe.slug} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>

            <div className="p-6">
                <h3 className="font-chunk text-2xl text-vitisanus-purple mb-2">{recipe.title}</h3>
                <p className="text-vitisanus-text mb-4 leading-relaxed">{recipe.description}</p>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setPanel(panel === "steps" ? null : "steps")}
                        className="btn-effect-3 receta-link"
                        aria-expanded={panel === "steps"}
                    >
                        {panel === "steps" ? "Ocultar paso a paso" : "Ver paso a paso"}
                    </button>

                    {recipe.videoUrl && (
                        <button
                            onClick={() => setPanel(panel === "video" ? null : "video")}
                            className="btn-secondary"
                            aria-expanded={panel === "video"}
                        >
                            {panel === "video" ? "Ocultar video" : "Ver video"}
                        </button>
                    )}
                </div>
            </div>

            {panel === "steps" && (
                <div className="border-t border-gray-100">
                    <div className="p-6 grid md:grid-cols-2 gap-6">
                        {recipe.ingredients?.length ? (
                            <div>
                                <h4 className="font-semibold text-vitisanus-purple mb-2">Ingredientes</h4>
                                <ul className="list-disc pl-5 text-vitisanus-text space-y-1 text-sm">
                                    {recipe.ingredients.map((ing, i) => (
                                        <li key={i}>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        <div>
                            <h4 className="font-semibold text-vitisanus-purple mb-2">Pasos</h4>
                            <ol className="list-decimal pl-5 text-vitisanus-text space-y-1 text-sm">
                                {recipe.steps.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            )}

            {panel === "video" && recipe.videoUrl && (
                <div className="border-t border-gray-100">
                    <div className="p-6">
                        <div className="aspect-video rounded-xl overflow-hidden bg-black">
                            <iframe
                                src={recipe.videoUrl}
                                title={`${recipe.title} - video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default function RecetasPage() {
    const [query, setQuery] = useState("")
    const [openSection, setOpenSection] = useState<Record<Categoria, boolean>>({
        Comidas: true,
        panes: true,
        pastas: true,
        postres: true,
        snaks: true,
    })

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return RECIPES
        return RECIPES.filter(r =>
            r.title.toLowerCase().includes(q) ||
            r.description.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q)
        )
    }, [query])

    const byCategory = (c: Categoria) => filtered.filter(r => r.category === c)

    return (
        <div className="min-h-screen">
            {/* HERO + BUSCADOR */}
            <section className="py-12 px-4 bg-vitisanus-cream">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-4">Todas las recetas</h1>
                    <p className="text-vitisanus-text max-w-2xl mx-auto mb-6">Buscá por nombre, categoría o descripción.</p>
                    <div className="max-w-xl mx-auto">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar recetas… (ej. pizza, pastas, muffins)"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-vitisanus-purple"
                        />
                    </div>
                </div>
            </section>

            {/* SECCIONES */}
            <main className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl space-y-12">
                    {([
                        { key: "Comidas", label: "Comidas" },
                        { key: "panes", label: "Panes" },
                        { key: "pastas", label: "Pastas" },
                        { key: "postres", label: "Postres" },
                        { key: "snaks", label: "Snaks" },
                    ] as { key: Categoria; label: string }[]).map(({ key, label }) => {
                        const items = byCategory(key)
                        return (
                            <section key={key} id={key}>
                                <button
                                    className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-5 py-4 hover:shadow-sm transition"
                                    onClick={() => setOpenSection(s => ({ ...s, [key]: !s[key] }))}
                                >
                                    <span className="font-chunk text-2xl text-vitisanus-purple">
                                        {label}{" "}
                                        <span className="text-vitisanus-text text-base font-normal">({items.length})</span>
                                    </span>
                                    <svg className={`w-5 h-5 text-vitisanus-purple transition-transform ${openSection[key] ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {openSection[key] && (
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {items.length === 0
                                            ? <div className="md:col-span-2 text-center text-vitisanus-text">No hay recetas que coincidan con tu búsqueda.</div>
                                            : items.map(r => <RecipeCard key={r.slug} recipe={r} />)}
                                    </div>
                                )}
                            </section>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}