import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { products } from "../../../libs/data";

const Product = () => {
  const { slug } = useLocalSearchParams();
  const product = products.find((product) => product.slug === slug);

  return (
    <View className="bg-white flex-1 gap-2 items-start p-4">
      <Image
        className="h-1/2 w-80 my-2"
        source={{
          uri: product?.image,
        }}
      />
      <Text className="font-bold text-3xl">{product?.brand}</Text>
      <Text>{product?.description}</Text>
      <Text className="text-red-500 px-2 rounded-full border border-red-500 w-fit text-4xl">
        Php {product?.price}
      </Text>
    </View>
  );
};

export default Product;
