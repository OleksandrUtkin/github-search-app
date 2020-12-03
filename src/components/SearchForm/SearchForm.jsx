import React, {useState, useRef, useEffect} from 'react';
import './SearchForm.scss';
import {connect} from 'react-redux';
import fetchRepos from "../../store/actions/getRepos";

const SearchForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchRepos(inputValue);
    };

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                placeholder='Enter a Github organization name'
                name='search-repositories'
                className='search-form__input'
                value={inputValue}
                onChange={handleChange}
                ref={inputRef}
            />
            <button type='submit' className='search-form__submit-btn'>submit</button>
        </form>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: (inputValue) => dispatch(fetchRepos(inputValue))
    }
};

export default connect(null, mapDispatchToProps)(SearchForm);
