import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { getOneProduct } from "../../../services/product.service";
import { Product } from "../../../libs/types";
import { currencyFormatter } from "../../../utils";
import Loading from "../../../components/Loading";

const SingleProduct = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProduct = async () => {
    const response = await getOneProduct(String(id));

    if (!response?.data) return router.back();

    setProduct(response?.data);
    setIsLoading(false);
  };
  useEffect(() => {
    handleGetProduct();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <ScrollView className="flex-1 bg-white">
    <View className="flex-1 items-start gap-4 p-2">
        <Image
          className="h-[350] w-[300] my-2 self-center"
          source={{
            uri: product?.image,
          }}
        />
        <Text className="font-bold text-3xl">{product?.title}</Text>
        <Text className="font-bold text-xl">{product?.category?.toUpperCase()}</Text>
        <Text>{product?.description}</Text>
        <Text className="text-red-500 px-2 rounded-full border border-red-500 w-fit text-4xl">
          {currencyFormatter.format(product!.price)}
        </Text>
    </View>
    </ScrollView>
  );
};

export default SingleProduct;
