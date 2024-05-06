const key = "8303ff5d040bdd9b489b6376056f2dfd"
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")


// async function checkWeather(city){
//     const response = await fetch(url + city + `&appid=${key}`)

//     if (response.status == 404){
//         document.querySelector(".p").style.display = "block"
//         document.querySelector(".weather").style.display = "none"
//     }
//     else{
//         const res = await response.json()

//         document.querySelector(".city").innerHTML = res.name
//         document.querySelector(".temperature").innerHTML = Math.round(res.main.temp) + "°c"
//         document.querySelector(".humidity").innerHTML = res.main.humidity + "%"
//         document.querySelector(".wind").innerHTML = res.wind.speed + " Km/h"

//         if (res.weather[0].main == "Clouds"){
//             document.querySelector(".weather-icon").src = "images/clouds.png"
//         }
//         else if(res.weather[0].main == "Clear"){
//             document.querySelector(".weather-icon").src = "images/clear-sky.png"
//         }

//         document.querySelector(".weather").style.display = "block"
//         document.querySelector(".p").style.display = "none"
//     }
    
// }
// checkWeather()

// btn.addEventListener("click", ()=>{
//     checkWeather(input.value)
// })

// above and below both code are correct 

btn.addEventListener("click", ()=>{
    async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`)

    if (response.status == 404){
        document.querySelector(".p").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        const res = await response.json()
        console.log(res);
        document.querySelector(".city").innerHTML = res.name
        document.querySelector(".temperature").innerHTML = Math.round(res.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = res.main.humidity + "%"
        document.querySelector(".wind").innerHTML = res.wind.speed + " Km/h"

        if (res.weather[0].main == "Clouds"){
            document.querySelector(".weather-icon").src = "images/clouds.png"
        }
        else if(res.weather[0].main == "Clear"){
            document.querySelector(".weather-icon").src = "images/clear-sky.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".p").style.display = "none"
    }
}
checkWeather(input.value)
})
