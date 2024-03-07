import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import { Product } from "../../libs/types";
import { getProducts } from "../../services/product.service";
import Loading from "../../components/Loading";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProducts = async () => {
    const response = await getProducts();
    if (!response?.data)
      return ToastAndroid.show("Something went wrong.", ToastAndroid.BOTTOM);

    setItems(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const filteredProducts = items.filter((product) => {
    const regex = new RegExp(text, "i");
    return product.title.match(regex) || product.category.match(regex);
  });

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView>
      <SearchBar value={text} onChangeText={setText} />
      {filteredProducts.length === 0 ? (
        <View className="justify-center items-center">
          <Text className="text-2xl text-gray-400">No items to show.</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={filteredProducts}
          renderItem={({ item, index }) => <Card item={item} />}
        />
      )}
    </SafeAreaView>
  );
}
