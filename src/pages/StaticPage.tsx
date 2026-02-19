import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import aboutImage from "@/assets/saymon-shop-1.png";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const TITLES: Record<string, string> = {
  "a-propos-de-nous": "À Propos de Saymonshop",
  contacts: "Contacts",
};

export default function StaticPage() {
  const { pageSlug } = useParams();

  const title = useMemo(() => {
    if (!pageSlug) return "Page";
    return TITLES[pageSlug] ?? pageSlug.replace(/-/g, " ");
  }, [pageSlug]);

  const isAbout = pageSlug === "a-propos-de-nous";
  const isContact = pageSlug === "contacts";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 bg-background-secondary">
        <div className="container mx-auto px-4 py-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Informations</p>
          <h1 className="section-title capitalize">{title}</h1>

          <div className="mt-8 rounded-xl border border-border bg-background p-8">
            {isAbout && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-xl shadow-md border border-border">
                  <img
                    src={aboutImage}
                    alt="Saymonshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-foreground-secondary text-sm leading-relaxed">
                  <p>
                    Saymon Shop choix incontournable des photographes et vidéastes professionnels et amateurs au Maroc.
                    Spécialisés dans la vente de caméras Sony, Canon, Nikon, Leica, Fujifilm et Laowa.
                  </p>
                  <p>
                    Ainsi que d&apos;une large gamme d&apos;accessoires et d&apos;éclairage Godox et Aputure indispensables à la
                    photographie et à la vidéographie, nous avons su nous imposer comme un leader dans le domaine de
                    l&apos;e‑commerce.
                  </p>
                  <p>
                    Notre shop propose non seulement du matériel de qualité, mais offre aussi des services premium, tels que
                    la location de studio pour accompagner vos projets créatifs. Grâce à notre expertise et à notre
                    engagement envers l&apos;innovation, nous avons été honorés par le trophée Moroccan Web Award lors de
                    sa 10ème édition, consolidant ainsi notre position de référence sur le marché.
                  </p>
                </div>
              </div>
            )}

            {isContact && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-foreground-secondary leading-relaxed">
                  <p>
                    Une question sur un produit, une commande ou un projet ? Remplissez le formulaire et notre équipe vous
                    répondra dans les plus brefs délais.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold text-foreground">Téléphone :</span> +212 6.14.00.11.77
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Email :</span> contact@saymonshop.com
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Adresse :</span> Casablanca, Maroc
                    </p>
                  </div>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Merci ! Votre message a bien été envoyé (démo front uniquement).");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
                        Sujet
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-background-secondary px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary px-8"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}

            {!isAbout && !isContact && (
              <div>
                <p className="text-foreground-secondary">
                  Cette page est en cours de préparation.
                </p>
                <div className="mt-5">
                  <Link to="/" className="btn-outline inline-flex">
                    Retour à l&apos;accueil
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

