import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

const Layout = () => {
  const { id } = useLocalSearchParams();
  return (
    <Stack
      screenOptions={{
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
