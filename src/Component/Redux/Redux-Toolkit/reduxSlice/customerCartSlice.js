import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiService } from '../../../ApiService/apiCall'

export const getCustomerCartData = createAsyncThunk('users/getCustomerCartData', async (data,thunk) => {
  const response = await ApiService.CustomerCart(data)
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
    builder.addCase(getCustomerCartData.pending, (state, action) => {

        state.loading = true
      
    })
    builder.addCase(getCustomerCartData.fulfilled, (state, action) => {
    
        state.data = action.payload
        state.loading = false
      
    })
    builder.addCase(getCustomerCartData.rejected, (state, action) => {
    
        state.loading = false
        state.error = 'Error occured'
      
    })
  },
})

export default usersSlice.reducer