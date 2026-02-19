import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import HeroSlider from "@/components/HeroSlider";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import TopProductsSection from "@/components/TopProductsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <SearchBar />
      <main className="flex-1">
        <HeroSlider />
        <CategorySection />
        <ProductGrid />
        <TopProductsSection />
        <PartnersSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
