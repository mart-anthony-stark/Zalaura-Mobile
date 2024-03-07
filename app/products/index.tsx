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
import { products } from "../../libs/data";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(products);

  const filteredProducts = products.filter((product) => {
    const regex = new RegExp(text, "i");
    return product.name.match(regex) || product.brand.match(regex);
  });

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
