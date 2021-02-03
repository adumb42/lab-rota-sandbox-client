import _ from 'lodash';

import {
    FETCH_HOLIDAYS,
    JOHN_TOGGLE,
    EMILY_TOGGLE,
    RYAN_TOGGLE,
    ALEX_TOGGLE,
    LEANNE_TOGGLE,
    CREW_ONE_BENCH,
    CREW_TWO_BENCH,
    CREW_THREE_BENCH,
    CREW_FOUR_BENCH,
    CREW_FIVE_BENCH,
    CREATE_DAY,
    UPDATE_USER,
    FETCH_USER
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HOLIDAYS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case JOHN_TOGGLE:
            return { ...state, [action.payload.id]: action.payload };
        case EMILY_TOGGLE:
            return { ...state, [action.payload.id]: action.payload };
        case RYAN_TOGGLE:
            return { ...state, [action.payload.id]: action.payload };
        case ALEX_TOGGLE:
            return { ...state, [action.payload.id]: action.payload };
        case LEANNE_TOGGLE:
            return { ...state, [action.payload.id]: action.payload };
        case CREW_ONE_BENCH:
            return { ...state, [action.payload.id]: action.payload };
        case CREW_TWO_BENCH:
            return { ...state, [action.payload.id]: action.payload };
        case CREW_THREE_BENCH:
            return { ...state, [action.payload.id]: action.payload };
        case CREW_FOUR_BENCH:
            return { ...state, [action.payload.id]: action.payload };
        case CREW_FIVE_BENCH:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_DAY:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_USER:
            return { ...state, ...action.payload };
        case FETCH_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

        
