import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../../ApiService/apiCall'


export const getUserslogo = createAsyncThunk('users/getUserslogo', async (data,thunk) => {
  const response = await ApiService.BrandsLogo(data)
return response
})
export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserslogo.pending, (state, action) => {

        state.loading = true
      
    })
    builder.addCase(getUserslogo.fulfilled, (state, action) => {
    
        state.data = action.payload
        state.loading = false
      
    })
    builder.addCase(getUserslogo.rejected, (state, action) => {
    
        state.loading = false
        state.error = 'Error occured'
      
    })
  },
})

export default usersSlice.reducer