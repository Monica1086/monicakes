
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

import { getProducts } from "./services/productService";
import type { Product } from "./types/product";

// Mengatur scroll ketika berpindah halaman
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);

      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Produk belum dapat dimuat.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />

      <div className="min-h-screen bg-[#F8F5EF]">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                loading={loading}
                error={error}
              />
            }
          />

          <Route
            path="/:category"
            element={
              <CategoryPage
                products={products}
                loading={loading}
                error={error}
              />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        <Footer />

        {/* WhatsApp tampil di semua halaman */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
