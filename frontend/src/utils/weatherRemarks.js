function generateRemarks(weather_description, humidity, pressure){
    let remarks = ""

    if(weather_description.toLowerCase().match(/rain/g)){
        remarks += "Expect rainfall. "
    } else if(weather_description.toLowerCase().match(/clear/g)){
        remarks += "Clear skies expected. "
    } else {
        remarks += "Expect " + weather_description + ". "
    }

    if(humidity > 80){
        remarks += "High humidity levels detected. "
    } else if(humidity < 30){
        remarks += "Low humidity levels detected. "
    }

    if(pressure < 1000){
        remarks += "Low atmospheric pressure detected. "
    } else if (pressure > 1020){
        remarks += "High atmospheric pressure detected. "
    }

    if(weather_description.toLowerCase().match(/flood/g)){
        remarks += "You are advised to stay indoors today due to expected floods."
    } else if (weather_description.toLowerCase().match(/sun/g)){
        remarks += "Stay hydrated, seek shade, and wear sunscreen to protect against harmful UV rays."
    }

    return remarks.trim()
}

export default generateRemarks