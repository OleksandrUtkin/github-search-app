import {GET_REPOS_SUCCESS} from '../actions/getRepos';
import {GET_REPOS_FAILURE} from '../actions/getRepos';

const defaultState = {
    organization: null,
    repositories: null,
    errorMsg: null
};

const organizationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_REPOS_SUCCESS :
            return {
                ...state,
                errorMsg: null,
                repositories: action.payload.repositories,
                organization: action.payload.organization
            };
        case GET_REPOS_FAILURE:
            return  {
                ...defaultState,
                errorMsg: action.payload
            };
        default:
            return state
    }
};

export default organizationReducer;