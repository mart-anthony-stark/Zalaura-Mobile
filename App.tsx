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
import Sample from "./components/Sample";
import { useState } from "react";
import { products } from "./libs/data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App() {
  const [text, setText] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  return (
    <SafeAreaView className="mt-9">
      <Navbar/>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <Card item={item}/>
        )}
      />
    </SafeAreaView>
  );
}
