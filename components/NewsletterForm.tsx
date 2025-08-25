'use client'
import { useState } from 'react'

export default function NewsletterForm({ source = 'footer' }: { source?: string }) {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState<string | null>(null)
    const [err, setErr] = useState<string | null>(null)

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setErr(null)
        setMsg(null)
        try {
            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source })
            })
            const json = await res.json()
            if (!json.ok) throw new Error(json.error || 'Error al suscribirte')
            setMsg('¡Listo! Te suscribimos a las novedades 🍷')
            setEmail('')
        } catch (e: any) {
            setErr(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-full">
            <div className="flex flex-col md:flex-row gap-2.5 items-stretch md:items-center w-full max-w-full">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    aria-label="Email para suscripción"
                    inputMode="email"
                    autoComplete="email"
                    className="w-full md:flex-1 rounded-xl border-2 border-vitisanus-purple/40 focus:border-vitisanus-purple focus:outline-none focus:ring-4 focus:ring-vitisanus-purple/20 bg-white/90 placeholder-gray-400 px-4 py-3 shadow-sm transition"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl px-5 md:px-6 py-3 leading-tight text-sm md:text-base font-medium bg-vitisanus-purple text-white disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition w-full md:w-auto md:shrink-0 md:min-w-[150px]"
                >
                    {loading ? 'Enviando…' : 'Suscribirme'}
                </button>
            </div>

            {msg && <p className="text-sm text-green-700 mt-3">{msg}</p>}
            {err && <p className="text-sm text-red-700 mt-3">{err}</p>}
        </form>
    )
}