import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegisterMItem = {
    name: string;
    race: string;
    age: string;
    category: string;
    quantity: string;
    image: string | null;
};

type RegisterMState = {
    items: RegisterMItem[];
}

const initialState: RegisterMState = {
    items: [],
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers:{
        addRegisterMItem: (state, action: PayloadAction<RegisterMItem>)=> {
            state.items.push(action.payload)
        }
    }
});

export const {addRegisterMItem} = registerSlice.actions;
export default registerSlice.reducer; 
