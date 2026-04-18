import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';
import Link from "next/link";
import { LayoutTemplate, ShoppingCart, ScanSearch, Megaphone, PencilRuler, Layers3 } from "lucide-react";

const projectDirections = [
  {
    title: "Site de prezentare premium",
    description: "Pentru firme, servicii, clinici, saloane, showroom-uri sau branduri care vor o imagine clară și profesionistă.",
    tags: ["prezentare", "lead-uri", "încredere"],
    icon: LayoutTemplate,
  },
  {
    title: "Magazin online orientat pe conversie",
    description: "Structură bună, produse organizate, categorii clare și pagini gândite pentru un parcurs mai simplu spre comandă.",
    tags: ["e-commerce", "produse", "vânzări"],
    icon: ShoppingCart,
  },
  {
    title: "Tracking și pixeli corect instalați",
    description: "Setăm Google Analytics, Meta Pixel și TikTok Pixel pentru ca promovarea să fie măsurată corect, nu doar presupusă.",
    tags: ["GA4", "Meta Pixel", "TikTok Pixel"],
    icon: ScanSearch,
  },
  {
    title: "Landing pages pentru reclame",
    description: "Pagini de campanie clare, rapide și bine structurate pentru Google Ads, Meta Ads sau TikTok Ads.",
    tags: ["ads", "landing page", "rezultate"],
    icon: Megaphone,
  },
  {
    title: "Descrieri, titluri și conținut de produs",
    description: "Punem ordine în produse și scriem texte mai convingătoare, mai clare și mai ușor de urmărit de către client.",
    tags: ["copy", "catalog", "claritate"],
    icon: PencilRuler,
  },
  {
    title: "Soluții personalizate după industrie",
    description: "Adaptăm designul, structura și mesajul în funcție de nișa ta, fără șabloane reci și fără exemple forțate.",
    tags: ["personalizat", "branding", "strategie"],
    icon: Layers3,
  },
];

const strengths = [
  "Mesaj clar și imagine mai profesionistă",
  "Structură gândită pentru încredere și contact",
  "Performanță bună și experiență curată pe mobil",
  "Ofertă personalizată în funcție de nevoile reale",
];

export const metadata: Metadata = {
  title: 'Tipuri de proiecte și direcții creative',
  description: 'Descoperă ce tipuri de site-uri, magazine online și soluții digitale putem construi pentru afacerea ta.',
  alternates: {
    canonical: "/portofoliu",
  },
};

export default function PortofoliuPage() {
  return (
    <div className="relative pt-2 pb-10 sm:pt-6 sm:pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 pt-0 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            direcții de proiect pentru brandul tău
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
            Ce putem construi pentru <span className="text-primary">afacerea ta</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            În loc de exemple forțate, am ales să prezentăm clar tipurile de proiecte și direcțiile pe care le putem dezvolta pentru tine, în funcție de obiective, industrie și nivelul de creștere dorit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectDirections.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="glass-card rounded-2xl border-white/10 flex flex-col">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-slate-300">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 text-slate-200 hover:bg-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <Card className="glass-card rounded-2xl border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Cum vrem să arate fiecare proiect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Vrei o variantă potrivită pentru tine?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                Spune-ne ce tip de business ai, dacă vrei site de prezentare sau magazin online, dacă ai nevoie de produse, conținut, pixeli sau campanii Ads, iar noi îți propunem direcția potrivită.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                  <Link href="/contact">Solicită ofertă personalizată</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/preturi-site">Vezi serviciile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
