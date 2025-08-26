export default function SiteFooter() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <img
                            src="/fincadinamialogo.png"
                            alt="Logo Vitisanus"
                            className="h-12 mx-auto md:mx-0 mb-4 brightness-0 invert"
                        />
                        <p className="text-gray-300 leading-relaxed">
                            Harina de Uva Vitisanus, producida por Finca Dinamia. Nutrición natural desde el corazón de Mendoza.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h3 className="font-chunk text-xl text-white mb-6">Contacto</h3>
                        <div className="space-y-3 text-gray-300">
                            {/* WhatsApp */}
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                </svg>
                                <a
                                    href="https://wa.me/5492604539000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-vitisanus-purple transition-colors"
                                >
                                    +54 9 2604 53-9000
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                                </svg>
                                <a
                                    href="mailto:info@vitisanus.com"
                                    className="hover:text-vitisanus-purple transition-colors"
                                >
                                    info@vitisanus.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center md:text-right">
                        <h3 className="font-chunk text-xl text-white mb-6">Seguinos</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a
                                href="https://www.facebook.com/Fincadinamia/?locale=es_LA"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/vitisanus/"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17" cy="7" r="1.25" />
                                </svg>
                            </a>

                            <a
                                href="https://wa.me/5491124621804?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20Harina%20de%20Uva%20Vitisanus"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">© 2025 Artoaweb. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}