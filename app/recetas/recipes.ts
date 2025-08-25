// app/recetas/recipes.ts

export type Categoria = "Comidas" | "panes" | "pastas" | "postres" | "snaks"

export const CATEGORIAS: Categoria[] = ["panes", "pastas", "postres", "snaks"]

export const CATEGORIA_LABELS: Record<Categoria, string> = {
    Comidas: "Comidas",
    panes: "Panes",
    pastas: "Pastas",
    postres: "Postres",
    snaks: "Snaks",
}

export const CATEGORIA_ICONS: Record<Categoria, string> = {
    Comidas: "i-heroicons-cake-solid",
    panes: "🍞",
    pastas: "🍝",
    postres: "🍰",
    snaks: "🍿",
}

export const CATEGORIA_COLORS: Record<Categoria, string> = {
    Comidas: "bg-vitisanus-blue",
    panes: "bg-vitisanus-purple",
    pastas: "bg-vitisanus-green",
    postres: "bg-vitisanus-pink",
    snaks: "bg-vitisanus-yellow",
}

export const CATEGORIA_ICONS_FILLED: Record<Categoria, string> = {
    Comidas: "i-heroicons-cake-solid",
    panes: "i-heroicons-bread-slice-solid",
    pastas: "i-heroicons-pasta-solid",
    postres: "i-heroicons-cake-solid",
    snaks: "i-heroicons-popcorn-solid",
}

export const CATEGORIA_ICONS_OUTLINED: Record<Categoria, string> = {
    Comidas: "i-heroicons-cake-outline",
    panes: "i-heroicons-bread-slice-outline",
    pastas: "i-heroicons-pasta-outline",
    postres: "i-heroicons-cake-outline",
    snaks: "i-heroicons-popcorn-outline",
}

export type Recipe = {
    slug: string
    title: string
    description: string
    image: string
    ingredients: string[]
    steps: string[]
    videoUrl?: string
    category: Categoria
    featured?: boolean
    prepTimeMin?: number
    cookTimeMin?: number
    yieldText?: string
}

export const RECIPES: Recipe[] = [
    // ========= EXISTENTES (mejorados) =========
    {
        slug: "pizza-morada",
        title: "Pizza Morada",
        description:
            "Una pizza con masa morada gracias a la harina de uva: aroma suave, color único y muy fácil de hacer.",
        image: "/pizza.png",
        ingredients: [
            "450 g harina común 000/0000",
            "50 g Harina de uva Vitisanus",
            "10 g sal fina",
            "7–10 g levadura seca (o 20 g fresca)",
            "300 ml agua tibia (aprox.)",
            "1 cda aceite de oliva",
            "Salsa de tomate y cubierta a gusto"
        ],
        steps: [
            "En bowl, mezclá harinas y sal. Hacé un hueco al centro.",
            "Disolvé la levadura en parte del agua tibia (con una pizca de azúcar). Dejá espumar 5–10 min.",
            "Sumá la mezcla de levadura, el resto del agua y el aceite. Integra y amasá 8–10 min hasta masa lisa.",
            "Dejá leudar tapado 60–90 min, hasta duplicar.",
            "Desgasificá, estirá a mano o palo. Pasá a placa aceitada.",
            "Salseá, agregá cubierta y horneá a 220–240 °C por 10–12 min (hasta bordes bien dorados)."
        ],
        videoUrl: "https://www.youtube.com/embed/AAAAAAA?rel=0",
        category: "Comidas",
        featured: true,
        prepTimeMin: 20,
        cookTimeMin: 12,
        yieldText: "1 pizza grande"
    },

    {
        slug: "empanadas-gourmet",
        title: "Empanadas Gourmet",
        description:
            "Empanadas con masa morada (harina de uva) y tu relleno favorito. Crocantes, coloridas y sabrosas.",
        image: "/empanadas.jpg",
        ingredients: [
            "320 g harina común",
            "80 g Harina de uva Vitisanus",
            "80 g grasa vacuna o 60 ml aceite",
            "10 g sal fina",
            "180–200 ml agua tibia (salmuera)",
            "Relleno a elección (carne, verdura, queso)",
            "Huevo para pintar + semillas (opcional)"
        ],
        steps: [
            "Mezclá harinas y sal. Sumá grasa fundida (o aceite) y arená.",
            "Agregá agua de a poco hasta lograr masa suave. Amasá 3–4 min.",
            "Descansá 20 min, cubierta.",
            "Estirá a 2–3 mm y cortá discos (12–13 cm).",
            "Rellená, cerrá con repulgue y pintá con huevo.",
            "Horneá a 200 °C 18–22 min (o freí hasta dorar)."
        ],
        videoUrl: "https://www.youtube.com/embed/BBBBBBB?rel=0",
        category: "Comidas",
        prepTimeMin: 30,
        cookTimeMin: 20,
        yieldText: "12 empanadas aprox."
    },

    {
        slug: "muffins-antioxidantes",
        title: "Muffins Antioxidantes",
        description:
            "Muffins esponjosos, con color y antioxidantes naturales de la uva. Ideales para desayuno o merienda.",
        image: "/mufinsDeUva.png",
        ingredients: [
            "170 g harina común",
            "30 g Harina de uva Vitisanus (15%)",
            "120 g azúcar",
            "8 g polvo de hornear + pizca de sal",
            "2 huevos",
            "120 ml leche",
            "60 ml aceite neutro",
            "Esencia de vainilla / ralladura (opcional)"
        ],
        steps: [
            "Precalentá el horno a 180 °C. Prepará pirotines.",
            "Secos: harina común, harina de uva, polvo y sal.",
            "Húmedos: huevos, leche, aceite, vainilla. Batido breve.",
            "Uní húmedos con secos SIN sobrebatir (apenas integrar).",
            "Rellená ¾ del molde y horneá 18–22 min a 180 °C.",
            "Enfriá sobre rejilla antes de servir."
        ],
        videoUrl: "https://www.youtube.com/embed/CCCCCCC?rel=0",
        category: "postres",
        featured: true,
        prepTimeMin: 15,
        cookTimeMin: 20,
        yieldText: "12 muffins"
    },

    {
        slug: "fideos-caseros",
        title: "Fideos Caseros",
        description:
            "Pasta fresca con harina de uva: textura suave, color espectacular y cocción en minutos.",
        image: "/fideos.jpg",
        ingredients: [
            "320 g harina común",
            "80 g Harina de uva Vitisanus (20%)",
            "3 huevos L (≈ 165–180 g)",
            "1 cdita sal",
            "1–2 cditas agua/aceite si hiciera falta"
        ],
        steps: [
            "Formá corona con harinas y sal; poné huevos al centro.",
            "Batí huevos con tenedor y andá incorporando harina.",
            "Amasá 8–10 min hasta masa lisa; reposá 20–30 min tapada.",
            "Estirá en máquina o palo hasta 1–2 mm y cortá (tallarín/fettuccine).",
            "Herví en agua con sal 2–3 min. Escurrí y salseá."
        ],
        videoUrl: "https://www.youtube.com/embed/DDDDDDD?rel=0",
        category: "pastas",
        featured: true,
        prepTimeMin: 25,
        cookTimeMin: 3,
        yieldText: "4 porciones"
    },

    // ========= NUEVAS =========

    {
        slug: "pan-casero-harina-uva",
        title: "Pan casero con Harina de Uva",
        description:
            "Pan fácil, natural y con un color morado increíble gracias a la harina de uva.",
        image: "/panuva.png",
        ingredients: [
            "30 g Harina de uva Vitisanus",
            "500 g harina integral o común 000",
            "6 g levadura seca (o 20% masa madre: 100 g c/500 g harina)",
            "1 cdita sal",
            "400 g agua templada",
            "Semillas para cubrir (opcional)"
        ],
        steps: [
            "Colocá todos los ingredientes en un bowl (si usás masa madre, incorporala al final cuando la masa ya tomó cuerpo).",
            "Amasá a mano 10 min o en batidora 6–8 min; dejá una masa lisa.",
            "Fermentá 2 h en bowl tapado.",
            "Pasá la masa a un molde sin reamasar. Humedecé y espolvoreá semillas.",
            "Horneá 20 min a 220 °C (horno precalentado) y luego 25–30 min a 180 °C.",
            "Desmoldá y enfriá por completo antes de cortar."
        ],
        videoUrl: "https://www.instagram.com/p/DHD2OxfuNkY/embed",
        category: "panes",
        featured: true,
        prepTimeMin: 20,
        cookTimeMin: 50,
        yieldText: "1 pan de molde"
    },

    {
        slug: "focaccia-harina-uva",
        title: "Focaccia con Harina de Uva",
        description:
            "Esponjosa, aromática y con un toque morado único. Ideal para compartir.",
        image: "/focaccia.png",
        ingredients: [
            "350 g harina común",
            "50 g Harina de uva Vitisanus",
            "8 g sal fina",
            "7 g levadura seca",
            "300 ml agua (fría a temp. ambiente)",
            "30 ml aceite de oliva + extra para topping",
            "Romero, aceitunas, sal en escamas (topping)"
        ],
        steps: [
            "Secos a bowl: harinas, sal y levadura. Sumá agua y aceite; integra con cuchara.",
            "Reposo 10 min, luego 3–4 series de pliegues cada 10 min (desarrollo de gluten).",
            "Pasá a placa bien aceitada; ‘dimple’ con los dedos, agregá aceite y topping.",
            "Leudá 30–45 min. Horneá a 220 °C por 18–22 min hasta dorar.",
            "Enfriá 10 min y serví."
        ],
        videoUrl: "https://www.instagram.com/reel/DMjlSHuMFeq/embed",
        category: "panes",
        prepTimeMin: 25,
        cookTimeMin: 20,
        yieldText: "1 placa mediana"
    },

    {
        slug: "nachos-harina-uva",
        title: "Nachos con Harina de Uva",
        description:
            "Crocantes, sabrosos y con antioxidantes. Perfectos para dips o para picar.",
        image: "/nachos.png",
        ingredients: [
            "180 g harina común",
            "20 g Harina de uva Vitisanus (≈10%)",
            "1/2 cdita sal + especias a gusto (pimentón, comino)",
            "25 ml aceite",
            "80–100 ml agua (masa firme)",
            "Aceite para freír o placa para horno"
        ],
        steps: [
            "Uní secos y especias. Sumá aceite y parte del agua hasta masa firme.",
            "Descansá 10 min. Estirá fino entre dos papeles y cortá triángulos.",
            "Horno: 190–200 °C por 10–14 min hasta dorar. O freí 1–2 min por lado.",
            "Enfriá para máxima crocancia. Salá apenas al salir del horno/fritura."
        ],
        videoUrl: "https://www.instagram.com/reel/DNTuhq_S_jH/embed",
        category: "snaks",
        prepTimeMin: 15,
        cookTimeMin: 12,
        yieldText: "1 fuente grande"
    },

    {
        slug: "sanguche-mendocino",
        title: "Sánguche Mendocino",
        description:
            "Carne asada (entraña/lomo), chimichurri mendocino y pan morado con harina de uva. Potente y simple.",
        image: "/sangucheMendocino.png",
        ingredients: [
            "Pan casero con Harina de uva (rebanado)",
            "600–800 g entraña o lomo",
            "Chimichurri mendocino",
            "Tomate en rodajas, hojas verdes",
            "Cebolla morada (ideal encurtida)",
            "Aceite de oliva, sal y pimienta"
        ],
        steps: [
            "Salpimentá la carne. Marcá a fuego fuerte 2–3 min por lado.",
            "Bajá el fuego y llevá al punto deseado. Dejá reposar 5 min.",
            "Fileteá fino la carne en ángulo.",
            "Tostá el pan morado con un toque de aceite de oliva.",
            "Armado: pan, chimichurri, carne, tomate, verdes y cebolla. Cerrá y serví."
        ],
        videoUrl: "https://www.instagram.com/reel/DMIiw7BMmiv/embed",
        category: "Comidas",
        prepTimeMin: 15,
        cookTimeMin: 10,
        yieldText: "2–3 sánguches"
    }
]