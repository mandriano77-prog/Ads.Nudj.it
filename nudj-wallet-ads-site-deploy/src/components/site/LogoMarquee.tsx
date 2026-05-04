import { Sparkles } from "lucide-react";

export function LogoMarquee() {
  return (
    <section className="border-y border-border bg-background py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-coral/20 text-coral">
          <Sparkles className="h-4 w-4" />
        </span>
        <p className="text-center text-sm font-semibold tracking-wide text-muted-foreground">
          Beta privata — <span className="text-brand-blue">posti limitati</span> per i primi brand che vogliono testare il futuro del mobile marketing.
        </p>
      </div>
    </section>
  );
}
