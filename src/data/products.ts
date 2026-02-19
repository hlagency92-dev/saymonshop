import productCanon from "@/assets/product-canon.jpg";
import productSony from "@/assets/product-sony.jpg";
import productNikon from "@/assets/product-nikon.jpg";
import productGimbal from "@/assets/product-gimbal.jpg";
import categoryLenses from "@/assets/category-lenses.jpg";
import categoryAudio from "@/assets/category-audio.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

// Section Caméra/Canon : un seul produit (Canon 2000D), image dans public/images
export const products: Product[] = [
  {
    id: 1,
    name: "Canon 2000D + 18-55mm",
    category: "Caméra",
    brand: "Canon",
    price: 3200,
    oldPrice: 3900,
    discount: 18,
    image: "/images/nosproduits2.png",
    badge: "-18%",
    rating: 4.7,
    reviews: 0,
    description: "🔥 Canon 2000D + 18-55mm 🔥\nCapteur : CMOS 24 Mpx, APS-C (x1,6)\nViseur : Reflex\nEcran : 7,5 cm, 920 000 points, Non tactile\nSensibilité (plage ISO) : 100 – 6400 ISO\nMode vidéo : Full HD, 30 i/s\nSupport : SDHC, SDXC",
  },
  {
    id: 2,
    name: "Canon 2000D + 18-55mm + Trépied & Carte mémoire",
    category: "Caméra",
    brand: "Canon",
    price: 3500,
    oldPrice: 4400,
    discount: 20,
    image: "/images/nosproduits3.png",
    badge: "-20%",
    rating: 4.7,
    reviews: 0,
    description:
      "🔥 Pack Canon 2000D + 18-55mm + Trépied & Carte mémoire Offerts gratuitement 📸\\n" +
      "(Occasion très bon état )\\n" +
      "✔ Capteur 24 MPXL\\n" +
      "✔ Video FULL HD\\n" +
      "✔ WIFI\\n" +
      "✔ Facile à utiliser.\\n" +
      "✔ Bonne prise en main.\\n" +
      "✔ Large gamme optique.\\n" +
      "✔ Bonne gestion du flash.\\n" +
      "✔ Capteur APS-C.\\n" +
      "✔ Faible prix.\\n" +
      "👉 Trépied & Carte mémoire 32G Offerts Gratuitement",
  },


 
 
  {
  id: 3,
  name: "Canon 2000D + 55-250mm",
  category: "Caméra",
  brand: "Canon",
  price: 3500,
  oldPrice: 3700,
  discount: 20,
  image: "/images/nosproduits4.png",
  badge: "-20%",
  rating: 4.7,
  reviews: 0,
  description: "Canon 2000D + 55-250mm\n\n✔ Capteur : CMOS 24 Mpx, APS-C (x1,6)\n✔ Viseur : Reflex\n✔ Écran : 7,5 cm – 920 000 points\n✔ Sensibilité (plage ISO) : 100 – 6400 ISO\n✔ Mode vidéo : Full HD, 30 i/s\n✔ Support externe : SDHC / SDXC\n✔ Objectif inclus : 55-250mm"
},
{
  id: 4,
  name: "Canon 4000D + 18-55mm",
  category: "Caméra",
  brand: "Canon",
  price: 2900,
  oldPrice: 3500,
  discount: 17,
  image: "/images/nosproduits5.png",
  badge: "-17%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 4000D + 18-55mm 📸\n\n(Occasion en très bon état)\n✔️ Appareil photo reflex 18 Mpixels\n✔️ Vidéo Full HD\n✔️ Traitement DIGIC 4+\n✔️ Réseaux : Wi-Fi b/g/n, mini HDMI\n✔️ Écran LCD fixe 2,7\" – 230 000 points\n✔️ Viseur optique\n✔️ Sensibilité ISO : 100 – 6400 (extensible jusqu’à 12800)\n✔️ Objectif inclus : 18-55mm"
},
{
  id: 5,
  name: "Canon 4000D + 18-55mm + Trépied & Carte mémoire",
  category: "Caméra",
  brand: "Canon",
  price: 3200,
  oldPrice: 3900,
  discount: 18,
  image: "/images/nosproduits6.png",
  badge: "-18%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 4000D + 18-55mm + Trépied & Carte mémoire 📸\n\n(Occasion en très bon état)\n✔️ Appareil photo reflex 18 Mpixels\n✔️ Vidéo Full HD\n✔️ Réseaux : Wi-Fi b/g/n, mini HDMI\n✔️ Écran LCD fixe 2,7\" – 230 000 points\n✔️ Viseur optique\n✔️ Sensibilité ISO : 100 – 6400 (extensible jusqu’à 12800)\n✔️ Objectif inclus : 18-55mm\n👉 Trépied + Carte mémoire OFFERTS gratuitement 🎁"
},
{
  id: 6,
  name: "Canon 4000D + 55-250mm (occasion)",
  category: "Caméra",
  brand: "Canon",
  price: 4000,
  oldPrice: 4300,
  discount: 7,
  image: "/images/nosproduits7.png",
  badge: "-7%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 4000D 📸\n\n(Occasion en très bon état)\n✔️ Appareil photo reflex 18 Mpixels\n✔️ Vidéo : Full HD\n✔️ Traitement : DIGIC 4+\n✔️ Réseaux : Wi-Fi b/g/n, mini HDMI\n✔️ Écran LCD fixe 2,7\" – 230 000 points\n✔️ Viseur optique\n✔️ Sensibilité ISO : 100 – 6400 (extensible jusqu’à 12800)\n\n🔥 Canon EF-S 55-250mm 📸\n(Occasion très bon état)\n✔️ Monture : Canon EF-S\n✔️ Stabilisation optique : Oui\n✔️ Autofocus : Oui\n✔️ Distance minimale de mise au point : 1,1 m"
},
{
  id: 7,
  name: "Canon 600D + 18-55mm + Trépied & Carte mémoire",
  category: "Caméra",
  brand: "Canon",
  price: 3700,
  oldPrice: 4500,
  discount: 18,
  image: "/images/nosproduits8.png",
  badge: "-18%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Pack Canon 600D + 18-55mm + Trépied & Carte mémoire Offerts gratuitement 📸\n\n(Occasion très bon état)\n✔ Capteur : CMOS APS-C 18 MPixels\n✔ Vidéos EOS Full HD\n✔ Large plage autofocus (AF)\n✔ Écran orientable 3 pouces\n✔ Effets de filtres créatifs\n✔ Contrôle de flash sans fil intégré\n✔ Compatible avec l’ensemble des objectifs EF et EF-S\n👉 Trépied & Carte mémoire 32G Offerts Gratuitement 🎁"
},
{
  id: 8,
  name: "Canon 600D + EF-S 18-55mm IS II",
  category: "Caméra",
  brand: "Canon",
  price: 3400,
  oldPrice: 4000,
  discount: 15,
  image: "/images/nosproduits9.png",
  badge: "-15%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 600D + EF-S 18-55mm IS II 📸\n\n(Occasion en très bon état)\n✔ Capteur : CMOS APS-C 18 MPixels\n✔ Vidéos EOS Full HD\n✔ Large plage autofocus (AF)\n✔ Écran orientable 3 pouces\n✔ Effets de filtres créatifs\n✔ Contrôle de flash sans fil intégré\n✔ Compatible avec l’ensemble des objectifs EF et EF-S\n✔ Objectif inclus : 18-55mm"
},
{
  id: 9,
  name: "Canon 600D + 18-135mm STM",
  category: "Caméra",
  brand: "Canon",
  price: 4300,
  oldPrice: 4500,
  discount: 4,
  image: "/images/nosproduits10.png",
  badge: "-4%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 600D + 18-135mm STM 📸\n\n(Occasion très bon état)\n✔ Capteur : CMOS APS-C 18 MPixels\n✔ Vidéos EOS Full HD\n✔ Large plage autofocus (AF)\n✔ Écran orientable 3 pouces\n✔ Effets de filtres créatifs\n✔ Contrôle de flash sans fil intégré\n✔ Compatible avec l’ensemble des objectifs EF et EF-S\n✔ Objectif inclus : 18-135mm"
},
{
  id: 10,
  name: "Canon 600D + 18-55mm + Grip (occasion)",
  category: "Caméra",
  brand: "Canon",
  price: 3400,
  oldPrice: 4500,
  discount: 13,
  image: "/images/nosproduits11.png",
  badge: "-13%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 600D + 18-55mm + Grip 📸\n\n(Occasion en très bon état)\n✔ Capteur : CMOS APS-C 18 MPixels\n✔ Vidéos EOS Full HD\n✔ Large plage autofocus (AF)\n✔ Écran orientable 3 pouces\n✔ Effets de filtres créatifs\n✔ Contrôle de flash sans fil intégré\n✔ Compatible avec l’ensemble des objectifs EF et EF-S\n✔ Objectif inclus : 18-55mm\n✔ Grip inclus"
},
{
  id: 11,
  name: "Canon 600D + 55-250mm (occasion)",
  category: "Caméra",
  brand: "Canon",
  price: 4100,
  oldPrice: 4300,
  discount: 5,
  image: "/images/nosproduits12.png",
  badge: "-5%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon 600D + 55-250mm 📸\n\n(Occasion très bon état)\n✔ Capteur : CMOS APS-C 18 MPixels\n✔ Vidéos EOS Full HD\n✔ Large plage autofocus (AF)\n✔ Écran orientable 3 pouces\n✔ Effets de filtres créatifs\n✔ Contrôle de flash sans fil intégré\n✔ Compatible avec l’ensemble des objectifs EF et EF-S\n✔ Objectif inclus : 55-250mm"
},
{
  id: 12,
  name: "Canon EOS R5",
  category: "Caméra",
  brand: "Canon",
  price: 22000,
  oldPrice: 27000,
  discount: 19,
  image: "/images/nosproduits13.png",
  badge: "-19%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon EOS R5 📸\n\n(Occasion en très bon état)\n✔ Capteur CMOS 45 MPixels : Capturez des images d’une netteté exceptionnelle\n✔ Prise de vue en continu jusqu’à 20 i/s : Figez l’action avec précision\n✔ Vidéo RAW 8K interne plein format : Résolution vidéo incomparable\n✔ Vidéo 4K/120P plein format : Vidéos fluides et détaillées\n✔ Stabilisation d’image jusqu’à 8 vitesses : Images nettes même en mouvement\n✔ Plage ISO 100 – 51200 : Détails remarquables dans toutes les conditions d’éclairage\n✔ 5940 positions d’autofocus : Verrouillage rapide et précis du sujet\n✔ Connexions Wi-Fi et Bluetooth intégrées : Partage facile de vos fichiers\n✔ Deux logements pour cartes mémoire CFexpress et SD : Capacité étendue et sécurité accrue"
},
{
  id: 13,
  name: "Canon EOS R6 Mark II + Objectif RF 24-105mm F4 STM",
  category: "Caméra",
  brand: "Canon",
  price: 28000,
  oldPrice: 30000,
  discount: 7,
  image: "/images/nosproduits14.png",
  badge: "-7%",
  rating: 4.7,
  reviews: 0,
  description: "🔥  EOS R6 Mark II + Objectif RF 24-105mm F4 STM 📸\n\n(Occasion en très bon état)\n✔ Capteur CMOS plein format 24,2 MP\n✔ Processeur DIGIC X pour des performances rapides et précises\n✔ Vidéo UHD 4K jusqu’à 60p en 10 bits\n✔ Stabilisation d’image sur 5 axes pour des vidéos stables en mouvement\n✔ Autofocus avancé avec suivi intelligent des sujets\n✔ Viseur électronique haute résolution\n✔ Écran tactile LCD orientable et polyvalent\n✔ Connexions : USB-C, micro-HDMI, Bluetooth, Wi-Fi\n✔ Entrées casque et micro 3,5 mm\n✔ Objectif RF 24-105mm F4 STM inclus\n✔ Ouverture constante et revêtement Super Spectra pour une excellente qualité d’image\n👉 Un appareil photo hybride polyvalent, idéal pour les créateurs photo & vidéo"
},
{
  id: 14,
  name: "Canon R10 + RF-S 18-45mm IS STM (Neuf)",
  category: "Caméra",
  brand: "Canon",
  price: 13000,
  oldPrice: 11500,
  discount: 12,
  image: "/images/nosproduits15.png",
  badge: "-12%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon R10 + RF-S 18-45mm IS STM 📸\n\n(Neuf)\n\n👉 Canon EOS R10 :\n✔ Appareil photo hybride APS-C\n✔ Capteur CMOS 24,2 MP\n✔ Processeur DIGIC X\n✔ Autofocus Dual Pixel II : détection des personnes, animaux et véhicules\n✔ 651 zones AF en sélection automatique\n✔ Mise au point en basse lumière jusqu’à -4 IL\n✔ Fichiers RAW 14 bits et HEIF 10 bits\n✔ Mode rafale : 23 i/s (obturateur électronique), 15 i/s (obturateur mécanique)\n✔ Sensibilité ISO : 32 000 (extensible jusqu’à 51 200)\n✔ Vidéo 4K 30p 10 bits / 4K 60p (recadré) / Full HD 120 i/s\n✔ Écran LCD tactile 2,95\" orientable avec traitement anti-traces\n✔ Viseur électronique OLED\n✔ Wi-Fi et Bluetooth\n✔ Diffusion en direct sur YouTube via image.canon (HDMI 4K/FHD 60p)\n✔ Emplacement carte SD/SDHC/SDXC UHS-II\n\n👉 Objectif Canon RF-S 18-45mm IS STM :\n✔ Zoom APS-C pour hybride\n✔ Focale 18-45 mm (29-72 mm équivalent 35 mm)\n✔ Ouverture f/4.5-6.3\n✔ Stabilisateur d’image 4 vitesses\n✔ Distance de mise au point minimale : 20 cm (AF) / 15 cm (MF)\n✔ Moteur STM pour mise au point silencieuse\n✔ Construction : 7 éléments en 7 groupes\n✔ Traitement Super Spectra contre reflets et images fantômes\n✔ Diaphragme circulaire 7 lamelles"
},
{
  id: 15,
  name: "Canon R50 + Objectif RF 18-45mm STM",
  category: "Caméra",
  brand: "Canon",
  price: 12500,
  oldPrice: 11500,
  discount: 8,
  image: "/images/nosproduits16.png",
  badge: "-8%",
  rating: 4.7,
  reviews: 0,
  description: "🔥 Canon R50 + Objectif RF 18-45mm STM 📸\n\n(Neuf)\n\n👉 Canon R50 :\n✔ Capteur APS-C 24,2 MP\n✔ Sensibilité jusqu’à 32 000 ISO\n✔ Autofocus à apprentissage profond avec détection et suivi de scène\n✔ Détection personnes, animaux et véhicules (œil, visage, tête, corps)\n✔ Prise de vue continue haute vitesse : 12 i/s mécanique, 15 i/s électronique\n✔ Suivi de l’exposition et autofocus complet\n✔ Assistant panorama & panoramique\n✔ Focus bracketing + stacking interne\n✔ Vidéo 4K 30p avec suréchantillonnage et sans recadrage\n✔ Assistants de prise de vue créative avancés\n\n👉 Objectif RF 18-45mm STM :\n✔ Ouverture maximale : f/4,5-6,3\n✔ Ouverture minimale : f/22 à 18 mm / f/32 à 45 mm\n✔ Mise au point minimale : 0,2 m (18 mm), 0,3 m (35 mm), 0,35 m (45 mm)\n✔ Grandissement maximal : 0,14x (18 mm), 0,15x (35 mm), 0,16x (45 mm)"
},



















];

export const categories: Category[] = [
  { id: "camera", name: "Caméra", image: productCanon, count: products.filter((p) => p.category === "Caméra").length },
  { id: "objectifs", name: "Objectifs", image: categoryLenses, count: 48 },
  { id: "audio", name: "Son & Audio", image: categoryAudio, count: 32 },
  { id: "accessoires", name: "Accessoires", image: categoryAccessories, count: 65 },
];

export const brands = ["Tous", "Canon", "Sony", "Nikon", "Objectifs", "DJI"];
