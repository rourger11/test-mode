import * as actionTypes from '../ActionPage/Action_Types'

const initialValue = {
    cartData: []
}
const cartCheckbox = (state = initialValue, action) => {

// add products to cart and increase product quantity

    switch (action.type) {
        case actionTypes.CHECK_DATA:

            const data = state.cartData
                return {
                    ...state,
                    cartData: data
            }

        default:

            return state;
    }
}
export default cartCheckbox;