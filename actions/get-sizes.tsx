import _axios from "@/axios-config";
import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
  return _axios
    .get("sizes")
    .then((res) => {      
      return res.data
    })
    .catch((err) => Promise.reject(err));
};

export default getSizes;
