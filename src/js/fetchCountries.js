const BASE_URL = `https://restcountries.eu/rest/v2`;

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/name/${searchQuery}`)
        .then(response => {
            return response.json();
    
        });
     
}
 
export default { fetchCountries };
// fetch('https://restcountries.eu/rest/v2').then(response => {
//     return response.json();
    
// })
//     .then(country => {
//         console.log(country);
//     })
//     .catch(error => {
//         console.log(error);
//     });


