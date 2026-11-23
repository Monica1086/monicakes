
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  category: string;
  products: Product[];
  showAllProducts?: boolean;
}

function ProductSection({
  title,
  category,
  products,
  showAllProducts = false,
}: ProductSectionProps) {

  const filteredProducts = products
    .filter(
      (product) =>
        product.Category === category &&
        product.isActive === true
    )
    .sort(
      (a, b) =>
        (a.sortOrder ?? 999) - (b.sortOrder ?? 999)
    );

  const displayedProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <section
      id={category.toLowerCase()}
      className="py-14 sm:py-16 md:py-20 px-5 sm:px-8 lg:px-12 xl:px-16 scroll-mt-32"
    >
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-[#B08D57] tracking-[0.3em] text-xs uppercase">
          Monicakes Collection
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#811E2B] mt-3">
          {title}
        </h2>

        <div className="w-16 h-px bg-[#B08D57] mx-auto mt-5" />
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-12">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.objectId}
                product={product}
              />
            ))}
          </div>

          {!showAllProducts && filteredProducts.length > 4 && (
            <div className="text-center mt-12">
              <Link
                to={`/${category.toLowerCase()}`}
                className="inline-block border border-[#811E2B] text-[#811E2B] px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[#811E2B] hover:text-white transition-all duration-300"
              >
                MORE
              </Link>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-400">
          Collection coming soon.
        </p>
      )}
    </section>
  );
}

export default ProductSection;
