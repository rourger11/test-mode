import * as actionTypes from '../ActionPage/Action_Types'


const initialValue = {
    carts: [],
    
}
const cartreducer = (state = initialValue, action) => {
// add products to cart and increase product quantity
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const ItemIndex = state.carts.findIndex((item) => item.item_id === action.payload.item_id);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            } else {
                const temp = {
                    ...action.payload,
                    qnty: 1
                }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
break
// remove from cart

        case actionTypes.REMOVE_FROM_CART:
            const data = state.carts.filter((el) => el.item_id !== action.payload);

            return {
                ...state,
                carts: data
            }
            // decrease quqntity
        case actionTypes.SUB_QUANTITY:
            const ItemIndex_dec = state.carts.findIndex((item) => item.item_id === action.payload.item_id);
            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const deleteItem = state.carts[ItemIndex_dec].qnty -= 1

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[ItemIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }
            break
        default:

            return state;
    }
}
export default cartreducer;