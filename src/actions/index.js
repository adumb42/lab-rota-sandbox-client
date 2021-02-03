import holidays from '../apis/holidays';

import { 
    FETCH_HOLIDAYS,
    FETCH_HOLIDAY,
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
    DATE_TOGGLE,
    FETCH_DATE,
    EDIT_START_DATE,
    EDIT_END_DATE,
    UPDATE_STATE,
    UPDATE_USER,
    FETCH_USER
} from './types';
import { useStore } from 'react-redux';

export const fetchHolidays = () => async dispatch => {
    const response = await holidays.get('/holidays');

    dispatch ({ type: FETCH_HOLIDAYS, payload: response.data });
};

export const fetchHoliday = id => async dispatch => {
    const response = await holidays.get(`/holidays/${id}`);

    dispatch ({ type: FETCH_HOLIDAY, payload: response.data })
};

export const johnToggle = (id, John) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, John);

    dispatch({ type: JOHN_TOGGLE, payload: response.data });
};

export const emilyToggle = (id, Emily) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, Emily);

    dispatch({ type: EMILY_TOGGLE, payload: response.data })
};

export const ryanToggle = (id, Ryan) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, Ryan);

    dispatch({ type: RYAN_TOGGLE, payload: response.data })
};

export const alexToggle = (id, Alex) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, Alex);

    dispatch({ type: ALEX_TOGGLE, payload: response.data })
};

export const leanneToggle = (id, LeAnne) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, LeAnne);

    dispatch({ type: LEANNE_TOGGLE, payload: response.data })
};

export const crewOneBench = (id, crewOneBench) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, crewOneBench);

    dispatch({ type: CREW_ONE_BENCH, payload: response.data })
}

export const crewTwoBench = (id, crewTwoBench) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, crewTwoBench);

    dispatch({ type: CREW_TWO_BENCH, payload: response.data })
}

export const crewThreeBench = (id, crewThreeBench) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, crewThreeBench);

    dispatch({ type: CREW_THREE_BENCH, payload: response.data })
}

export const crewFourBench = (id, crewFourBench) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, crewFourBench);

    dispatch({ type: CREW_FOUR_BENCH, payload: response.data })
}

export const crewFiveBench = (id, crewFiveBench) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, crewFiveBench);

    dispatch({ type: CREW_FIVE_BENCH, payload: response.data })
}

export const createDay = (date, day, John, Emily, Ryan, Alex, LeAnne, id) => async dispatch => {
    const response = await holidays.post('/holidays', date, day, John, Emily, Ryan, Alex, LeAnne, id);

    dispatch({ type: CREATE_DAY, payload: response.data })
};

export const dateToggle = (id, date) => async dispatch => {
    const response = await holidays.patch(`/holidays/${id}`, date);

    dispatch({ type: DATE_TOGGLE, payload: response.data })
};

export const fetchDate = () => async dispatch => {
    const response = await holidays.get(`/dates`);

    dispatch({ type: FETCH_DATE, payload: response.data });
};

export const editStartDate = (date) => async dispatch => {
    const response = await holidays.patch('/dates', date);

    dispatch({ type: EDIT_START_DATE, payload: response.data });
};

export const editEndDate = (endDate) => async dispatch => {
    const response = await holidays.put(`/dates`, endDate);

    dispatch({ type: EDIT_END_DATE, payload: response.data });
};

export const fetchUser = () => async dispatch => {
    const response = await holidays.get('/users');

    dispatch({ type: FETCH_USER, payload: response.data });
}

export const updateUser = (updateUser) => async dispatch => {
    const response = await holidays.put('/users', updateUser);

    dispatch({ type: UPDATE_USER, payload: response.data });
}

export const updateState = (updateState) => dispatch => dispatch({ type: "UPDATE_STATE", state: updateState });