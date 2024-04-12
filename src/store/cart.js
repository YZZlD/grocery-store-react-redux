import produceReducer from "./produce";
import {useSelector} from 'react-redux';
import produceList from '../mockData/produce.json';

const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const INCREMENT_ITEM = 'cart/INCREMENT_ITEM'
const DECREMENT_ITEM = 'cart/DECREMENT_ITEM'
const EMPTY_CART = 'cart/EMPTY_CART'

export const incrementItem = (id) => {
    return {
        type: INCREMENT_ITEM,
        incrementId: id
    }
}

export const decrementItem = (id) => {
    return {
        type: DECREMENT_ITEM,
        decrementId: id
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        addedId: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        removedId: id
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}

export default function cartReducer(state = {}, action) {
    const newState = {...state};
    switch(action.type) {
        case DECREMENT_ITEM:
            if(newState[action.decrementId].count === 1) {
                delete newState[action.decrementId];
                return newState;
            }
            newState[action.decrementId].count--;
            return newState;
        case INCREMENT_ITEM:
            newState[action.incrementId].count++;
            return newState;
        case ADD_TO_CART:
            return {...state, [action.addedId]: {id: action.addedId, count: 1}}
        case REMOVE_FROM_CART:
                if(newState[action.removedId]) {
                    console.log('deleting', action.removedId);
                    delete newState[action.removedId];
                    return newState;
                }
                return state;
        case EMPTY_CART:
            const emptyState = {};
            return emptyState;
        default:
            return state;
    }
}
