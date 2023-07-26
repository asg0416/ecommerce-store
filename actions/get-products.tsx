import _axios from "@/axios-config";
import { Product } from "@/types";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  return _axios
    .get(`products`, {
      params: {
        categoryId,
        colorId,
        sizeId,
        isFeatured,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err));
};

export default getProducts;
