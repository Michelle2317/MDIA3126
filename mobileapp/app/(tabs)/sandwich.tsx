
import { View, Text } from 'react-native';
import  { Link } from 'expo-router';

export default function Page() {
        return (
                <View>
                        <Text>This is the sandwich page 🥪</Text>
                        <Link href="/sushi">Take me to the sushi page 🍣, please</Link>
                </View>
          )
}

