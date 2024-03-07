import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../libs/data";
import { router } from "expo-router";

type CardProps = {
  item: Product;
};

const Card = ({ item }: CardProps) => {
  return (
    <View className="flex-row gap-4 items-center px-4">
      <Image
        className="h-40 w-32 my-2"
        source={{
          uri: item.image,
        }}
      />

      <View className="items-start">
        <Text className="text-xl">{item.brand}</Text>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>

        <TouchableOpacity
          onPress={() => router.navigate({ pathname: "/products/[slug]", params: {slug: item.slug} })}
        >
          <View className="bg-black p-2 mt-2">
            <Text className="text-white">View Item</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
