import _axios from "@/axios-config";
import { Billboard } from "@/types";

const getBillboard = async (id: string): Promise<Billboard> => {
  return _axios
    .get(`billboards/${id}`)
    .then((res) => {      
      return res.data
    })
    .catch((err) => Promise.reject(err));
};

export default getBillboard;
