import CHANGE_INPUT_VALUE from '../actions/changeInputValue';

const defaultState = {
    inputValue: ''
};

const inputReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE :
            return {
                ...state,
                inputValue : action.payload
            };
        default :
            return state
    }
};

export default inputReducer;