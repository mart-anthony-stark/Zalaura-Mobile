import { ToastAndroid } from "react-native";
import { makeRequest } from "../utils/axios";

export const getProducts = async () => {
  try {
    const data = await makeRequest.get("/products");
    return data;
  } catch (error) {
    ToastAndroid.show("Somewthing went wrong!", ToastAndroid.BOTTOM);
    console.log(error);
  }
};

export const getOneProduct = async (id: string) => {
  try {
    const data = await makeRequest.get(`/products/${id}`);
    return data;
  } catch (error) {
    ToastAndroid.show("Somewthing went wrong!", ToastAndroid.BOTTOM);
    console.log(error);
  }
};
