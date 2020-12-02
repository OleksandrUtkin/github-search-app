import axios from 'axios';

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE';
export const GET_REPOS_NOT_FOUND = 'GET_REPOS_NOT_FOUND';

const getOrganizationFunc = async inputValue => {
    let organization;
    let repositories = [];
    let error;
    fetch(`https://api.github.com/orgs/${inputValue}`)
        .then(orgRequest => orgRequest.json())
        .then(org => {
            organization = org.login.toString();
            error = null;
            if (org.login !== undefined) {
                fetch(`https://api.github.com/orgs/${inputValue}/repos`)
                    .then(repos => repos.json())
                    .then(repos => repositories.push(repos))
            } else {
                repositories = [];
            }
        })
        .then(organization => organization)
        .catch(error => {
            error = error.message;
        })
};






export const fetchReposSuccess = repos => {
    return {
        type: GET_REPOS_SUCCESS,
        payload: repos
    }
};

export const fetchReposFailure = errorMsg => {
    return {
        type: GET_REPOS_FAILURE,
        payload: errorMsg
    }
};

export const fetchReposNotFound = message => {
    return {
        type: GET_REPOS_NOT_FOUND,
        payload: message
    }
};

const fetchRepos = inputValue => {
    console.log('run fetchRepos');
    return dispatch => {
        console.log('run fetchRepos && axios');
        axios.get(`https://api.github.com/orgs/${inputValue}/repos`)
            .then(response => {
                console.log('repos: ', response);
                const repos = response;
                dispatch(fetchReposSuccess(repos));
            })
            .catch(error => {
                console.log('error: ', error);
                const errorMsg = error.message;
                dispatch(fetchReposFailure(errorMsg));
            })
    }
};

export default fetchRepos;