import {createSlice}from '@reduxjs/toolkit'

const initialState={
    location:"",
    role:"",
    experience:"",
};

const filterSlice= createSlice({
    name:"filters",
    initialState,
    reducers:{
        setLocationFilter:(state,action)=>{
             state.location=action.payload;
        },
        setRoleFilter:(state,action)=>{
            state.role=action.payload;
        },
        setMinimumExperience:(state,action)=>{
            state.experience = action.payload;
        }
    },
});

export const {setRoleFilter,setLocationFilter,setMinimumExperience} = filterSlice.actions;
export default filterSlice.reducer;