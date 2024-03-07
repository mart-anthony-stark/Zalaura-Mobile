import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../libs/types";
import { router } from "expo-router";
import { currencyFormatter } from "../utils";

type CardProps = {
  item: Product;
};

const Card = ({ item }: CardProps) => {
  return (
    <SafeAreaView className="flex-row gap-4 items-center px-2 my-4">
      <View className="flex-1">

      <Image
        className="h-48 w-40 my-2"
        source={{
          uri: item.image,
        }}
        />
        </View>

      <View className="items-start flex-1">
        <Text className="text-lg">{item.title}</Text>
        <Text>{item.category}</Text>
        <Text>{currencyFormatter.format(item.price)}</Text>

        <TouchableOpacity
          onPress={() => router.navigate({ pathname: "/products/[id]", params: {id: item.id} })}
        >
          <View className="bg-black p-2 mt-2">
            <Text className="text-white">View Item</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Card;
