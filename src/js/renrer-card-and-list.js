import refs from './refs.js'
import templateCard from '../template/country-card.hbs'
import templateList from '../template/country-name-list.hbs'

export function renderCountryCard(country) {
    const markup = templateCard(country)
    refs.markupContainer.insertAdjacentHTML('beforeend', markup)
}

export function renderCountryList(countryName) {
  
    const markup = templateList(countryName)
    refs.markupContainer.insertAdjacentHTML('beforeend', markup)
}