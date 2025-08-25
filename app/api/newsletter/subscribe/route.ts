import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs' // forzar uso de Node.js (no edge) para usar service_role

type Body = { email?: string; source?: string }

export async function POST(request: Request) {
    try {
        const { email, source }: Body = await request.json()

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ ok: false, error: 'Email inválido' }, { status: 400 })
        }

        const ip =
            (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() || undefined
        const userAgent = request.headers.get('user-agent') || undefined

        // service_role: sólo en servidor
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .upsert(
                {
                    email: email.toLowerCase(),
                    status: 'active',
                    source: source || 'website',
                    ip,
                    user_agent: userAgent,
                },
                { onConflict: 'email' }
            )
            .select('id,email,status')
            .single()

        if (error) {
            return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
        }

        return NextResponse.json({ ok: true, data }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
    }
}