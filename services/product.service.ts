import { makeRequest } from "../utils/axios";

export const getProducts = async () => {
  try {
    const data = await makeRequest.get("/products");
    return data
  } catch (error) {
    console.log(error)
  }
};

export const getOneProduct = async (id: string) => {
    try {
        const data = await makeRequest.get(`/products/${id}`);
        return data
      } catch (error) {
        console.log(error)
      }
}