import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    let {countryCode} = useParams();
    // console.log(name);
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(() =>
    {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryCode}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetails(data) )
    }, [])
    const {name, population, region, capital} = countryDetails;
    return (
        <div>
            <h1>Name:{name}</h1>
            <h4>Population:{population}</h4>
            <h4>Region:{region}</h4>
            <h4>Capital:{capital}</h4>
        </div>
    );
};

export default CountryDetails;