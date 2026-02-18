import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCameraImg from "@/assets/hero-camera.jpg";

const slides = [
  {
    id: 1,
    brand: "NIKON",
    title: "Capturez l'Instant Parfait",
    subtitle: "Boîtiers mirrorless & reflex premium avec livraison express",
    cta: "Découvrir les Caméras",
    badge: "Nouveautés 2024",
    image: heroCameraImg,
  },
  {
    id: 2,
    brand: "SONY",
    title: "La Précision à l'État Pur",
    subtitle: "Objectifs professionnels pour chaque discipline photographique",
    cta: "Voir les Objectifs",
    badge: "Promo -20%",
    image: heroCameraImg,
  },
  {
    id: 3,
    brand: "CANON",
    title: "Votre Vision Sans Limite",
    subtitle: "Stabilisateurs et accessoires pour la vidéo professionnelle",
    cta: "Explorer les Accessoires",
    badge: "Stock Limité",
    image: heroCameraImg,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(420px, 65vh, 680px)" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      {/* Red glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />

      {/* Giant watermark brand text */}
      <div className="hero-text-bg">
        <span
          className="text-[15vw] font-black tracking-widest select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.03)", lineHeight: 1 }}
        >
          {slide.brand}
        </span>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-xl" key={current}>
          {/* Badge */}
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded mb-4 uppercase tracking-widest animate-fade-up">
            {slide.badge}
          </span>

          {/* Brand */}
          <p
            className="text-5xl md:text-7xl font-black tracking-widest text-foreground/10 leading-none mb-2 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            {slide.brand}
          </p>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-foreground-secondary text-base md:text-lg mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {slide.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <button className="btn-primary shadow-glow-red">
              {slide.cta}
            </button>
            <button className="btn-outline">
              Voir les Offres
            </button>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 border border-border hover:border-primary hover:text-primary text-foreground-secondary flex items-center justify-center transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 border border-border hover:border-primary hover:text-primary text-foreground-secondary flex items-center justify-center transition-all backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
