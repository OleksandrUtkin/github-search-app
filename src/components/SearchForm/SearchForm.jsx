import React, {useState} from 'react';
import './SearchForm.scss';
import {connect} from 'react-redux';
import {setInputValue} from '../../store/actions/changeInputValue';

const mapDispatchToProps = (dispatch) => {
    return {
        setInputValue: (value) => dispatch(setInputValue(value))
    }
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    };
};

const SearchForm = ({setInputValue}) => {
    const [searchInputValue, setSearchInputValue] = useState('');

    const handleChange = (e) => {
        setSearchInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInputValue);
        setInputValue(searchInputValue);
    };

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                placeholder='Enter a Github organization name'
                name='search-repositories'
                className='search-form__input'
                value={searchInputValue}
                onChange={handleChange}
            />
            <button type='submit' className='search-form__submit-btn'>submit</button>
        </form>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
