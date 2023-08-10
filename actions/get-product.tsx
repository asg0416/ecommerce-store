import _axios from "@/axios-config";
import { Product } from "@/types";

// 단일 상품 정보 가저오기
const getProduct = async (id: string): Promise<Product> => {
  return _axios
    .get(`products/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err));
};

export default getProduct;
