import { Text } from "react-native"

type SampleProps = {
    variable: string
}

const Sample = ({variable}: SampleProps) => {
  return (
    <Text className="text-2xl">{variable}</Text>
  )
}

export default Sample