const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const setInputValue = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        payload: value
    }
};


export default CHANGE_INPUT_VALUE;