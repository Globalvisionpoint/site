'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-12 border-t border-white/10 bg-slate-950/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xl text-sm text-slate-400">
              Construim site-uri de prezentare, magazine online și sisteme de promovare care arată profesionist și sunt gata de creștere.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <Link href="/preturi-site" className="hover:text-cyan-300 transition-colors">Servicii web</Link>
            <Link href="/promovare-online" className="hover:text-cyan-300 transition-colors">Promovare online</Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">Contact</Link>
            <Link href="/termeni-si-conditii" className="hover:text-cyan-300 transition-colors">Termeni și Condiții</Link>
            <Link href="/politica-de-confidentialitate" className="hover:text-cyan-300 transition-colors">Politica de Confidențialitate</Link>
            <Link href="/politica-cookie" className="hover:text-cyan-300 transition-colors">Politica Cookie</Link>
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
