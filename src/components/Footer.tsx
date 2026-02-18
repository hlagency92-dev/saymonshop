import { Camera, Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Liens Rapides": ["Accueil", "Nouveautés", "Promotions", "Nos Marques", "Blog"],
  "Catégories": ["Caméra", "Objectifs", "Son & Audio", "Trépied & Stand", "Stabilisateur"],
  "Service Client": ["Suivi de commande", "Retours & Échanges", "FAQ", "Contact", "Garantie"],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter band */}
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground">Restez connecté à l'actu photo</h3>
            <p className="text-primary-foreground/80 text-sm mt-1">Recevez les meilleures offres et nouveautés en avant-première</p>
          </div>
          <div className="flex w-full md:w-auto gap-0 rounded-lg overflow-hidden border border-primary-dark">
            <input
              type="email"
              placeholder="Votre adresse email..."
              className="flex-1 md:w-72 bg-primary-dark/50 text-primary-foreground placeholder:text-primary-foreground/60 px-4 py-3 text-sm focus:outline-none"
            />
            <button className="bg-background text-primary font-bold px-6 py-3 text-sm uppercase tracking-wide hover:bg-muted transition-colors whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Camera size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-widest text-foreground">
                SAYMON<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-xs">
              Votre partenaire premium pour le matériel photo & vidéo professionnel. Qualité garantie, livraison express, support expert.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <Phone size={14} className="text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <Mail size={14} className="text-primary" />
                <span>contact@saymon.fr</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <MapPin size={14} className="text-primary" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground-muted hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-xs">
            © 2024 SAYMON. Tous droits réservés.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-foreground-muted hover:text-primary transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <p className="text-foreground-muted text-xs">
            Paiement sécurisé · Livraison Express · Retours gratuits
          </p>
        </div>
      </div>
    </footer>
  );
}
