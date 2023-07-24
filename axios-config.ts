import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface CustomResponse<T> extends AxiosResponse {
  data: T;
}

// axios 인스턴스 생성을 위한 기본 설정값
const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL, // API의 기본 주소
};

// axios 인스턴스 생성
const _axios = axios.create(axiosConfig);

// 응답 전에 실행될 인터셉터
_axios.interceptors.response.use(
  (response: AxiosResponse): CustomResponse<any> => {
    const modifiedResponse: CustomResponse<any> = {
      ...response,
      data: response.data,
    };
    return modifiedResponse;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default _axios;
