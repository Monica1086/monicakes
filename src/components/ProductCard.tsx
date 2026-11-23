
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">

      <div className="overflow-hidden bg-[#F8F5EF]">
        <img
          src={product.image}
          alt={product.ProductName}
          className="w-full aspect-[4/5] object-cover
          transition-transform duration-500
          group-hover:scale-105"
        />
      </div>

      <div className="text-center pt-5">

        <h3 className="font-serif text-xl md:text-2xl text-[#811E2B]">
          {product.ProductName}
        </h3>

        <p className="text-sm md:text-base text-gray-600 mt-3">
          {product.Description}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          {product.Size}
        </p>

        <p className="text-xl md:text-2xl font-medium text-[#B08D57] mt-4">
          Rp {product.Price.toLocaleString("id-ID")}
        </p>

      </div>
    </div>
  );
}

export default ProductCard;
