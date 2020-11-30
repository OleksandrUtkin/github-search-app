import './scss/index.scss';
import React, {useState} from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import rootReducer from './store/reducers/reducers';
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
// import setInputValue from './store/actions/changeInputValue'


const mapStateToProps = (store) => {
    return {
        inputValue : store.inputValue
    }
};



// const wrappedMainComponent = connect(mapStateToProps)(App);

function App(props) {
    console.log(props);


    const [orgName, setOrgName] = useState('');
    const [repositories, setRepositories] = useState([]);
    const [orgError, setOrgError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // fetch(`https://api.github.com/orgs/${props.state.inputValue}`)
        //     .then(orgRequest => orgRequest.json())
        //     .then(org => {
        //         setOrgName(org.login);
        //         setOrgError(null);
        //         if (org.login !== undefined) {
        //             fetch(`https://api.github.com/orgs/${props.state.inputValue}/repos`)
        //                 .then(repos => repos.json())
        //                 .then(repos => setRepositories(repos))
        //         } else {
        //             setRepositories([]);
        //         }
        //     })
        //     .catch(error => {
        //         setOrgError(error.message);
        //     })

        console.log(props.store)
    };

    return (
        <>
            <h1>Github search app</h1>
            <SearchForm
                handleSubmit={handleSubmit}
            />
            <SearchResults
                orgName={orgName}
                orgError={orgError}
                repositories={repositories}
            />
        </>
    );
}

export default connect(mapStateToProps)(App);

