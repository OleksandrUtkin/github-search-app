import React from 'react';
import './SearchResults.scss';

const SearchResults = (props) => {
    let orgName;
    let repositories;
    if (props.orgError) {
        orgName = <h3 className='search-results__organization'>{props.orgError}</h3>;
    } else if (props.orgName === undefined) {
        orgName = <h3 className='search-results__organization'>'Organization not found'</h3>;
    } else {
        orgName = <h3 className='search-results__organization'>{props.orgName}</h3>;
        repositories = props.repositories.slice(0,5).map(repo => <li className='search-results__li' key={repo.id}>{props.repositories.name}>{repo.name}</li>)
    }

    return (
        <>
            {orgName}
            <ul className='search-results'>
                {repositories && repositories}
            </ul>
        </>
    )
};

export default SearchResults;