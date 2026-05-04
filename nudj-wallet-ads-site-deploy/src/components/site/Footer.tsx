import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <img src={logo} alt="Nudj Ads" className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-white/80">
              Nudj Ads trasforma ogni annuncio in un canale diretto nel mobile wallet del tuo prospect. Beta privata — posti limitati.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Piattaforma</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><a href="#how" className="hover:text-white">Come Funziona</a></li>
              <li><a href="#case-study" className="hover:text-white">Case Study</a></li>
              <li><a href="#industries" className="hover:text-white">Settori</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Richiedi Accesso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Azienda</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-white">Termini d'uso</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-8 text-xs text-white/60 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Nudj Ads &mdash; ads.nudj.it &mdash; Tutti i diritti riservati.</p>
          <p>Fatto con &hearts; per i marketer.</p>
        </div>
      </div>
    </footer>
  );
}
