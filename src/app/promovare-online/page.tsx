import { PricingCard } from "@/components/PricingCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promovare online și tracking',
  description: 'Setăm, gestionăm și optimizăm campanii Google, Meta și TikTok Ads, plus tracking și pixeli pentru măsurare reală.',
  alternates: {
    canonical: "/promovare-online",
  },
};

const marketingPackages = [
  {
    title: "SETUP & TRACKING",
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru business-uri care vor o fundație bună înainte să consume buget inutil pe reclame.",
    features: [
      "Instalare Google Analytics 4",
      "Meta Pixel și TikTok Pixel",
      "Evenimente și conversii importante",
      "Verificare tracking și atribuiri",
      "Recomandări pentru pașii următori",
    ],
    ctaText: "Cerere analiză",
    ctaLink: "/contact?pachet=tracking",
  },
  {
    title: "CAMPANII & OPTIMIZARE",
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru afaceri care vor trafic mai relevant, lead-uri sau vânzări mai bune.",
    features: [
      "Google Ads, Meta Ads sau TikTok Ads",
      "Structură campanii și audiențe",
      "Texte și direcție creativă pentru reclame",
      "Optimizări periodice și analiză rezultate",
      "Raport clar, fără limbaj complicat",
    ],
    ctaText: "Discută strategia",
    ctaLink: "/contact?pachet=ads-optimizare",
    recommended: true,
  },
  {
    title: "GROWTH COMPLET",
    price: "Contact pentru ofertă",
    priceSuffix: "personalizată",
    description: "Pentru magazine online sau business-uri care vor creștere susținută și o imagine mai puternică.",
    features: [
      "Promovare multi-platformă",
      "Remarketing și audiențe inteligente",
      "Suport pentru feed-uri și produse",
      "Idei de ofertare și îmbunătățire conversie",
      "Ajustări strategice pe termen lung",
    ],
    ctaText: "Hai să creștem",
    ctaLink: "/contact?pachet=growth-ads",
  },
];

const platforms = ["Google Ads", "Meta Ads", "TikTok Ads", "Shopify"];

export default function PromovareOnlinePage() {
  return (
    <div className="pt-3 pb-10 sm:pt-8 sm:pb-20">
      <div className="container mx-auto px-4">
        <div className="glass-card mb-10 rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
                Trafic mai bun. <span className="text-primary">Măsurare corectă.</span> Decizii mai clare.
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl mt-4">
                Nu pornim reclame la întâmplare. Punem la punct tracking-ul, pixelii și structura campaniilor, apoi optimizăm pe date reale și obiective concrete.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {platforms.map((item) => (
                  <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">în ce ne concentrăm</p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• instalare corectă a pixelilor și conversiilor</li>
                <li>• setare campanii cu structură clară</li>
                <li>• analiză și optimizare pe baza datelor</li>
                <li>• direcție creativă pentru reclame și bannere</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingPackages.map((pkg, idx) => {
            const isLast = idx === 2;
            return (
              <PricingCard
                key={pkg.title}
                {...pkg}
                idealFor={pkg.description}
                className={"transition-all duration-300 ease-in-out " + (isLast ? "hover:border-accent/50" : "hover:border-primary/40")}
                ctaClassName={isLast ? "bg-accent text-accent-foreground hover:opacity-90" : ""}
              />
            );
          })}
        </div>

        <div className="mt-16">
          <Card className="glass-card rounded-2xl border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-body text-white">Ce putem include în pachet</CardTitle>
              <CardDescription>Configurăm exact ce are sens pentru afacerea ta, nu o listă generică pentru toată lumea.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
                <div className="flex justify-between items-center text-lg gap-4">
                  <span>Setup conturi Google Ads, Meta Ads și TikTok Ads</span>
                  <span className="font-bold text-amber-100 text-right">ofertă personalizată</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg gap-4">
                  <span>Instalare pixeli, evenimente și conversii</span>
                  <span className="font-bold text-amber-100 text-right">ofertă personalizată</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-lg gap-4">
                  <span>Optimizare campanii, bannere, texte și direcție creativă</span>
                  <span className="font-bold text-amber-100 text-right">ofertă personalizată</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
