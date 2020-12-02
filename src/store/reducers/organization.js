import GET_REPOS_SUCCESS from '../actions/getRepos';
import GET_REPOS_FAILURE from '../actions/getRepos';
import GET_REPOS_NOT_FOUND from '../actions/getRepos';

const defaultState = {
    organization: '',
    repositories: []
};

const organizationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_REPOS_SUCCESS :
            return {
                ...state,
                repositories : action.payload
            };
        default :
            return state
    }
};

export default organizationReducer;