const region = ['Africa', 'Europe', 'America', 'Asia', 'Australia'];

const API = 'https://restcountries.com/v3.1/region';

export const fetchCountriesRegion = region =>
    fetch(`API ${region}`)
        .then(response => response.json());

