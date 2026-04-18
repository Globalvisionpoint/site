'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';

export function Footer() {
  const year = 2025;

  return (
    <footer className="mt-12 border-t border-white/10 bg-slate-950/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xl text-sm text-slate-400">
              Construim site-uri de prezentare, magazine online și sisteme de promovare cu aspect premium, claritate și direcție de creștere.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <Link href="/preturi-site" className="hover:text-primary transition-colors">Servicii</Link>
            <Link href="/promovare-online" className="hover:text-primary transition-colors">Promovare</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/termeni-si-conditii" className="hover:text-primary transition-colors">Termeni și Condiții</Link>
            <Link href="/politica-de-confidentialitate" className="hover:text-primary transition-colors">Politica de Confidențialitate</Link>
            <Link href="/politica-cookie" className="hover:text-primary transition-colors">Politica Cookie</Link>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Digital-Online.ro. Toate drepturile rezervate.</p>
          <p>Consultanță inițială și ofertă personalizată în funcție de volum și obiective.</p>
        </div>
      </div>
    </footer>
  );
}
