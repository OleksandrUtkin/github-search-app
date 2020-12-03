import React from 'react';
import './SearchResults.scss';
import {connect} from "react-redux";

const SearchResults = props => {

    const repositories = props.repositories.slice(0,5).map(repo => <li className='search-results__li' key={repo.id}>{repo.name}</li>);

    return (
        <>
            <h3 className='search-results__organization'>{props.errorMsg ? props.errorMsg : props.organization}</h3>
            <ul className='search-results'>
                {repositories && repositories}
            </ul>
        </>
    )
};

const mapStateToProps = store => {
    return {
        organization: store.organization,
        repositories: store.repositories,
        errorMsg: store.errorMsg,
    }
};

export default connect(mapStateToProps)(SearchResults);