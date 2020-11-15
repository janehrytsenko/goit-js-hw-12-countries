export default class CountryApiService {

    constructor(){
    this.searchQuery = ''
    }

    
    fetchCountryByName() {
    const BASE_URL = "https://restcountries.eu/rest/v2/name";
    const url = `${BASE_URL}/${this.searchQuery}`;

    return fetch(url)
        .then(response => {
        return (response.json());
    }
    )
}
    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }

 
}