import React, {useState} from 'react';
import './SearchForm.scss';
import {connect} from 'react-redux';
import fetchRepos from "../../store/actions/getRepos";

const SearchForm = (props) => {
    const [inputValue, setInputValue] = useState('');

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

// const mapStateToProps = (state) => {
//     return {
//         repositories: state.repositories
//     };
// };

export default connect(null, mapDispatchToProps)(SearchForm);
