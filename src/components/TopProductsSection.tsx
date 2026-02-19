import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function TopProductsSection() {
  const topProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Sélection</p>
            <h2 className="section-title">Top produits</h2>
          </div>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent>
            {topProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-12" />
          <CarouselNext className="-right-4 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}

