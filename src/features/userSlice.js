import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getData=createAsyncThunk('getData',async()=>{
    const res=await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    return res.data;
});

export const insertData=createAsyncThunk('insertData',async(formvalue)=>{
    const res=await axios.post(`http://localhost:3000/user`,formvalue);
    console.log(res.data);
    return res.data;
});

export const deleteData=createAsyncThunk('deleteData',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/user/${id}`);
    console.log(res.data);
    return res.data;
});

export const updateData=createAsyncThunk('deleteData',async(formvalue)=>{
    const res=await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
    console.log(res.data);
    return res.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        data:[],
        name:"Pankaj Makwana"
    },
    reducers: {
       
    },
    extraReducers:{
        [getData.fulfilled]:(state,action)=>{
            state.data=action.payload; 
     }
    }

  })
  
  export const {  } = userSlice.actions
  
  export default userSlice.reducer