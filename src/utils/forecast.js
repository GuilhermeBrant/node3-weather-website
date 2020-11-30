const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8c5da80ee71577bcc170711b9aacbe04&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else  if(body.error){
            callback('Unable to find location.', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] 
                + '. It is currently ' 
                + body.current.temperature 
                + '°C out. There is a ' 
                + body.current.precip * 100
                + '% chance of rain'
                )
        }      
    })
}

module.exports = forecast