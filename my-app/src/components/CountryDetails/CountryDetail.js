import React from 'react';

const CountryDetail = (props) => {
    return (
        <div>
            <h4>Name:{props.name}</h4>
            <img src={props.img} alt="" />
        </div>
    );
};

export default CountryDetail;