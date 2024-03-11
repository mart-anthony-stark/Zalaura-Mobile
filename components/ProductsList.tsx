import { FlatList, Text, View } from "react-native";
import { Product } from "../libs/types";
import Card from "./Card";

const ProductsList = ({ products }: { products: Product[] }) => {
  return products.length === 0 ? (
    <View className="justify-center items-center">
      <Text className="text-2xl text-gray-400">No items to show.</Text>
    </View>
  ) : (
    <FlatList
      contentContainerStyle={{ paddingBottom: 100 }}
      data={products}
      renderItem={({ item, index }) => <Card item={item} />}
    />
  );
};

export default ProductsList;
