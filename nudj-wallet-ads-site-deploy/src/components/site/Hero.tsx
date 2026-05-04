import heroPhone from "@/assets/hero-phone.jpg";
import { Check, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pb-32 pt-36 text-white lg:pb-48 lg:pt-44">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Beta privata — Accesso anticipato
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
            Dall'ADV al wallet.
            <span className="mt-2 block italic text-white/95">Un canale diretto, gratuito, per sempre.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            Trasforma ogni annuncio — online, in store o cartaceo — in un pass nel mobile wallet del prospect. Da quel momento comunichi tu, quando vuoi: notifiche di prossimità, temporali o on-demand. Illimitate e <strong className="text-white">senza costi aggiuntivi</strong>. Niente app, niente intermediari.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
            >
              Richiedi Accesso alla Beta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue-deep"
            >
              Prenota una Demo
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/95">
            {["Push illimitate gratis", "Canale 1:1 proprietario", "Niente app da installare", "Attribuzione completa"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="float-y">
            <img
              src={heroPhone}
              alt="iPhone con un pass mobile wallet con coupon 10% di sconto"
              width={1024}
              height={1024}
              className="w-full max-w-[520px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
