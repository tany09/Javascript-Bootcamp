// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countriesList = JSON.parse(e.target.responseText)
//             const country = countriesList.find((element) => element.alpha2Code === countryCode)
//             resolve(country)
//             }
//         else if (e.target.readyState === 4){
//             reject("An error occured")
//         }
//     })
    
//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })


// const getCountry = (code) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((resolve) => {
//         if (resolve.status === 200) {
//             return resolve.json();
//         }
//         else {
//             throw new Error('An error has occured');
//         }
//     }).then((data) => {
//         return country = data.find((country) => country.alpha2Code === code);
//     });
// };

const getCountry = async (code) => {
    const data = await fetch('http://restcountries.eu/rest/v2/all')
    if (data.status === 200) {
        const countriesDetails = await data.json();
        return country = countriesDetails.find((country) => country.alpha2Code === code);
    }
    else {
        throw new Error('An error has occured');
    }
};

// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?token=3f105604dded0f').then((resolve) => {
//         if (resolve.status === 200) {
//             return resolve.json();
//         }
//         else {
//             throw new Error('An error occured');
//         }
//     });
// };

const getLocation = async () => {
    const data = await fetch('https://ipinfo.io/json?token=3f105604dded0f')
    if (data.status === 200) {
        return data.json();
    }
    else {
        throw new Error('An error occured');
    }
    
};



const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}