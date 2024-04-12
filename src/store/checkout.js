const CHECKOUT_VISIBLE = 'checkout/CHECKOUT_VISIBLE'
const CHECKOUT_NOT_VISIBLE = 'checkout/CHECKOUT_NOT_VISIBLE'

export const checkoutVisible = () => {
    return {
        type: CHECKOUT_VISIBLE
    }
}


export const checkoutNotVisible = () => {
    return {
        type: CHECKOUT_NOT_VISIBLE
    }
}

export default function checkoutReducer(state = {["visible"]: false}, action) {
    const newState = {...state};
    switch(action.type){
        case CHECKOUT_VISIBLE:
            newState["visible"] = true;
            return newState;
        case CHECKOUT_NOT_VISIBLE:
            newState["visible"] = false;
            return newState;
        default:
            return state;
    }
}
