import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutTemplate,
  Megaphone,
  ScanSearch,
  ShoppingCart,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creare site-uri și magazine online care vând',
  description:
    'Agenție digitală pentru site-uri de prezentare, magazine online, pixeli, tracking, descrieri produse și campanii Google, Meta sau TikTok Ads.',
};

const services = [
  {
    title: 'Site-uri de prezentare',
    description: 'Pagini rapide, elegante și clare pentru branduri, servicii, clinici, restaurante sau firme locale.',
    icon: LayoutTemplate,
  },
  {
    title: 'Magazine online',
    description: 'Structură mai bună, produse organizate și experiență fluidă pentru clienți.',
    icon: ShoppingCart,
  },
  {
    title: 'Produse și conținut',
    description: 'Scriem titluri, descrieri și beneficii care fac produsele mai ușor de înțeles și de cumpărat.',
    icon: Sparkles,
  },
  {
    title: 'Tracking și pixeli',
    description: 'Instalăm corect GA4, Google Ads, Meta Pixel și TikTok Pixel pentru măsurare reală.',
    icon: ScanSearch,
  },
  {
    title: 'Campanii Ads',
    description: 'Google Ads, Meta Ads și TikTok Ads cu optimizare constantă și focus pe rezultate.',
    icon: Megaphone,
  },
  {
    title: 'Consultanță e-commerce',
    description: 'Te ghidăm cu pașii esențiali pentru lansare, organizare și creștere online.',
    icon: ChartNoAxesCombined,
  },
];

const highlights = [
  'Design mai elegant, structură mai clară și mesaj mai bine pus în pagină.',
  'Fără elemente grele inutile, astfel încât site-ul să rămână rapid.',
  'Pagini și rute păstrate pentru continuitate și stabilitate SEO.',
  'Orientare pe imagine profesională, încredere și conversie.',
];

const steps = [
  {
    title: 'Analiză și direcție',
    text: 'Înțelegem ce vinzi, cui te adresezi și ce vrei să obții din site sau magazin.',
  },
  {
    title: 'Design și structură',
    text: 'Refacem mesajul, compoziția și culorile astfel încât site-ul să arate premium și coerent.',
  },
  {
    title: 'Implementare și tracking',
    text: 'Setăm paginile, formularele, produsele, pixelii și partea tehnică importantă.',
  },
  {
    title: 'Optimizare și lansare',
    text: 'Verificăm viteza, claritatea mesajului și pregătim terenul pentru promovare.',
  },
];

const platformBadges = ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Shopify'];

const heroBlocks = [
  {
    title: 'Site de prezentare',
    text: 'clar, elegant și ușor de parcurs',
    icon: LayoutTemplate,
  },
  {
    title: 'Magazin online',
    text: 'produse bine așezate și structură pentru conversie',
    icon: ShoppingCart,
  },
  {
    title: 'Promovare & tracking',
    text: 'măsurare corectă și campanii cu direcție',
    icon: Megaphone,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                agenție digitală pentru branduri și magazine online
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Site-uri și magazine online care <span className="text-primary">arată premium</span> și vând mai bine
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-300 md:text-xl">
                Ne ocupăm de design, structură, produse, descrieri, pixeli, tracking și promovare Google Ads, Meta Ads sau TikTok Ads, astfel încât afacerea ta să inspire încredere și să crească mai ușor online.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">site de prezentare</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">magazin online</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">copy pentru produse</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">Google Ads • Meta Ads • TikTok Ads</span>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
                <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
                  <Link href="/contact">
                    Solicită consultanță
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/portofoliu">Vezi soluțiile noastre</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="glass-card rounded-2xl p-4 text-left">
                  <p className="text-sm text-slate-400">Imagine</p>
                  <p className="mt-1 text-lg font-semibold text-white">Aspect curat și premium</p>
                </div>
                <div className="glass-card rounded-2xl p-4 text-left">
                  <p className="text-sm text-slate-400">Claritate</p>
                  <p className="mt-1 text-lg font-semibold text-white">Mesaj simplu și convingător</p>
                </div>
                <div className="glass-card rounded-2xl p-4 text-left">
                  <p className="text-sm text-slate-400">Viteză</p>
                  <p className="mt-1 text-lg font-semibold text-white">Performanță ridicată pe mobil</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">platforme și direcții</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {platformBadges.map((item) => (
                  <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-slate-100">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {heroBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.title} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{block.title}</p>
                          <p className="text-sm text-slate-300">{block.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-sm font-semibold text-primary">Focus pe conversie</p>
                  <p className="mt-1 text-sm text-slate-100">Structură gândită pentru contact, cereri și vânzare.</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300">Potrivit pentru mobil</p>
                  <p className="mt-1 text-sm text-slate-100">Aspect plăcut și rapid pe telefoane și tablete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tot ce ai nevoie pentru o prezență online completă</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Nu facem doar un design frumos. Punem cap la cap imaginea, structura, conținutul și partea tehnică importantă pentru ca site-ul să arate bine și să funcționeze bine.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="glass-card rounded-2xl border-white/10">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-slate-300">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-white">De ce această variantă arată și funcționează mai bine</h2>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Workflow className="h-6 w-6 text-emerald-300" />
                <h3 className="text-2xl font-bold text-white">Ofertă construită pe nevoile proiectului</h3>
              </div>
              <p className="text-slate-300">
                Pentru un magazin online sau un proiect de promovare, costul se stabilește în funcție de numărul de produse, complexitate, integrare și volumul real de lucru. Astfel primești o propunere corectă și potrivită obiectivelor tale.
              </p>
              <Button asChild className="mt-6 rounded-full bg-accent text-accent-foreground hover:opacity-90">
                <Link href="/preturi-site">Vezi cum lucrăm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cum-functioneaza" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Proces clar, fără complicații</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Lucrăm simplu, organizat și orientat pe rezultat, astfel încât site-ul să arate bine și să fie util din prima zi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step.title} className="glass-card rounded-2xl border-white/10">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
