import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

type ArticuloProps = {
    nombre: string;
    raza: string;
    edad: string;
    categoria: string;
    stock: number;
};

export default function ArticuloCard({ nombre, raza, edad, categoria, stock }: ArticuloProps) {
    return (
        <View style={styles.wrapper}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="cube-outline" size={28} color="#4A90E2" />
                    <Text style={styles.title}>{nombre}</Text>
                </View>
                <View style={styles.infoRows}>
                    <Ionicons name="albums-outline" size={20} color="#666" />
                    <Text style={styles.text}>Raza: {raza}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="albums-outline" size={20} color="#666" />
                    <Text style={styles.text}>Edad: {edad}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="albums-outline" size={20} color="#666" />
                    <Text style={styles.text}>Categoria: {categoria}</Text>
                </View>

                <View style={styles.infoRows}>
                    <Ionicons name="layers-outline" size={20} color="#666" />
                    <Text style={styles.text}>Cantidad: {stock}</Text>
                </View>
            </View>
        </View>

    );
}
 const styles = StyleSheet.create({
    wrapper: {
        height: "60%",
        alignItems: "center"
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    infoRows: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10,
    },
    text: {
        fontSize: 16,
        color: "#444",
        marginLeft: 8,
    }
})