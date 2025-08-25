import type { Metadata } from "next"
import PartnerClient from "./PartnerClient"   // ✅ import relativo, nombre exacto
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import { de } from "date-fns/locale"

export const metadata: Metadata = {
    title: "Hacete Partner | Vitisanus",
    description: "Sumate a nuestra red de partners: comercios, distribuidores, chefs y marcas.",
}

export default function PartnerPage() {
    return <PartnerClient />
    
}   