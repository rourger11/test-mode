import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../../ApiService/apiCall'


export const getUsers = createAsyncThunk('users/getUsers', async (data,thunk) => {
  const response = await ApiService.BannerData(data)
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
    builder.addCase(getUsers.pending, (state, action) => {

        state.loading = true
      
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
    
        state.data = action.payload
        state.loading = false
      
    })
    builder.addCase(getUsers.rejected, (state, action) => {
    
        state.loading = false
        state.error = 'Error occured'
      
    })
  },
})

export default usersSlice.reducer