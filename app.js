const API_KEY = `aa1fda2f1d34ef2eb5a7b8bb101c7456`

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let form = document.querySelector('form')
let weather = document.querySelector('#weather')
let search = document.querySelector('#search')

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading....</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod == 404){
        weather.innerHTML = `<h2>Please enter valid city name</h2>`
        return
    }
    weather.innerHTML = ` <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  alt="">
</div>
<div>
    <h2>${data.main.temp}℃</h2>
    <br>
    
    <h2>${data.weather[0].main}</h2>
</div>`

}

form.addEventListener('submit', (e) => {
    getWeather(search.value);
    e.preventDefault()
})












