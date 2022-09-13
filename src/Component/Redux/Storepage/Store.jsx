import {configureStore}from '@reduxjs/toolkit'
import rootReducer from "../Reducerpage/index";
import { persistStore,persistReducer } from 'redux-persist';
import { applyMiddleware ,compose} from 'redux';
import storage from 'redux-persist/lib/storage'



const loggerMiddleware = (store) => (next) => (action) => {

    if(!action.type){
        return next(action)
    }
    console.log(action.type)
    console.log(action.payload)
    console.log("current state",store.getstate())
    next(action)
    console.log("next  state",store.getstate())
};
  
  
const middleWares=[loggerMiddleware]

const composeEnhancer = compose(applyMiddleware(...middleWares))

  const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    whitelist: ['cartreducer','cartCheckbox']
}


const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer




const store = configureStore({
    reducer: persistedReducer,
    enhancers:composeEnhancer

});

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export  {store, persistor};
