import { createSlice } from "@reduxjs/toolkit";

const GPT = createSlice({
    name : "gpt",
    initialState : null,
    reducers : {
        setGpt : (state,action) => {
            return action.payload
        },
    }
})

export const { setGpt} = GPT.actions

export default GPT.reducer;