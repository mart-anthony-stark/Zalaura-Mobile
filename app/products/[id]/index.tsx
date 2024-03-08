import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { getOneProduct } from "../../../services/product.service";
import { Product } from "../../../libs/types";
import { applyDiscount, currencyFormatter } from "../../../utils";
import Loading from "../../../components/Loading";

const SingleProduct = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handleItemCount = (operator: "add" | "subtract"): void => {
    if (operator === "add") setItemCount(itemCount + 1);
    else if (operator === "subtract" && itemCount > 0)
      setItemCount(itemCount - 1);
  };

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
          className="h-[350] w-[300] mb-2 self-center"
          source={{
            uri: product?.image,
          }}
        />
        <Text className="font-bold text-3xl">{product?.title}</Text>
        <Text className="font-bold text-xl">
          {product?.category?.toUpperCase()}
        </Text>

        <View className="self-stretch flex-row justify-between">
          <View>
            <Text className="text-red-500 mr-8 px-2 rounded-full border border-red-500 w-fit text-2xl">
              {currencyFormatter.format(applyDiscount(product!.price, 0.2))}
            </Text>
            <Text className="text-gray-500 line-through mr-8 px-2 rounded-full w-fit text-lg">
              {currencyFormatter.format(product!.price)}
            </Text>
          </View>

          <View className="">
            <View className="flex-row">
              <TouchableHighlight onPress={() => handleItemCount("subtract")}>
                <View className="border bg-white w-12 h-8 justify-center items-center">
                  <Text className="text-4xl">-</Text>
                </View>
              </TouchableHighlight>

              <Text className="text-2xl mx-4">{itemCount}</Text>

              <TouchableHighlight onPress={() => handleItemCount("add")}>
                <View className="border bg-white w-12 h-8 justify-center items-center">
                  <Text className="text-2xl">+</Text>
                </View>
              </TouchableHighlight>
            </View>

            <TouchableOpacity>
              <View className="bg-black mt-2 p-2 items-center">
                <Text className="text-white">Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text>{product?.description}</Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          repudiandae recusandae illo doloribus nesciunt autem facere rerum odit
          quam officiis iste, ratione, alias quibusdam debitis molestiae cumque
          provident modi a. Dolor, voluptatem rem? Eius expedita voluptatibus
          hic similique, excepturi tempora.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;
