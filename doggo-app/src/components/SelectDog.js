import React from 'react';

const SelectDog = props => {
    return (
        <form onSubmit={props.fetchDogs}>
            <select onChange={props.handleChange} >
                <option value='random'>random</option>
                <option value='hound/afghan'>afghan hound</option>
                <option value='african'>african</option>
                <option value='akita'>akita</option>
                <option value='terrier/american'>american terrier</option>
                <option value='appenzeller'>appenzeller</option>
                <option value='beagle'>beagle</option>
                <option value='collie/border'>border collie</option>
            </select>
            <button type='submit'>Fetch Dogs!</button>
        </form>

    );
};

export default SelectDog;