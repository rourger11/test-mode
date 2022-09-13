import * as actionTypes from './Action_Types'

// add to cart
export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item

    }
}

// Remove items from cart
export const removeFromCart = (id)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    }
  }
  
  // remove indivisual item
  
  export const decreaseItem = (item)=>{
    return{
        type:actionTypes.SUB_QUANTITY,
        payload: item
    }
  }
 
  export const checkItem = (item)=>{
    return{
        type:actionTypes.CHECK_DATA,
        payload: item
    }
  }