import {createSlice} from '@reduxjs/toolkit'

const initialState = {
       showSidebar : false,
}

const uiSlice = createSlice({
       name:'ui',
       initialState,
       reducers:{
           toggleSidebar:(state,action)=>{
          
            state.showSidebar = !state.showSidebar
           }
       }
})

export const {toggleSidebar} = uiSlice.actions

export default uiSlice.reducer