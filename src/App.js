import './scss/index.scss';
import React from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
    return (
        <>
            <h1>Github search app</h1>
            <SearchForm/>
            <SearchResults/>
        </>
    );
}

export default App;

