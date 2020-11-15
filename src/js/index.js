import '../css/style.css'
import refs from '../js/refs.js'
import {renderCountryCard, renderCountryList} from './renrer-card-and-list.js'
import "../js/pnotify";
import { error } from "@pnotify/core";
import debounce from "lodash.debounce";
import CountryApiService from '../js/fetchCountries.js'

const countryApiService = new CountryApiService();

refs.input.addEventListener('input', debounce(onInputChange, 500))



//событие input
function onInputChange(evt) {
  countryApiService.query = evt.target.value
  refs.markupContainer.innerHTML = ''
  if (!countryApiService.query) {
    return
  }
    countryApiService.fetchCountryByName().then(isValidSearchQuery).catch(itsError => { console.log(itsError) }) 

}


function isValidSearchQuery(evt) {
   if (evt.length === 1) {
    renderCountryCard(evt);
    return;
  } else if (evt.length <= 10) {
     renderCountryList(evt);
    return;
    }
    
    
    const itsError = error({
        text: "Too many matches found. Please enter a more specific query!"
        
});
        return itsError
     
}

