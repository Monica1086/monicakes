
import axios from "axios";
import type { Product } from "../types/product";

const API_URL =
  "https://validhook-us.backendless.app/api/data/Product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL, {
      params: {
        pageSize: 100,
      },
    });

    return response.data;

  } catch (error) {
    console.error("Gagal mengambil data produk:", error);
    throw error;
  }
};
