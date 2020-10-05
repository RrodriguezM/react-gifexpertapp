import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const changeHandler = (e) => {
        setInputValue(e.target.value)
        // console.log(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue,...cat])
            setInputValue('')
        }
        
        // console.log('submit hecho')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input  
                type='text'
                value={inputValue}
                onChange={changeHandler}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
