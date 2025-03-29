import { Platform } from "react-native";
//para web o utilizar en la computadora
const LOCALHOST = "localhost:5047";

//para emulador android
const EMULATOR_HOST = "localhost:5047";

//dispositivo fisico (expo go) utilizando la ip de la computadora
const DEVICE_HOST = "localhost";

export const BASE_URL =
  Platform.OS === "android"
    ? (__DEV__ ? `http://${EMULATOR_HOST}` : `http://${DEVICE_HOST}`)
    : `http://${LOCALHOST}`;

