import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

interface CustomInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric';
    validationRule?: (text: string) => boolean;
    errorMessage?: string;
}


const CustomInput = ({ label, value, onChangeText, placeholder = '', secureTextEntry=false, keyboardType = 'default', validationRule,errorMessage }: CustomInputProps) => {
const [isValid, setIsValid] =useState(false);
const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry); 

const handleOnChange = (text: string) =>{
    onChangeText(text);
    if (validationRule){
        setIsValid(validationRule(text))
    }
}

    return (
        <View style={styles.container}>
            <Text style={styles.label}> {label} </Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={[styles.input, !isValid && styles.inputError]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleOnChange}
                    secureTextEntry={!isPasswordVisible}
                    keyboardType={keyboardType}
                />
                {
                    secureTextEntry && (
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.icon}>
    <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} />
</TouchableOpacity>

                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { margin: 15 },
    label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', width: 250 },
    input: { flex: 1, height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10 },
    inputError: { borderColor: 'red' },
    icon: { marginLeft: 10 }  // Asegura un espacio entre el input y el icono
});


export default CustomInput;