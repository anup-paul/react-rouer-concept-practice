import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {

    const {name, capital,alpha2Code} = props.country;

    let history = useHistory()
    const handleClick = (countryCode) =>
    {
        history.push(`/country/${countryCode}`);
    }

    const countryBoxDesign = 
    {
        border: "2px solid tomato",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px"
    }
    return (
        <div style={countryBoxDesign} >
            <h5>Name: {name}</h5>
            <h5>Capital: {capital}</h5>   
            <h6>COde:{alpha2Code}</h6> 
            <Link to = {`/country/${alpha2Code}`}>Click for details</Link> 
            <br/>
            <button onClick={()=>handleClick(alpha2Code)}  >Details</button>     
        </div>
    );
};

export default Countries;