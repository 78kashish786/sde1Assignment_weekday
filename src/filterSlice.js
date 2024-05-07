import {createSlice}from '@reduxjs/toolkit'

const initialState={
    location:"",
    role:"",
    experience:"",
    company:"",
    minSalary:""
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
        },
        setCompanyFilter:(state,action)=>{
            state.company=action.payload
        },
        setMiniSalary:(state,action)=>{
            state.minSalary = action.payload;
        },
    },
});

export const {setRoleFilter,setLocationFilter,setMinimumExperience, setCompanyFilter, setMiniSalary} = filterSlice.actions;
export default filterSlice.reducer;