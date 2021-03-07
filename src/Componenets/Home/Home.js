import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => 
    {
        const url = ('https://restcountries.eu/rest/v2/all')
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
           {
               countries.map(country => <Countries
                    country = {country} key = {country.alpha2Code} 
                 ></Countries>)
           }
        </div>
    );
};

export default Home;