import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';
import Head from 'next/head';

const faqItems = [
  {
    question: 'Ce servicii oferiți concret?',
    answer:
      'Realizăm site-uri de prezentare, magazine online, pagini de ofertă, descrieri și titluri pentru produse, inserare produse, tracking, instalare pixeli și campanii Google, Meta sau TikTok Ads.',
  },
  {
    question: 'Afișați prețurile pe site?',
    answer:
      'Nu. Fiecare proiect are cerințe diferite, iar costul depinde de numărul de pagini, produse, integrări și volumul de lucru. De aceea oferim estimări personalizate după o discuție scurtă.',
  },
  {
    question: 'Puteți păstra paginile deja indexate în Google?',
    answer:
      'Da. Când refacem designul, păstrăm structura importantă și rutele indexate, astfel încât să nu afectăm inutil prezența deja câștigată în Google.',
  },
  {
    question: 'Vă ocupați și de produsele din magazin?',
    answer:
      'Da. Putem insera produse, organiza categorii, scrie titluri și descrieri, corecta informațiile și face prezentarea mai clară pentru client.',
  },
  {
    question: 'Instalați Google Pixel, Meta Pixel și TikTok Pixel?',
    answer:
      'Da. Configurăm tracking-ul de bază, evenimentele importante și verificăm dacă măsurarea funcționează corect pentru campanii și analiză.',
  },
  {
    question: 'Gestionați și campanii ads?',
    answer:
      'Da. Putem crea, gestiona și optimiza campanii pe Google, Meta și TikTok, în funcție de obiectivele afacerii și bugetul disponibil.',
  },
  {
    question: 'Oferiți consultanță pentru cine vrea să deschidă un magazin online?',
    answer:
      'Da. Oferim ghidare practică privind pașii de lansare, structură, produse, imagine, promovare și organizare. Pentru situații juridice sau fiscale specifice, recomandăm și apelarea la un specialist dedicat.',
  },
  {
    question: 'Site-ul rămâne rapid și optimizat pentru mobil?',
    answer:
      'Da. Lucrăm cu accent pe performanță, experiență bună pe telefon și cod curat, astfel încât site-ul să rămână rapid și plăcut de folosit.',
  },
  {
    question: 'Puteți ajuta și cu imagini, logo sau materiale promo?',
    answer:
      'Da. Putem ajusta vizualuri de produs, elemente grafice, logo, bannere și materiale care susțin imaginea magazinului sau a brandului.',
  },
];

export const metadata: Metadata = {
  title: 'Întrebări frecvente',
  description: 'Răspunsuri clare despre site-uri, magazine online, pixeli, campanii ads și consultanță pentru e-commerce.',
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      </Head>
      <div className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Întrebări frecvente, <span className="text-primary">răspunsuri directe</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Am adunat cele mai importante lucruri pe care clienții vor să le știe înainte să înceapă un proiect.
            </p>
          </div>

          <div className="max-w-3xl mx-auto glass-card rounded-2xl border-white/10 px-4 sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
