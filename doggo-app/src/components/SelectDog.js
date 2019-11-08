import React from 'react';

const SelectDog = props => {
    return (
        <form onSubmit={props.fetchDogs}>
            <select onChange={props.handleChange} >
                <option value='random'>random</option>
                <option value='akita'>akita</option>
                <option value='terrier/american'>american terrier</option>
                <option value='appenzeller'>appenzeller</option>
                <option value='beagle'>beagle</option>
                <option value='boxer'>boxer</option>
                <option value='bulldog/emglish'>bulldog</option>
                <option value='collie/border'>border collie</option>
                <option value='corgi'>corgi</option>
                <option value='chihuahua'>chihuahua</option>
                <option value='terrier'>terrier</option>
                <option value='dachshund'>dachshund</option>
                <option value='dalmation'>dalmation</option>
                <option value='pug'>pug</option>
                <option value='poodle/standard'>standard poodle</option>
            </select>
            <button type='submit'>Fetch Dogs!</button>
        </form>

    );
};

export default SelectDog;