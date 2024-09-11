const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "b895577b0efab9f0997b60ca7cfbed21"

const searchInput = document.getElementById('search-box')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
    else{
        var data = await response.json()
    }
   
    const cityName = document.getElementById('city')
    const humidity = document.getElementById('humidity')
    const wind = document.getElementById('wind')
    const temperature = document.getElementById('temperature')
    const weatherIcon = document.getElementById('weather-icon')	
    
   

    cityName.innerHTML= data.name
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`
    humidity.innerHTML = `${data.main.humidity} %`
    wind.innerHTML = `${data.wind.speed}km/h`
    
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = './images/clouds.png'

    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = './images/clear.png'

    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = './images/rain.png'

    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = './images/drizzle.png'
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = './images/mist.png'
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = './images/snow.png'
    }

    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'

    
    console.log(data)


    
    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value)
})



