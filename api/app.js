// getCountry('IN').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(err)
// })

getCountry('IN').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(err)
})


getLocation().then((data) => {
    return getCountry(data.country)
}).then((country) => {
    console.log(country.name)    
}).catch((err) => {
    console.log(`Error: ${err}`)
})


getCurrentCountry().then((country) => {
    console.log(country)
}).catch((error) =>  {
    console.log(error)
}) 