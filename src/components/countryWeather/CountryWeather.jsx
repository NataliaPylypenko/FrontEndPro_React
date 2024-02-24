import React from 'react';
import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import Weather from "./Weather";

export const CountryWeather = () => {
    return (
        <div className='container'>
            <SelectRegion />
            <SelectCountry />
            <Weather />
        </div>
    );
};