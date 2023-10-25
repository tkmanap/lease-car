import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";

const initialState = {
categoryId: 0,
    sort: {
     name: 'Car and Minivan'
    }
}
export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        }
    }
})

export const {setCategoryId} = filterSlice.actions
export default filterSlice.reducer