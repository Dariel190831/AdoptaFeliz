import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {

    const router = useRouter();
    return (
        <View>
            <Text>Configuraciones</Text>
            <Button title="Volver" onPress={() => { router.back() }} />
        </View>
    )
}