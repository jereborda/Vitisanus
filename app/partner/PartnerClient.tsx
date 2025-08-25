"use client"

export default function PartnerClient() {
    return (
        <div className="min-h-screen bg-vitisanus-cream py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h1 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-4">
                        Hacete Partner
                    </h1>
                    <p className="text-lg text-vitisanus-text max-w-2xl mx-auto">
                        Sumate a nuestra red de partners y llevá la Harina de Uva Vitisanus a más personas.
                        Si sos chef, comercio, distribuidor o marca aliada, queremos trabajar con vos.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="font-chunk text-2xl text-vitisanus-purple mb-6 text-center">
                        Beneficios de ser Partner
                    </h2>

                    {/* Bloque destacado RNPA */}
                    <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 mb-8 text-center shadow-md">
                        <h3 className="font-semibold text-green-700 text-xl mb-2">✅ Seguridad y Confianza</h3>
                        <p className="text-green-800">
                            Contamos con registro sanitario oficial <strong>RNPA</strong>,
                            garantizando calidad y trazabilidad en todos nuestros productos.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-vitisanus-text mb-8">
                        <div className="bg-vitisanus-cream/50 rounded-xl p-5 shadow">
                            <h3 className="font-semibold text-vitisanus-purple mb-2">Precios exclusivos</h3>
                            <p>Descuentos mayoristas y condiciones especiales.</p>
                        </div>
                        <div className="bg-vitisanus-cream/50 rounded-xl p-5 shadow">
                            <h3 className="font-semibold text-vitisanus-purple mb-2">Visibilidad compartida</h3>
                            <p>Promocionamos tu marca en nuestra comunidad y redes.</p>
                        </div>
                        <div className="bg-vitisanus-cream/50 rounded-xl p-5 shadow">
                            <h3 className="font-semibold text-vitisanus-purple mb-2">Innovación culinaria</h3>
                            <p>Acceso anticipado a productos y recetas.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://wa.me/5491124621804?text=Hola,%20quiero%20ser%20partner%20de%20Vitisanus"
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-vitisanus-purple text-white font-medium text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                        >
                            Quiero ser Partner
                        </a>
                    </div>
                </div>
            </div>

            {/* Replaced placeholder with complete product information section */}
            {/* === VENTA A COMERCIOS / MAYORISTA (solo WhatsApp) === */}
            <section id="conseguir" className="py-20 px-4 bg-vitisanus-cream">
                <div className="container mx-auto max-w-6xl">
                    {/* Encabezado */}
                    <div className="text-center mb-10">
                        <h2 className="font-chunk text-4xl md:text-5xl text-vitisanus-purple mb-4">
                            Ventas a comercios
                        </h2>
                        <p className="text-vitisanus-text max-w-2xl mx-auto">
                            Abastecé tu negocio con Harina de Uva Vitisanus: diferencial real en color,
                            antioxidantes y origen mendocino. Facturación y logística para todo el país.
                        </p>
                    </div>

                    {/* Avisos clave */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-2xl shadow p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-vitisanus-purple/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-vitisanus-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M12 8v8m-4-4h8M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
                            </div>
                            <div>
                                <div className="text-sm uppercase tracking-wide text-vitisanus-text/70">Condición</div>
                                <div className="font-semibold text-vitisanus-purple text-lg">Compra mínima: $150.000</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-vitisanus-purple/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-vitisanus-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M3 10h18M6 6h12M4 14h16M5 18h14" /></svg>
                            </div>
                            <div>
                                <div className="text-sm uppercase tracking-wide text-vitisanus-text/70">Envíos</div>
                                <div className="font-semibold text-vitisanus-purple text-lg">A cargo del comprador</div>
                                <div className="text-sm text-vitisanus-text">Coordinamos transporte / expreso que prefieras.</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-vitisanus-purple/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-vitisanus-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="2" d="M9 14l2 2 4-4M7 7h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" /></svg>
                            </div>
                            <div>
                                <div className="text-sm uppercase tracking-wide text-vitisanus-text/70">Facturación</div>
                                <div className="font-semibold text-vitisanus-purple text-lg">A / B</div>
                                <div className="text-sm text-vitisanus-text">Precios mayoristas y lista actualizada por WhatsApp.</div>
                            </div>
                        </div>
                    </div>

                    {/* Presentaciones mayoristas */}
                    <div className="mb-12">
                        <h3 className="font-chunk text-2xl text-vitisanus-purple mb-6 text-center">Presentaciones para comercio</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Caja 250g */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
                                    <img src="/harina250.png" alt="Caja x10 - 250 g" className="w-full h-full object-contain" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="font-chunk text-xl text-vitisanus-purple mb-1">Caja x10 • 250 g</h4>
                                    <p className="text-vitisanus-text mb-4">Ideal para retail y primeras pruebas.</p>
                                </div>
                            </div>

                            {/* Caja 500g */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
                                    <img src="/harina500g.png" alt="Caja x10 - 500 g" className="w-full h-full object-contain" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="font-chunk text-xl text-vitisanus-purple mb-1">Caja x10 • 500 g</h4>
                                    <p className="text-vitisanus-text mb-4">Rotación media y ticket superior.</p>
                                </div>
                            </div>

                            {/* Caja 1 kg */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-square bg-white overflow-hidden flex items-center justify-center">
                                    <img src="/harina1kg.png" alt="Caja x6 - 1 kg" className="w-full h-full object-contain" />
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="font-chunk text-xl text-vitisanus-purple mb-1">Caja x6 • 1 kg</h4>
                                    <p className="text-vitisanus-text mb-4">Gastronomía y producción.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cómo comprar */}
                    <div className="bg-white rounded-2xl shadow p-6 md:p-8 mb-12">
                        <h3 className="font-chunk text-2xl text-vitisanus-purple mb-6">Cómo comprar</h3>
                        <ol className="grid md:grid-cols-3 gap-6 text-vitisanus-text">
                            <li className="bg-vitisanus-cream/70 rounded-xl p-4">
                                <div className="font-semibold text-vitisanus-purple mb-1">1) Pedí lista y stock</div>
                                <div>Te pasamos precios mayoristas y disponibilidad actual por WhatsApp.</div>
                            </li>
                            <li className="bg-vitisanus-cream/70 rounded-xl p-4">
                                <div className="font-semibold text-vitisanus-purple mb-1">2) Facturación A/B</div>
                                <div>Enviá tus datos y armamos la factura correspondiente.</div>
                            </li>
                            <li className="bg-vitisanus-cream/70 rounded-xl p-4">
                                <div className="font-semibold text-vitisanus-purple mb-1">3) Envío</div>
                                <div>Coordinamos el expreso/transporte que elijas (flete a cargo).</div>
                            </li>
                        </ol>
                    </div>

                    {/* CTA mayorista principal */}
                    <div className="flex justify-center">
                        <a
                            href="https://wa.me/+5492604578423?text=Hola%20Vitisanus%2C%20quiero%20comprar%20como%20comercio%20(mayorista)"
                            target="_blank" rel="noreferrer"
                            className="btn-effect-3 bg-green-600 hover:bg-green-700 text-white inline-flex items-center gap-2 text-lg px-8 py-4"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                            </svg>              Comprar por WhatsApp
                        </a>
                    </div>

                    <p className="text-center text-sm text-vitisanus-text mt-6">
                        * Compra mínima $150.000. Envío a todo el país a cargo del comprador. Precios sujetos a actualización.
                    </p>
                </div>
            </section>
        </div>
    )
}