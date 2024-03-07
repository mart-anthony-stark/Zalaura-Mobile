import React from "react";
import { TextInput, View } from "react-native";

type SearchBarProps = {
    value: string,
    onChangeText: (e:string) => void
}

const SearchBar = ({value, onChangeText}:SearchBarProps) => {
  return (
    <View className="p-2">
      <TextInput value={value} onChangeText={onChangeText} className="border p-2 rounded-full" placeholder="Search" />
    </View>
  );
};

export default SearchBar;
