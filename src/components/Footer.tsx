import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin, Headphones, Star, Truck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "@/lib/slug";
import logoSaymon from "@/assets/Partners/logosaymon.png";

const footerLinks = {
  "Liens Rapides": ["Accueil", "À propos de nous", "Contacts"],
} as const;

function footerHref(_sectionTitle: string, label: string): string {
  if (label === "Accueil") return "/";

  const pageSlugMap: Record<string, string> = {
    "À propos de nous": "a-propos-de-nous",
    "Contacts": "contacts",
  };

  return `/page/${pageSlugMap[label] ?? slugify(label)}`;
}
// Icônes SVG custom pour TikTok et LinkedIn
const TikTokIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

const LinkedInIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/saymonshop", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/shopsaymon", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@saymon_shop", label: "TikTok" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/company/saymon-shop/", label: "LinkedIn" },
];

const advantages = [
  {
    icon: Headphones,
    title: "Support 24/7",
    text: "Notre support client est disponible 24h/24 et 7j/7",
  },
  {
    icon: Star,
    title: "Satisfaction",
    text: "Le service, la qualité et le prix au rendez-vous",
  },
  {
    icon: Truck,
    title: "Livraison",
    text: "Livraison rapide disponible partout au Maroc",
  },
  {
    icon: CreditCard,
    title: "Paiement",
    text: "Vos transactions sont 100% sécurisées",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">

      {/* Bande avantages (support, satisfaction, livraison, paiement) */}
      <div className="bg-muted/60 py-10 border-b border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground">
                  {title}
                </p>
                <p className="text-xs text-foreground-muted mt-1">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoSaymon}
                alt="Saymon"
                className="h-30 md:h-30 w-40 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            <p className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-xs">
              Votre partenaire premium pour le matériel photo & vidéo professionnel.
              Qualité garantie, livraison express, support expert.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-primary" />
                <span>+212 6.14.00.11.77</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-primary" />
                <span>contact@saymonshop.com</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-primary" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={footerHref(title, link)}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Working hours */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              Horaire de travail
            </h4>
            <div className="space-y-2 text-sm text-foreground-muted">
              <p className="text-sm text-foreground-muted">Saymonshop</p>
              <p>Lundi - Samedi</p>
              <p>10H30 - 19H00</p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
              Notre Localisation
            </h4>

            <div className="rounded-xl overflow-hidden shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3403630.4333783914!2d-7.633129!3d33.58304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd660d0fee45%3A0x39cfee7144254ff3!2sSaymon%20Shop!5e0!3m2!1sfr!2sus!4v1771497739588!5m2!1sfr!2sus"
                className="w-full h-72"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-muted">
            © 2026 SAYMON. Tous droits réservés.
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center hover:text-primary transition"

              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs text-foreground-muted">
            Paiement sécurisé · Livraison Express · Retours gratuits
          </p>
        </div>
      </div>

    </footer>
  );
}