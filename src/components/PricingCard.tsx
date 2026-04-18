import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type PricingCardProps = {
  title: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  recommended?: boolean;
  idealFor?: string;
  className?: string;
  ctaClassName?: string;
};

export function PricingCard({
  title,
  price,
  priceSuffix,
  description,
  features,
  ctaText,
  ctaLink,
  recommended = false,
  idealFor,
  className = "",
  ctaClassName = ""
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "group flex flex-col rounded-[28px] border border-white/10 bg-slate-950/45 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
        recommended ? "ring-1 ring-primary/30" : "",
        className
      )}
    >
      <CardHeader className="text-center">
        <div className="mb-4 flex justify-center">
          {recommended ? (
            <Badge className="rounded-full bg-primary/15 text-primary hover:bg-primary/15">Recomandat</Badge>
          ) : (
            <Badge variant="secondary" className="rounded-full bg-white/5 text-slate-300 hover:bg-white/5">Ofertă personalizată</Badge>
          )}
        </div>
        <CardTitle className="text-2xl font-headline font-bold text-white">{title}</CardTitle>
        {!idealFor && <CardDescription className="text-slate-300">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6 rounded-2xl border border-primary/15 bg-primary/10 px-4 py-4 text-center">
          <span className="text-2xl font-bold text-primary">Contact pentru ofertă personalizată</span>
          <span className="mt-1 block text-sm text-slate-300">Stabilim varianta potrivită după cerințe și volum</span>
        </div>
        {idealFor && (
          <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-300">
            <p className="font-bold text-white">Ideal pentru:</p>
            <p>{idealFor}</p>
          </div>
        )}
        <ul className="space-y-3 text-slate-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={cn("w-full rounded-full bg-primary text-primary-foreground hover:opacity-90", ctaClassName)} size="lg">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
