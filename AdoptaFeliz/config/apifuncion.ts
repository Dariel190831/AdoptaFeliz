
import { BASE_URL } from "./api";

export const RegistrarMascota = async (nombre: string, raza: string, edad: string, categoria: string) => {
    try {
        const response = await fetch(`${BASE_URL}/api/Registros`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nombre, raza, edad, categoria}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al registrar la mascota');
        }

        return data; // En caso de éxito, devuelve los datos de la respuesta
    } catch (error: any) {
        throw new Error(error.message || 'Error en la conexión');
    }
};
