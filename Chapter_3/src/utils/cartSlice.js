import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);

            /* 
                In vanilla(old) redux items pushed like this
                    - Redux says => Don't Mutate the state.

                const newState = [...state];
                newState.items.push(action.payload);
                return newState;
            */
        },
        removeItem: (state, action)=> {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; // This basically clear the array. []

            // state = [] // we can't do this cause this is a reference state

            /* - This is the second way to clear the cart. 
               - RTk says either mutating the state or return a new state  
            */
            // return {items: []} // we can do this. state = []
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;