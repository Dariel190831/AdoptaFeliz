import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function ProfileScreen() {
    const router = useRouter();
    const { logout } = useAuth();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                         source={require("../../assets/images/profilepic.jpg")}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Dariel Mencia</Text>
                    <Text style={styles.email}>darielmencia750@gmail.com</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <Ionicons name="person" size={24} color="#007AFF" />
                        <Text style={styles.infoText}>@darielmencia750</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Ionicons name="location" size={24} color="#007AFF" />
                        <Text style={styles.infoText}>San Pedro Sula</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Ionicons name="calendar" size={24} color="#007AFF" />
                        <Text style={styles.infoText}>Miembro desde 2024</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonLogout}
                        onPress={() => { logout(); router.replace("/login"); }}
                    >
                        <Ionicons name="log-out" size={20} color="white" />
                        <Text style={styles.buttonText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#F0F2F5",
        alignItems: "center",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginVertical: 20,
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 3,
        borderColor: "#007AFF",
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        color: "#333",
    },
    email: {
        fontSize: 16,
        color: "#555",
        fontStyle: "italic",
    },
    infoContainer: {
        backgroundColor: "white",
        width: "90%",
        padding: 20,
        borderRadius: 20,
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 8,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
    },
    infoText: {
        fontSize: 18,
        marginLeft: 15,
        color: "#444",
        fontWeight: "600",
    },
    buttonContainer: {
        marginTop: 30,
        width: "90%",
        alignItems: "center",
    },
    buttonLogout: {
        flexDirection: "row",
        backgroundColor: "#FF3B30",
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        marginLeft: 12,
        fontWeight: "bold",
    },
});