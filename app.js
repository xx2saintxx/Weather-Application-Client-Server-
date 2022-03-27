const axios = require('axios')
const path = require('path')

const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json({ limit: "5mb" }))
app.use(express.json({
    type: ['application/json', 'text/plain']
  }))


require('dotenv').config()
const PORT = 5500;
const weatherKEY = process.env.tmIO_KEY;
const geocodeKEY = process.env.geoKEY;

//placeholder values 
const lat = 43;
const long = 74;
const unit = 'imperial';

const forClient = {
    autocomplete:[],

/*------------------------------------------------*/
    // Assigned from accepting client-side input

    chosenPlace: 'Zion, Illinois, United States',

    /*
        Client Side dynamic inputs should be tracked by client js. 
        On 'input' event fired, client js will dynamically update a js object via 
        a constantly rewritten let-variable. On input, that object will make a post request to 
        this code with a stringified JSON object and "passed by reference" to dynInput. And
        dynInput will then be "passed by reference" into the URL's interpolated object property call
    */
    dynInput: '',
/*------------------------------------------------*/

/*------------------------------------------------
    Coordinates are only to be rewritten & retrieved 
    when "chosenPlace" is parameterized to 

    lat: ,
    long: 
--------------------------------------------------*/
}


app.post('/input', function(req,res) {
    r = req.body
    console.log(req.body)
    console.log(typeof(req.body))
    console.log(`my body is: ${r}`)
    res.json({msg: `got it`})
    res.end("bye")
    // const geocode = async () => {
    //     try {
    //         const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Zion.json?country=us&limit=5&types=postcode%2Clocality%2Cplace%2Cneighborhood%2Cdistrict&language=en&access_token=${geocodeKEY}`);
    //         const locations = response.data.features;
            
    //         let matches = locations.map(location => {
    //             return {
    //                 matchedPlace: location.place_name,
    //                 coord: location.center
    //             }
    //         });
    //         const anchor = matches.map(match => match.matchedPlace);
    //         forClient.autocomplete = anchor;
            
    //         // res.json(forClient.autocomplete);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // geocode();
})

// app.post('/input', (req, res) => {
//     forClient.dynInput = res.body
//     console.log(forClient.dynInput)
//     res.json(forClient.dynInput)
// })
    
// app.get('/', (req,res) =>{
//     const getWeather = async () => {
//         try {
//             const response = await axios.get(`https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=weatherCode&fields=temperatureApparent&fields=windSpeed&fields=temperature&fields=precipitationType&fields=precipitationProbability&fields=visibility&fields=humidity&timesteps=current&units=${unit}&apikey=${weatherKEY}`)
//             const weather = response.data.data;
//             res.json(weather)
//             console.log(weather)
//         } catch (error) { console.error(error); }
//     }
//     getWeather()
// })

app.listen(PORT, console.log('Listening on port ' + PORT));