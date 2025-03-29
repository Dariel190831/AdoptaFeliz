import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { RegistrarMascota } from "@/config/apifuncion";

const register = [
  { id: "1", nombre: "Hulk", raza: "Pastor Aleman", edad: "2 años" ,categoria: "Cachorro", cantidad: 1 },
  { id: "2", nombre: "Jimmy", raza: "Pastor Aleman", edad: "2 años" ,categoria: "Perro Grande", cantidad: 1 },
];

export default function RegisterMScreen() {
      const router = useRouter();
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="cube-outline" size={32} color="#2D2E32" />
        <Text style={styles.title}>Registro de Mascotas</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/RegisterM/register")}>
  <Text style={styles.addButtonText}>Agregar Mascota</Text>
</TouchableOpacity>

      <FlatList
        data={register}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}
          onPress={() => router.push({ pathname: `../item/${item.id}`, params: item })}>
            <View style={styles.itemHeader}>
              <Ionicons name="pricetag-outline" size={24} color="#4A90E2" />
              <Text style={styles.itemTitle}>{item.nombre}</Text>
            </View>
              <View style={styles.infoRow}>
               <Ionicons name="albums-outline" size={20} color="#666" />
               <Text style={styles.itemCategory}>{item.raza}</Text>
             </View>

            <View style={styles.infoRow}>
              <Ionicons name="albums-outline" size={20} color="#666" />
              <Text style={styles.itemCategory}>{item.categoria}</Text>
            </View>

            <View style={styles.infoRow}>
             <Ionicons name="calendar-outline" size={20} color="#666" />
            <Text style={styles.itemCategory}>{item.edad}</Text>
          </View>

            <View style={styles.infoRow}>
              <Ionicons name="layers-outline" size={20} color="#666" />
              <Text style={styles.itemQuantity}>{item.cantidad} Mascota Disponibles</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F7FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D2E32",
    marginLeft: 10,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  itemCategory: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#444",
    fontWeight: "bold",
    marginLeft: 8,
  },
  addButton: {
    backgroundColor: "#007bff", 
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",  
    marginVertical: 20, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 5, 
  },
});
