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
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Sample from "../components/Sample";
import { useState } from "react";
import { products } from "../libs/data";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Link, router } from "expo-router";
import SearchBar from "../components/SearchBar";

export default function App() {
  const [text, setText] = useState("");
  const [isSelected, setIsSelected] = useState(false);
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
