import logo from "@/assets/logo.png";

export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light";
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Nudj Ads" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how" className={`text-sm font-medium ${isLight ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>Come Funziona</a>
          <a href="#case-study" className={`text-sm font-medium ${isLight ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>Case Study</a>
          <a href="#industries" className={`text-sm font-medium ${isLight ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>Settori</a>
          <a href="#faq" className={`text-sm font-medium ${isLight ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>FAQ</a>
          <a href="#contact" className={`text-sm font-medium ${isLight ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>Contatti</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className={`hidden text-xs font-medium uppercase tracking-wider md:inline ${isLight ? "text-white/70" : "text-muted-foreground"}`}>Beta privata</span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-coral-foreground shadow-card transition-transform hover:scale-105"
          >
            Richiedi Accesso
          </a>
        </div>
      </div>
    </header>
  );
}
