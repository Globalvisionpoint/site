'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Briefcase, HelpCircle, Home, Mail, Menu, Rocket, Tag } from 'lucide-react';
import { Logo } from '@/components/Logo';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Acasă', icon: Home },
  { href: '/preturi-site', label: 'Servicii', icon: Tag },
  { href: '/promovare-online', label: 'Promovare', icon: Rocket },
  { href: '/portofoliu', label: 'Soluții', icon: Briefcase },
  { href: '/faq', label: 'Întrebări', icon: HelpCircle },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" suppressHydrationWarning={true}>
      <div className="border-b border-white/10 bg-[linear-gradient(to_bottom,rgba(245,186,73,0.30)_0%,rgba(245,186,73,0.18)_45%,rgba(8,17,26,0.92)_45%,rgba(8,17,26,0.88)_100%)] backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden lg:inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              site-uri • e-commerce • ads
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-slate-300'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === '/contact' ? 'text-primary' : 'text-slate-300'
                )}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </nav>

            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link href="/contact">Solicită ofertă</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Link href="https://wa.me/40758653550" target="_blank" rel="noopener noreferrer">
                <img src="/whatsappIco.webp" alt="WhatsApp" className="h-7 w-7" />
                <span className="sr-only">Contact WhatsApp</span>
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button size="icon" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Deschide meniul</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-white/10 bg-slate-950/95 text-white">
                <div className="mt-6 flex flex-col gap-6">
                  <div className="border-b border-white/10 pb-4">
                    <Logo />
                    <SheetTitle className="sr-only">Meniu principal</SheetTitle>
                    <SheetDescription className="mt-2 text-slate-400">
                      Navighează rapid către paginile importante.
                    </SheetDescription>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {[...navLinks, { href: '/contact', label: 'Contact', icon: Mail }].map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-4 py-3 transition-colors',
                            pathname === link.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-slate-200 hover:bg-white/5'
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <a
                    href="https://wa.me/40758653550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-green-500 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-green-600"
                  >
                    Scrie-ne pe WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
