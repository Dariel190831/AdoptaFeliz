import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Obtiene la información del usuario y la función de logout
  const router = useRouter(); // Permite la navegación entre pantallas
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animación para efectos de escala

  const handleLogout = () => {
    logout(); // Cierra la sesión del usuario
    router.replace("/login"); // Redirige a la pantalla de inicio de sesión
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start(); // Reduce ligeramente el tamaño del botón al presionarlo
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start(); // Restaura el tamaño original del botón
  };

  return (
    <View style={styles.container}>
      {/* Tarjeta del perfil con imagen y datos del usuario */}
      <View style={styles.profileCard}>
        <Image 
          source={user?.profilePic ? { uri: user.profilePic } : require("../../assets/images/profilepic.jpg")} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>{user?.name || "Usuario"}</Text>
        <Text style={styles.email}>{user?.email || "email@example.com"}</Text>
      </View>

      {/* Información adicional del usuario */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}><Ionicons name="person" size={18} color="#4C6EF5" /> @{user?.username || "Dariel Mencia"}</Text>
        <Text style={styles.infoText}><Ionicons name="location" size={18} color="#4C6EF5" /> {user?.location || "San Pedro Sula"}</Text>
        <Text style={styles.infoText}><Ionicons name="calendar" size={18} color="#4C6EF5" /> Miembro desde {user?.memberSince || "2024"}</Text>
      </View>

      {/* Botón para editar perfil con animación */}
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}> 
        <TouchableOpacity style={styles.editButton} onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Botón para cerrar sesión con animación */}
      <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}> 
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EEF2F3",
  },
  profileCard: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: "90%",
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4C6EF5",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: "90%",
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 20,
  },
  editButton: {
    backgroundColor: "#4C6EF5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
