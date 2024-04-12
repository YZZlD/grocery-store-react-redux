import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKED = 'produce/TOGGLELIKED'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const toggleLiked = (id) => {
    return {
        type: TOGGLE_LIKED,
        produceId: id
    }
}

export default function produceReducer(state = {}, action) {
    const newState = {...state};
    switch (action.type) {
        case TOGGLE_LIKED:
            newState[action.produceId].liked = !newState[action.produceId].liked;
            return newState;
        case POPULATE:
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            return newState;
        default:
            return state;
    }
}
