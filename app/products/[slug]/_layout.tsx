import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { products } from "../../../libs/data";

const Layout = () => {
  const { slug } = useLocalSearchParams();
  const product = products.find((product) => product.slug === slug);
  return (
    <Stack
      screenOptions={{
        title: product?.name || "Not Found",
        header: () => (
          <View className="p-4">
            <TouchableOpacity onPress={() => router.back()}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  );
};

export default Layout;
