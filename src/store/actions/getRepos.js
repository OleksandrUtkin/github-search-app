import axios from 'axios';

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE';

export const fetchReposSuccess = (repos) => {
    return {
        type: GET_REPOS_SUCCESS,
        payload: repos
    }
};

export const fetchReposFailure = (errorMsg) => {
    return {
        type: GET_REPOS_FAILURE,
        payload: errorMsg
    }
};

const fetchRepos = (inputValue) => {
    return dispatch => {
        axios.get(`https://api.github.com/orgs/${inputValue}/repos`)
            .then(response => {
                const repos = response.data;
                dispatch(fetchReposSuccess({repositories: repos, organization: inputValue}));
            })
            .catch(error => {
                if(error.message === 'Request failed with status code 404') {
                    const errorMsg = 'Organization not Found';
                    dispatch(fetchReposFailure(errorMsg));
                } else {
                    const errorMsg = error.message;
                    dispatch(fetchReposFailure(errorMsg));
                }
            })
    }
};

export default fetchRepos;