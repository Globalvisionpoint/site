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
    description: 'Pagini rapide, moderne și clare pentru branduri, servicii, clinici, restaurante sau firme locale.',
    icon: LayoutTemplate,
  },
  {
    title: 'Magazine online',
    description: 'Structură bună, categorie curate, experiență fluidă și accent pe conversie, nu doar pe aspect.',
    icon: ShoppingCart,
  },
  {
    title: 'Produse și conținut',
    description: 'Scriem titluri, descrieri, beneficii și organizăm produsele ca să fie ușor de găsit și cumpărat.',
    icon: Sparkles,
  },
  {
    title: 'Tracking și pixeli',
    description: 'Instalăm corect GA4, Google Ads, Meta Pixel și TikTok Pixel pentru măsurare reală.',
    icon: ScanSearch,
  },
  {
    title: 'Campanii Ads',
    description: 'Google, Meta și TikTok Ads cu setare, optimizare și ajustări constante pe baza rezultatelor.',
    icon: Megaphone,
  },
  {
    title: 'Consultanță e-commerce',
    description: 'Te ghidăm cu pașii esențiali pentru lansare, organizare, procese, imagine și direcție de creștere.',
    icon: ChartNoAxesCombined,
  },
];

const highlights = [
  'Păstrăm site-ul rapid și curat, fără elemente grele inutile.',
  'Nu afișăm prețuri fixe; fiecare ofertă se face după volumul real de lucru.',
  'Păstrăm rutele importante pentru a nu afecta indexarea existentă din Google.',
  'Lucrăm orientat pe imagine bună, încredere și conversie.',
];

const steps = [
  {
    title: 'Analiză și direcție',
    text: 'Înțelegem ce vinzi, cui te adresezi și ce vrei să obții din site sau magazin.',
  },
  {
    title: 'Design și structură',
    text: 'Refacem mesajul, aspectul, culorile și secțiunile astfel încât site-ul să arate premium.',
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Agenție digitală pentru branduri și magazine online
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Construim site-uri și magazine online care <span className="text-cyan-300">arată premium</span> și sunt făcute să aducă rezultate.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300 md:text-xl">
              Ne ocupăm de design, structură, produse, descrieri, pixeli, tracking și promovare Google ads, Meta ads sau TikTok ads. Tu vii cu direcția afacerii, noi transformăm totul într-o prezență online serioasă și convingătoare.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">site de prezentare</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">magazin online</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">copy pentru produse</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">Google • Meta • TikTok Ads</span>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                <Link href="/contact">
                  Solicită consultanță
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link href="/portofoliu">Vezi portofoliu</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-5 text-left">
              <p className="text-sm text-slate-400">Ce urmărești</p>
              <p className="mt-1 text-xl font-semibold text-white">Un site mai curat, mai profesionist și mai convingător</p>
            </div>
            <div className="glass-card rounded-2xl p-5 text-left">
              <p className="text-sm text-slate-400">Cum lucrăm</p>
              <p className="mt-1 text-xl font-semibold text-white">Fără prețuri standard. Fără soluții copy-paste.</p>
            </div>
            <div className="glass-card rounded-2xl p-5 text-left">
              <p className="text-sm text-slate-400">Ce păstrăm</p>
              <p className="mt-1 text-xl font-semibold text-white">Performanța ridicată și paginile deja indexate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tot ce ai nevoie ca să vinzi mai bine online</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Nu facem doar “un site frumos”. Gândim mesajul, imaginea și pașii care îl ajută pe client să te contacteze sau să cumpere.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="glass-card rounded-2xl border-white/10">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
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
              <h2 className="text-3xl font-bold text-white">De ce varianta asta funcționează mai bine</h2>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Workflow className="h-6 w-6 text-fuchsia-300" />
                <h3 className="text-2xl font-bold text-white">Ofertă construită pe nevoile proiectului</h3>
              </div>
              <p className="text-slate-300">
                Pentru un magazin online sau un proiect de promovare, costul se stabilește în funcție de numărul de produse, complexitate, integrare și volumul real de lucru. Astfel primești o propunere corectă și potrivită obiectivelor tale.
              </p>
              <Button asChild className="mt-6 rounded-full bg-fuchsia-500 text-white hover:bg-fuchsia-400">
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-950">
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
