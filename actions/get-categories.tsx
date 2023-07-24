import _axios from "@/axios-config";
import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
  return _axios
    .get("categories")
    .then((res) => {      
      return res.data
    })
    .catch((err) => Promise.reject(err));
};

export default getCategories;
