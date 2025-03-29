import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { RegistrarMascota } from "@/config/apifuncion";

export default function AddRegisterMScreen() {
  const router = useRouter();

  const [register, setRegisterM] = useState({
    name: "",
    race: "",
    age: "",
    category: "",
    image: null as string | null,
  });

  const registrarButtomn = async () => {
    const nombre = register.name;
    const raza = register.race;
    const edad = register.age;
    const categoria = register.category;
    
    try {
      const data = await RegistrarMascota(
        nombre, raza, edad, categoria
      );
      alert("Mascota registrada con éxito");
      router.back();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      Alert.alert("Error", "No se pudo registrar la mascota. Intente nuevamente.");
    }
  }

  const handleChange = (field: string, value: string) => {
    setRegisterM((prev) => ({ ...prev, [field]: value }));
  };

  const selectImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permiso requerido", "Se necesita acceso a la galería.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true, 
      quality: 1 
    });

    if (!result.canceled) {
      handleChange("image", result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permiso requerido", "Se necesita acceso a la cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 1 });

    if (!result.canceled) {
      handleChange("image", result.assets[0].uri);
    }
  };

  const saveProduct = () => {
    const { name, race, age, category, image } = register;
    if (!name || !race || !age ||!category || !image) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

  router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Mascotas</Text>

      <TextInput style={styles.input} placeholder="Nombre de la Mascota" value={register.name} onChangeText={(text) => handleChange("name", text)} />
      <TextInput style={styles.input} placeholder="Raza" value={register.race} onChangeText={(text) => handleChange("race", text)} />
      <TextInput style={styles.input} placeholder="Edad" value={register.age} onChangeText={(text) => handleChange("age", text)} />
      <TextInput style={styles.input} placeholder="Categoría" value={register.category} onChangeText={(text) => handleChange("category", text)} />

      {register.image && <Image source={{ uri: register.image }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Tomar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSave} onPress={registrarButtomn}>
        <Text style={styles.buttonText}>Guardar Mascota</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 15, marginBottom: 10, backgroundColor: "#fff" },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginTop: 10 },
  buttonSave: { backgroundColor: "#28a745", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  image: { width: 200, height: 200, borderRadius: 10, marginVertical: 10 },
});

function setError(message:string) {
  throw new Error("Funcion no implementada.");
}

