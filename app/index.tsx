import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="items-center gap-2">
      <Image
        className="h-3/4 w-full"
        source={{
          uri: "https://github.com/mart-anthony-stark/zalaura/blob/main/public/landing-page.jpg?raw=true",
        }}
      />
      <Text className="text-5xl">ZALAURA</Text>
      <TouchableOpacity
        onPress={() => router.navigate({ pathname: "/products" })}
      >
        <View className="bg-black p-2">
          <Text className="text-white text-xl">SHOP NOW</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
