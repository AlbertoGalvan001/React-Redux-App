import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions';
import SelectDog from './SelectDog';

function DogList(props) {
    const [api, setAPI] = useState('https://dog.ceo/api/breeds/image/random/100');

    const fetchDogs = e => {
        e.preventDefault();
        props.getDogs(api);
        console.log('selected dogAPI', api);
    };

    const handleChange = e => {
        console.log(e.target.value);
        setAPI(`https://dog.ceo/api/breed/${e.target.value}/images`);
    };

    return (
        <>
            <div className='header'>
                <h1>Doggos Doggos Doggos!</h1>
                <SelectDog handleChange={handleChange} fetchDogs={fetchDogs} />
            </div>
            {props.isFetching && <p className='fetching'>Fetching</p>}
            <div className='dog-container'>
                {props.data.map(dog => (
                    <img className='dog' key={dog} src={dog} />
                ))}
            </div>
            {props.error && <p className='error'>{props.error}</p>}

        </>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getDogs }
)(DogList);