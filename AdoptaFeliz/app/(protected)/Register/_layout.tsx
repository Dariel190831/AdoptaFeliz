import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RegistroLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tabs.Screen
        name="register"
        options={{
          title: "Registro de Mascotas",
          tabBarIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="addRegister"
        options={{
          title: "Añadir Mascota",
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
