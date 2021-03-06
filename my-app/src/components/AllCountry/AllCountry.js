import React, { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetails/CountryDetail';

const AllCountry = () => {
    const [country,setCountry]=useState([]);
     console.log(country);
   useEffect(()=>{
       fetch('https://restcountries.com/v3.1/all')
       .then(res=>res.json())
       .then(data=>setCountry(data))
   },[])
    
    return (
        <div>
            {
            country.map(name=><CountryDetail
                 name={name.name.common}
                 img={name.flags.png}
                 ></CountryDetail>)
            }
        </div>
    );
};

export default AllCountry;