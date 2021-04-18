
import './styles.css';
import refs from './js/refs';
import API from './js/fetchCountries';
import check from './js/result';
const debounce = require('lodash.debounce');



refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault()
    let searchQuery = e.target.value;
    API.fetchCountries(searchQuery)
        .then(check.result)
        .catch(error => console.log(error))
        .finally(() => setTimeout(() => {
            refs.input.value = null
        }, 5000));
}









