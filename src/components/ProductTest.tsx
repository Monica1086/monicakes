
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";

function ProductTest() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Gagal mengambil produk dari Backendless");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading produk...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        MONICAKES - Product Test
      </h1>

      <p className="mb-4">
        Total produk: {products.length}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.objectId}>
            <img
              src={product.image}
              alt={product.ProductName}
              className="w-full aspect-square object-cover rounded-lg"
            />

            <h2 className="font-semibold mt-2">
              {product.ProductName}
            </h2>

            <p>{product.Category}</p>

            <p>
              Rp {product.Price.toLocaleString("id-ID")}
            </p>

            <p className="text-sm text-gray-500">
              {product.Size}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTest;
