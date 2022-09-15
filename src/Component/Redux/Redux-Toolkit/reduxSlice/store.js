import { configureStore } from '@reduxjs/toolkit'
import bannerReducer from "./bannerSlice"
import brandReducer from './brandSlice'
import customerCartReducer from './customerCartSlice'
const store = configureStore({
    reducer: {
        banner:bannerReducer,
        brandsLogo:brandReducer,
        customerCart:customerCartReducer 
    }
  })
  export default store;