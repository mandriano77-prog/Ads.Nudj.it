import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "I miei clienti devono scaricare un'app?",
    a: "No, mai. I pass Nudj Wallet Ads si salvano direttamente in Apple Wallet (iOS) o Google Wallet (Android), già preinstallati su qualunque smartphone. Il cliente apre il pass con un tap, senza alcun download né registrazione obbligatoria.",
  },
  {
    q: "Quanto è veloce l'integrazione con il mio sito o CRM?",
    a: "Nella maggior parte dei casi il setup richiede meno di un giorno. Forniamo SmartLink pronti all'uso, snippet HTML, API REST e integrazioni native con Shopify, Hubspot, Salesforce, Klaviyo e Mailchimp. Il nostro team di onboarding ti accompagna in ogni fase.",
  },
  {
    q: "Come funziona la geolocalizzazione delle notifiche?",
    a: "Definisci uno o più punti di interesse (negozi, eventi, fiere) con un raggio personalizzabile. Quando un utente che ha salvato il pass entra nell'area, riceve automaticamente una notifica push sul lock screen — anche con il telefono bloccato e senza aprire alcuna app.",
  },
  {
    q: "I dati dei clienti sono al sicuro? Siete GDPR compliant?",
    a: "Assolutamente sì. Nudj Wallet Ads è completamente conforme al GDPR e alle normative europee sulla privacy. I dati sono ospitati su server certificati ISO 27001 in Europa, cifrati at rest e in transit. Non vendiamo né condividiamo mai i dati dei tuoi clienti con terze parti.",
  },
  {
    q: "Posso misurare il ROI delle mie campagne?",
    a: "Sì, e in modo molto più preciso rispetto al digital advertising tradizionale. Ogni pass ha un ID univoco che traccia: distribuzione, salvataggio, redenzione (anche offline tramite QR), notifiche aperte e ricavi attribuiti. Esporti tutto in CSV o lo invii al tuo BI tramite API.",
  },
  {
    q: "Cosa succede se voglio cancellare un'offerta o disattivare un pass?",
    a: "Puoi aggiornare contenuti, immagini, offerte e date di scadenza in tempo reale per tutti i pass distribuiti — anche quelli già nel wallet del cliente. Puoi anche disattivare istantaneamente pass singoli o intere campagne dalla dashboard.",
  },
  {
    q: "Funziona anche per il marketing offline (volantini, affissioni, TV)?",
    a: "È uno dei nostri punti di forza. Ogni canale offline diventa misurabile: stampi un QR su un volantino, in un negozio, su uno spot TV, e tracci esattamente quanti utenti hanno salvato il pass, da dove e con quale tasso di conversione successivo.",
  },
  {
    q: "Quanto costa al di sopra del piano Growth?",
    a: "I piani Enterprise sono personalizzati in base a volumi, integrazioni richieste e SLA. Contattaci per una proposta su misura: tipicamente i nostri clienti enterprise vedono un ROI positivo entro le prime 6 settimane di attivazione.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Domande frequenti</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground text-balance sm:text-5xl">
            Tutto quello che vuoi <span className="italic text-brand-blue">sapere</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Risposte alle domande più comuni su Nudj Wallet Ads, mobile wallet marketing, privacy e integrazioni.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Hai un'altra domanda?{" "}
          <a href="#contact" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
            Scrivici qui
          </a>
          , ti rispondiamo entro 24 ore.
        </p>
      </div>
    </section>
  );
}
