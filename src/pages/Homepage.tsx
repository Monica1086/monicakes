
import ProductSection from "../components/ProductSection";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import type { Product } from "../types/product";

interface HomePageProps {
  products: Product[];
  loading: boolean;
  error: string;
}

function HomePage({ products, loading, error }: HomePageProps) {
  return (
    <>
      <Hero />
      <About />

      {loading ? (
        <div className="py-20 text-center">
          Loading MONICAKES Collection...
        </div>
      ) : error ? (
        <div className="py-20 text-center text-red-600">
          {error}
        </div>
      ) : (
        <>
          <ProductSection
            title="Our Cookies Collection"
            category="Cookies"
            products={products}
          />

          <ProductSection
            title="Our Pudding Collection"
            category="Pudding"
            products={products}
          />

          <ProductSection
            title="Our Cake Collection"
            category="Cake"
            products={products}
          />

          <ProductSection
            title="Christmas Hampers"
            category="Hampers"
            products={products}
          />
        </>
      )}

      <Contact />
    </>
  );
}

export default HomePage;
