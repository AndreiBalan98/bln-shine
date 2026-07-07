import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import blnLogo from "@/assets/bln-logo.png";
import heroCar from "@/assets/hero-car.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import {
  Phone,
  MessageCircle,
  Instagram,
  Check,
  Sparkles,
  Wrench,
  MapPin,
  Zap,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "40748433054";
const PHONE_DISPLAY = "+40 748 433 054";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Salut! Aș dori o programare pentru detailing auto.",
)}`;

const services = [
  {
    title: "Exterior",
    price: "50",
    items: [
      "Spălare caroserie",
      "Curățare jante",
      "Tratament anvelope",
      "Curățare geamuri",
    ],
  },
  {
    title: "Interior",
    price: "120",
    items: [
      "Aspirare profundă",
      "Curățare & tratament plastice",
      "Curățare cheder uși",
      "Curățare grile ventilație",
      "Tratament volan",
      "Curățare bord",
      "Parfumare interior",
    ],
  },
  {
    title: "Pachet Complet",
    price: "150",
    popular: true,
    items: ["Exterior + Interior", "Toate serviciile combinate", "Cel mai bun raport calitate/preț"],
  },
  {
    title: "Premium Detailing",
    price: "330",
    items: [
      "Extracție profundă interior",
      "Îndepărtare pete",
      "Îndepărtare mirosuri",
      "Curățare completă tapițerie",
      "Detailing exterior complet",
      "Curățare portbagaj",
      "Tratament complet interior",
    ],
  },
];

const trustPoints = [
  { icon: Wrench, title: "Echipament profesional", desc: "Produse și utilaje de top pentru rezultate premium." },
  { icon: Sparkles, title: "Atenție la detalii", desc: "Fiecare colț al mașinii tratat cu maximă precizie." },
  { icon: MapPin, title: "Servicii mobile", desc: "Venim la tine acasă sau la birou, în Botoșani." },
  { icon: Zap, title: "Rapid & de încredere", desc: "Livrăm rezultate impecabile la timp." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src={blnLogo}
              alt="BLN Detailing"
              className="h-11 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 12px rgba(212,162,74,0.35))" }}
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicii" className="hover:text-primary transition-colors">Servicii</a>
            <a href="#galerie" className="hover:text-primary transition-colors">Galerie</a>
            <a href="#de-ce-noi" className="hover:text-primary transition-colors">De ce noi</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#servicii" onClick={() => setMenuOpen(false)}>Servicii</a>
            <a href="#galerie" onClick={() => setMenuOpen(false)}>Galerie</a>
            <a href="#de-ce-noi" onClick={() => setMenuOpen(false)}>De ce noi</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold w-fit"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroCar}
          alt="Mașină premium detailing Botoșani"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-6">
              <span className="h-px w-8 bg-primary" /> Botoșani, România
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              Detailing auto <span className="text-gold-gradient">premium</span> în Botoșani
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Curățare profesională exterior & interior. Rezultate impecabile pentru mașina ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-all hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                <MessageCircle size={20} /> Programează pe WhatsApp
              </a>
              <a
                href="#servicii"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground font-semibold hover:bg-primary/10 transition-colors"
              >
                Vezi serviciile
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" /> Servicii mobile
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Sparkles size={18} className="text-primary" /> Rezultate garantate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicii" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Serviciile noastre</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
              Pachete pentru <span className="text-gold-gradient">fiecare nevoie</span>
            </h2>
            <p className="text-muted-foreground">
              De la spălare rapidă la detailing complet — alege pachetul potrivit pentru mașina ta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
                  s.popular
                    ? "border-primary bg-gradient-to-b from-primary/10 to-transparent"
                    : "border-border bg-card hover:border-primary/40"
                }`}
                style={s.popular ? { boxShadow: "var(--shadow-gold)" } : undefined}
              >
                {s.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    Cel mai popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-gold-gradient">{s.price}</span>
                  <span className="text-muted-foreground text-sm font-semibold">RON</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_LINK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                    s.popular
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "border border-primary/40 text-foreground hover:bg-primary/10"
                  }`}
                >
                  Programează
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerie" className="py-24 sm:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Rezultate</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
              Transformări <span className="text-gold-gradient">reale</span>
            </h2>
            <p className="text-muted-foreground">
              Fiecare mașină iese ca nouă. Vezi calitatea muncii noastre.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl border border-border">
                <img
                  src={src}
                  alt={`Detailing rezultat ${i + 1}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="de-ce-noi" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">De ce BLN</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Detaliu. <span className="text-gold-gradient">Precizie.</span> Perfecțiune.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING HIGHLIGHT */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            className="relative rounded-3xl p-10 sm:p-14 border border-primary/40 text-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(212,162,74,0.15), rgba(10,10,10,0.9))" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Cel mai popular</span>
            <h3 className="text-3xl sm:text-5xl font-bold mt-4 mb-4">
              Pachet Complet — <span className="text-gold-gradient">150 RON</span>
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Exterior + Interior, totul într-un singur pachet. Rezultate premium la un preț imbatabil.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-all"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <MessageCircle size={20} /> Programează acum
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Zonă & servicii mobile</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
              Venim <span className="text-gold-gradient">la tine</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Oferim servicii de detailing auto în Botoșani și împrejurimi. Ne deplasăm la tine acasă sau la birou — tu îți vezi de treabă, noi ne ocupăm de mașină.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" /> Botoșani și împrejurimi
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary" /> {PHONE_DISPLAY}
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Botoșani"
              src="https://www.google.com/maps?q=Botosani,Romania&output=embed"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.9) hue-rotate(180deg) contrast(0.85)" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
              Hai să <span className="text-gold-gradient">discutăm</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Scrie-ne pe WhatsApp pentru cel mai rapid răspuns sau completează formularul de mai jos.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors"
              >
                <MessageCircle size={20} /> Scrie pe WhatsApp
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-border hover:border-primary/40 transition-colors"
              >
                <Phone size={20} className="text-primary" /> {PHONE_DISPLAY}
              </a>
              <div className="flex gap-3 mt-2">
                <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="TikTok" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors text-sm font-bold">
                  TT
                </a>
              </div>
            </div>
          </div>

          <form
            className="p-8 rounded-2xl border border-border bg-card flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Salut BLN! Sunt ${fd.get("name")}. Mașină: ${fd.get("car")}. Serviciu: ${fd.get("service")}. Mesaj: ${fd.get("message")}`;
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
            }}
          >
            <input
              name="name"
              required
              placeholder="Nume"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/60 outline-none text-sm"
            />
            <input
              name="car"
              required
              placeholder="Tip mașină (ex: BMW Seria 3)"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/60 outline-none text-sm"
            />
            <select
              name="service"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/60 outline-none text-sm"
            >
              <option value="" disabled>Alege serviciul</option>
              <option>Exterior — 50 RON</option>
              <option>Interior — 120 RON</option>
              <option>Pachet Complet — 150 RON</option>
              <option>Premium Detailing — 330 RON</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Mesajul tău"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/60 outline-none text-sm resize-none"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-accent transition-colors"
            >
              <MessageCircle size={18} /> Trimite pe WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={blnLogo}
              alt="BLN Detailing"
              className="h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 12px rgba(212,162,74,0.35))" }}
            />
            <div>
              <p className="text-sm font-semibold">BLN Detailing</p>
              <p className="text-xs text-muted-foreground italic">Detaliu. Precizie. Perfecțiune.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors text-xs font-bold">
              TT
            </a>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/60 hover:text-primary transition-colors">
              <Phone size={16} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} BLN Detailing · Botoșani</p>
        </div>
      </footer>

      {/* STICKY WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
        style={{ boxShadow: "var(--shadow-gold)" }}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
