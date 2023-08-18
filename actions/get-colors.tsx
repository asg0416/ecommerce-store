import _axios from "@/axios-config";
import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
  return _axios
    .get("colors")
    .then((res) => {      
      return res.data
    })
    .catch((err) => Promise.reject(err));
};

export default getColors;
