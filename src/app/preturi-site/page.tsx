import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluții web personalizate',
  description: 'Site-uri de prezentare, magazine online și servicii conexe fără prețuri fixe afișate public. Cerem întâi detalii, apoi venim cu oferta potrivită.',
  alternates: {
    canonical: "/preturi-site",
  },
};

const websitePackages = [
  {
    title: "SITE DE PREZENTARE",
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru firme, servicii, showroom-uri, clinici sau branduri care au nevoie de imagine clară și profesionistă.",
    features: [
      "Structură clară și design premium",
      "Copy comercial și mesaje convingătoare",
      "Optimizare mobil și SEO tehnic",
      "Formulare de contact și CTA-uri bine plasate",
      "Viteză excelentă și cod curat",
    ],
    ctaText: "Solicită ofertă",
    ctaLink: "/contact?pachet=site-prezentare",
  },
  {
    title: "MAGAZIN ONLINE",
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru afaceri care vor să vândă online mai organizat, mai credibil și mai eficient.",
    features: [
      "Categorii, produse și filtre organizate",
      "Descrieri și titluri produse",
      "Inserare produse și optimizare prezentare",
      "Tracking, pixeli și măsurare conversii",
      "Setup orientat pe vânzare și creștere",
    ],
    ctaText: "Discută proiectul",
    ctaLink: "/contact?pachet=magazin-online",
    recommended: true,
  },
  {
    title: 'SUPORT & GROWTH',
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru business-uri care au deja o bază și vor optimizare, promovare și suport constant.",
    features: [
      "Google Ads, Meta Ads și TikTok Ads",
      "Audit, tracking și instalare pixeli",
      "Creativitate pentru bannere și vizualuri",
      "Îmbunătățiri pentru pagini și funnel-uri",
      "Consultanță strategică pentru pașii următori",
    ],
    ctaText: "Hai să colaborăm",
    ctaLink: "/contact?pachet=growth",
  },
];

const addons = [
  { name: "Inserare și organizare produse în magazin" },
  { name: "Descrieri comerciale și titluri optimizate" },
  { name: "Instalare Google Analytics, Meta Pixel și TikTok Pixel" },
  { name: "Consultanță pentru lansare și procese e-commerce" },
  { name: "Editare imagini produse și materiale promo" },
  { name: "Logo, elemente vizuale și ajustări de brand" },
];

export default function PacheteSitePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Soluții personalizate pentru <span className="text-primary">afacerea ta</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Nu afișăm prețuri standard pentru că fiecare proiect vine cu alt număr de pagini, produse, integrări și obiective. Întâi discutăm, apoi îți trimitem cea mai potrivită variantă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitePackages.map((pkg, idx) => {
            const isLast = idx === 2;
            return (
              <PricingCard
                key={pkg.title}
                {...pkg}
                className={
                  "glass-card rounded-2xl transition-all duration-300 ease-in-out " +
                  (isLast ? "hover:border-fuchsia-400/60" : "hover:border-cyan-400/60")
                }
                ctaClassName={isLast ? "bg-fuchsia-500 text-white hover:bg-fuchsia-400" : ""}
              />
            );
          })}
        </div>

        <div className="text-center my-8">
          <a href="/portofoliu" className="inline-block text-lg font-bold text-primary hover:underline">Descoperă soluțiile pe care le putem construi pentru afacerea ta.</a>
        </div>

        <div className="mt-16">
          <Card className="glass-card rounded-2xl border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline text-white">Ce mai putem face pentru tine</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
                {addons.map((addon) => (
                  <li key={addon.name} className="flex items-start border-b border-dashed border-white/10 pb-2 text-slate-300">
                    <span className="flex items-start"><Check className="w-4 h-4 mr-2 mt-1 text-primary" />{addon.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
