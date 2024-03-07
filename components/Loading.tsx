import { ActivityIndicator, View } from "react-native"

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#000000" />
    </View>
  )
}

export default Loading