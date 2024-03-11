import { SafeAreaView, Text, ToastAndroid, View } from "react-native";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { Product } from "../../libs/types";
import { getProducts } from "../../services/product.service";
import Loading from "../../components/Loading";
import ProductsList from "../../components/ProductsList";

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

  return (
    <SafeAreaView>
      <View className="p-2 pb-0 bg-white">
        <Text className="text-3xl uppercase">Zalaura</Text>
        <SearchBar value={text} onChangeText={setText} />
      </View>

      {isLoading ? (
        <View className="mt-8">
          <Loading />
        </View>
      ) : (
        <ProductsList products={filteredProducts} />
      )}
    </SafeAreaView>
  );
}
