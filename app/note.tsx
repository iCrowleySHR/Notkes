import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function Note() {
  const { id } = useLocalSearchParams();

  return (
    <View>
       <Text>Nota ID: {id}</Text>
    </View>
  )
}
