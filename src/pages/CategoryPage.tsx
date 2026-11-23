
import { useParams, Link } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import type { Product } from "../types/product";

interface CategoryPageProps {
  products: Product[];
  loading: boolean;
  error: string;
}

const categories: Record<string, string> = {
  cookies: "Our Cookies Collection",
  cake: "Our Cake Collection",
  pudding: "Our Pudding Collection",
  hampers: "Christmas Hampers",
};

function CategoryPage({
  products,
  loading,
  error,
}: CategoryPageProps) {
  const { category } = useParams();

  const categoryKey = category?.toLowerCase() ?? "";
  const title = categories[categoryKey];

  if (!title) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <h2 className="font-serif text-3xl text-[#811E2B]">
          Collection Not Found
        </h2>

        <Link
          to="/"
          className="mt-6 text-[#B08D57] underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="text-center px-5 mb-8">
        <p className="text-[#B08D57] tracking-[0.3em] text-xs uppercase">
          Monicakes Collection
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl text-[#811E2B] mt-3">
          {title}
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto mt-5" />
      </div>

      {loading ? (
        <div className="py-20 text-center">
          Loading MONICAKES Collection...
        </div>
      ) : error ? (
        <div className="py-20 text-center text-red-600">
          {error}
        </div>
      ) : (
        <ProductSection
          title={title}
          category={categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
          products={products}
          showAllProducts
        />
      )}

      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-block border border-[#811E2B] text-[#811E2B] px-8 py-3 text-xs tracking-[0.2em] hover:bg-[#811E2B] hover:text-white transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}

export default CategoryPage;
