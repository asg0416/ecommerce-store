import _axios from "@/axios-config";
import { Category } from "@/types";

// 단일 상품 정보 가저오기
const getCategory = async (id: string): Promise<Category> => {
  return _axios
    .get(`categories/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err));
};

export default getCategory;
