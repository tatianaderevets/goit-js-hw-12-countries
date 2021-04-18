import countryCard from '../templates/country-info.hbs';
import countryList from '../templates/country-list.hbs';
import refs from './refs';

const render = {
CountryCard(country) {
const markup = countryCard(...country);
refs.countriesList.innerHTML = '';
refs.countriesList.insertAdjacentHTML('beforeend', markup);
},

CountryList(country) {
const markup = countryList(country);
refs.countriesList.innerHTML = '';
refs.countriesList.insertAdjacentHTML('beforeend', markup);

}
}

export default render;
