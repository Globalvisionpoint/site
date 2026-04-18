import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează-ne pentru site de prezentare, magazin online, descrieri produse, pixeli sau promovare online. Răspundem rapid.',
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-white">
              Spune-ne ce vrei să <span className="text-primary">construim</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Dacă ai nevoie de site, magazin online, descrieri de produse, tracking, pixeli sau campanii ads, trimite-ne câteva detalii și revenim cu o direcție clară și o ofertă potrivită.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8 rounded-2xl border-white/10">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-headline text-white">Cum te putem ajuta</h2>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>• redesign site sau magazin online</li>
                  <li>• inserare produse, titluri și descrieri</li>
                  <li>• setare pixeli și tracking</li>
                  <li>• Google Ads, Meta Ads și TikTok Ads</li>
                  <li>• consultanță pentru lansare și creștere</li>
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a href="mailto:contact@digital-online.ro" className="text-lg text-slate-200 hover:text-primary transition-colors">
                    contact@digital-online.ro
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 shadow-lg">
                <a
                  href="https://wa.me/40758653550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-white p-3 rounded-full flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <img
                      src="/whatsappIco.webp"
                      alt="Contact WhatsApp Digital-Online.ro"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium text-sm">Răspuns rapid</p>
                    <p className="text-white font-bold text-xl">Chat pe WhatsApp</p>
                    <p className="text-white/90 text-sm mt-1">Ideal pentru întrebări scurte și discuții rapide</p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                <div className="p-2 bg-secondary/50 rounded-full">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <span className="text-base text-slate-300">+40 758 653 550</span>
                </div>
              </div>

              <p className="text-muted-foreground pt-4 border-t border-white/10">
                Program orientativ: Luni – Vineri, 09:00 – 18:00. Pentru proiecte urgente poți scrie direct pe WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
